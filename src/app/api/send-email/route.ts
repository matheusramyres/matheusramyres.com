import { profileContent } from '@/domains/profile/profile.content';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from =
      process.env.RESEND_FROM ||
      `no-reply@${process.env.NEXT_PUBLIC_VERCEL_ENV || 'example.com'}`;
    const to = process.env.CONTACT_RECEIVER_EMAIL || profileContent.email;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing RESEND_API_KEY on server' },
        { status: 500 },
      );
    }

    const subjectLine =
      subject && subject.length
        ? `Contato via site: ${subject}`
        : `Contato via site de ${name}`;
    const html = `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject || '-'}</p>
      <p><strong>Mensagem:</strong></p>
      <div>${message.replace(/\n/g, '<br/>')}</div>
    `;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        subject: subjectLine,
        html,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return NextResponse.json(
        { error: `Resend error: ${text}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: message || 'Unknown error' },
      { status: 500 },
    );
  }
}
