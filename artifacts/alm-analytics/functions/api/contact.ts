interface Env {
  RESEND_API_KEY?: string;
  CONTACT_TO_EMAIL?: string;
  CONTACT_FROM_EMAIL?: string;
}

interface PagesContext {
  request: Request;
  env: Env;
}

interface ContactRequest {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  projectType?: unknown;
  message?: unknown;
  website?: unknown;
}

const RESEND_EMAILS_ENDPOINT = "https://api.resend.com/emails";
const MAX_FIELD_LENGTH = 500;
const MAX_MESSAGE_LENGTH = 5000;

export async function onRequestPost(context: PagesContext) {
  const { request, env } = context;

  if (!env.RESEND_API_KEY || !env.CONTACT_TO_EMAIL || !env.CONTACT_FROM_EMAIL) {
    console.error("Missing contact form environment variables.");
    return json({ error: "Contact form is not configured." }, 500);
  }

  let body: ContactRequest;

  try {
    body = (await request.json()) as ContactRequest;
  } catch {
    return json({ error: "Invalid JSON request." }, 400);
  }

  const honeypot = toTrimmedString(body.website, MAX_FIELD_LENGTH);
  if (honeypot) {
    return json({ ok: true }, 200);
  }

  const name = toTrimmedString(body.name, MAX_FIELD_LENGTH);
  const email = toTrimmedString(body.email, MAX_FIELD_LENGTH).toLowerCase();
  const organization = toTrimmedString(body.organization, MAX_FIELD_LENGTH);
  const projectType = toTrimmedString(body.projectType, MAX_FIELD_LENGTH);
  const message = toTrimmedString(body.message, MAX_MESSAGE_LENGTH);

  if (!name || !email || !organization || !projectType || !message) {
    return json(
      { error: "Name, email, organization, project type, and message are required." },
      400,
    );
  }

  if (!isValidEmail(email)) {
    return json({ error: "A valid email address is required." }, 400);
  }

  const emailHtml = `
    <h2>New ALM Analytics inquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
    <p><strong>Project Type:</strong> ${escapeHtml(projectType)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  const response = await fetch(RESEND_EMAILS_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.CONTACT_FROM_EMAIL,
      to: [env.CONTACT_TO_EMAIL],
      reply_to: email,
      subject: `New inquiry from ${name}`,
      html: emailHtml,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Resend error:", errorText);
    return json({ error: "Email failed to send." }, 502);
  }

  return json({ ok: true }, 200);
}

function toTrimmedString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function json(data: unknown, status = 200, headers: HeadersInit = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return map[char];
  });
}
