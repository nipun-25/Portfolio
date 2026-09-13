import { NextResponse } from "next/server";
import { Resend } from "resend";

// In-memory rate limiting map for basic abuse prevention (rolling 60-second window)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5; // Allow up to 5 attempts per IP per minute

  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count += 1;
  return false;
}

// Helper to escape HTML characters in email templates
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    // 1. Client IP Rate Limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0].trim()
      : realIp || "127.0.0.1";

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          error:
            "Too many messages sent. Please wait a minute before trying again.",
        },
        { status: 429 }
      );
    }

    // 2. Parse and sanitize payload
    const body = await request.json();
    const { name, email, subject, message, botField } = body;

    // Anti-spam Honeypot Check: if botField is filled, silently drop submission
    if (botField && typeof botField === "string" && botField.trim().length > 0) {
      console.log("[CONTACT_API] Honeypot triggered. Silently dropping bot submission.");
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for reaching out!",
        },
        { status: 200 }
      );
    }

    // 3. Server-side validation
    const trimmedName = typeof name === "string" ? name.trim() : "";
    if (!trimmedName || trimmedName.length < 2 || trimmedName.length > 100) {
      return NextResponse.json(
        { error: "Please enter a valid name (2 to 100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = typeof email === "string" ? email.trim() : "";
    if (
      !trimmedEmail ||
      trimmedEmail.length > 100 ||
      !emailRegex.test(trimmedEmail)
    ) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const trimmedSubject =
      typeof subject === "string" && subject.trim().length > 0
        ? subject.trim().slice(0, 150)
        : "Portfolio Collaboration / Inquiry";

    const trimmedMessage = typeof message === "string" ? message.trim() : "";
    if (
      !trimmedMessage ||
      trimmedMessage.length < 10 ||
      trimmedMessage.length > 3000
    ) {
      return NextResponse.json(
        { error: "Message must be between 10 and 3,000 characters." },
        { status: 400 }
      );
    }

    // 4. Check for server-side Resend API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn(
        "[CONTACT_API] RESEND_API_KEY is not configured on the server."
      );
      return NextResponse.json(
        {
          error:
            "Email service is currently being configured. Please contact Nipun directly at nipunkulshrestha25@gmail.com.",
        },
        { status: 503 }
      );
    }

    // 5. Configurable email parameters
    // Default Resend sender: "Portfolio Contact <onboarding@resend.dev>"
    // Note: onboarding@resend.dev delivers to the account owner's registered email
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";
    const receiverEmail =
      process.env.CONTACT_RECEIVER_EMAIL || "nipunkulshrestha25@gmail.com";

    const formattedTimestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Clean plain text version
    const plainTextContent = `New Portfolio Contact Message
----------------------------------------
From: ${trimmedName} (${trimmedEmail})
Subject: ${trimmedSubject}
Date: ${formattedTimestamp} (IST)

Message:
${trimmedMessage}
----------------------------------------
Reply directly to this email to respond to ${trimmedName}.`;

    // Clean HTML version for Gmail
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>New Portfolio Contact Message</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; color: #f8fafc; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);">
    
    <!-- Top Accent Bar -->
    <div style="background-color: #fb6514; height: 6px; width: 100%;"></div>

    <div style="padding: 32px 28px;">
      <!-- Heading -->
      <div style="margin-bottom: 24px;">
        <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #fb6514; color: #ffffff; display: inline-block; vertical-align: middle; line-height: 40px; text-align: center; font-weight: 900; font-size: 14px; margin-right: 12px;">
          NK
        </div>
        <div style="display: inline-block; vertical-align: middle;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
            New Portfolio Message
          </h2>
          <span style="font-size: 12px; color: #94a3b8;">
            From your developer portfolio website
          </span>
        </div>
      </div>

      <!-- Visitor Details Card -->
      <div style="background-color: #0f172a; border-radius: 12px; padding: 18px 20px; margin-bottom: 24px; border: 1px solid rgba(255, 255, 255, 0.05);">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #94a3b8; width: 85px; font-weight: 600;">Name:</td>
            <td style="padding: 6px 0; color: #ffffff; font-weight: 700;">${escapeHtml(trimmedName)}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Email:</td>
            <td style="padding: 6px 0;">
              <a href="mailto:${escapeHtml(trimmedEmail)}" style="color: #fb6514; text-decoration: none; font-weight: 600;">
                ${escapeHtml(trimmedEmail)}
              </a>
            </td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Subject:</td>
            <td style="padding: 6px 0; color: #e2e8f0; font-weight: 600;">${escapeHtml(trimmedSubject)}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #94a3b8; font-weight: 600;">Date:</td>
            <td style="padding: 6px 0; color: #94a3b8; font-size: 12px;">${formattedTimestamp} (IST)</td>
          </tr>
        </table>
      </div>

      <!-- Message Content -->
      <div style="margin-bottom: 24px;">
        <h3 style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #fb6514;">
          Message Body
        </h3>
        <div style="background-color: #0f172a; border-left: 4px solid #fb6514; border-radius: 4px 12px 12px 4px; padding: 18px 20px; color: #f1f5f9; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-break: break-word;">
${escapeHtml(trimmedMessage)}
        </div>
      </div>

      <!-- Reply CTA -->
      <div style="text-align: center; padding-top: 8px;">
        <a href="mailto:${escapeHtml(trimmedEmail)}?subject=Re: ${encodeURIComponent(trimmedSubject)}" style="display: inline-block; background-color: #fb6514; color: #ffffff; font-size: 14px; font-weight: 700; padding: 12px 28px; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 12px rgba(251, 101, 20, 0.3);">
          Reply to ${escapeHtml(trimmedName)} &rarr;
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #0b1120; padding: 16px 24px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05); font-size: 11px; color: #64748b;">
      Sent via Nipun Kulshrestha's Portfolio &middot; Reply-To is configured to ${escapeHtml(trimmedEmail)}
    </div>
  </div>
</body>
</html>`;

    // 6. Initialize Resend client and send email
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: receiverEmail,
      replyTo: trimmedEmail,
      subject: `[Portfolio Contact] ${trimmedSubject} - from ${trimmedName}`,
      text: plainTextContent,
      html: htmlContent,
    });

    if (error) {
      console.error("[RESEND_DISPATCH_ERROR]", {
        name: error.name,
        message: error.message,
      });

      return NextResponse.json(
        {
          error:
            "Unable to deliver your message right now. Please try again or email Nipun directly at nipunkulshrestha25@gmail.com.",
        },
        { status: 502 }
      );
    }

    // 7. Genuine Success confirmed by Resend API
    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for reaching out! Your message has been sent successfully to Nipun.",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    console.error("[CONTACT_API_UNHANDLED_ERROR]", errorMessage);

    return NextResponse.json(
      {
        error:
          "An unexpected server error occurred. Please email directly at nipunkulshrestha25@gmail.com.",
      },
      { status: 500 }
    );
  }
}
