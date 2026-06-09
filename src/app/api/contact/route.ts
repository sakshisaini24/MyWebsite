import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { error: "Contact form is not configured. Please add WEB3FORMS_ACCESS_KEY." },
      { status: 503 },
    );
  }

  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      access_key: accessKey,
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      subject: `Portfolio message from ${name.trim()}`,
      from_name: "Sakshi Saini Portfolio",
    }),
  });

  const data = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !data.success) {
    return NextResponse.json(
      { error: data.message ?? "Failed to send message. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
