import { NextResponse } from "next/server";
import { Resend } from "resend";

type InquiryType = "general" | "billing" | "order" | "other";

function getRecipient(inquiry: InquiryType): string {
  switch (inquiry) {
    case "billing":
      return "billing@claimdive.com";
    case "order":
      return "orders@claimdive.com";
    case "general":
    case "other":
    default:
      return "info@claimdive.com";
  }
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = (await req.json()) as Record<string, unknown>;
    const inquiry = String(body.inquiry ?? "") as InquiryType;

    if (!["general", "billing", "order", "other"].includes(inquiry)) {
      return NextResponse.json({ ok: false, error: "Invalid inquiry" }, { status: 400 });
    }

    const name = String(body.name ?? "");
    const email = String(body.email ?? "");
    const message = String(body.message ?? "");

    const serviceType = String(body.service_type ?? "");
    const barNumber = String(body.bar_number ?? "");
    const requestInfo = String(body.request_info ?? "");
    const certify = Boolean(body.certify);

    // Basic required fields
    if (inquiry === "order") {
      if (!name.trim() || !email.trim() || !serviceType.trim() || !barNumber.trim() || !requestInfo.trim()) {
        return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
      }
      if (!certify) {
        return NextResponse.json({ ok: false, error: "Certification required" }, { status: 400 });
      }
    } else {
      if (!name.trim() || !email.trim() || !message.trim()) {
        return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
      }
    }

    const to = getRecipient(inquiry);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);

    const subject =
      inquiry === "order"
        ? "New order request (Claim Dive)"
        : inquiry === "billing"
          ? "New billing message (Claim Dive)"
          : "New message (Claim Dive)";

    const detailsHtml =
      inquiry === "order"
        ? `
          <p><strong>Inquiry:</strong> Order request</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Service type:</strong> ${escapeHtml(serviceType)}</p>
          <p><strong>Law Firm / Bar Number:</strong> ${escapeHtml(barNumber)}</p>
          <p><strong>Request information:</strong></p>
          <pre style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui">${escapeHtml(
            requestInfo
          )}</pre>
        `
        : `
          <p><strong>Inquiry:</strong> ${escapeHtml(inquiry)}</p>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;font-family:ui-sans-serif,system-ui">${escapeHtml(
            message
          )}</pre>
        `;

    await resend.emails.send({
      from: "Claim Dive <no-reply@claimdive.com>",
      to: [to],
      replyTo: email ? [email] : undefined,
      subject,
      html: `
        <div style="font-family:ui-sans-serif,system-ui;line-height:1.5">
          <h2 style="margin:0 0 12px">New website submission</h2>
          ${detailsHtml}
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

