import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const { GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET, GMAIL_REFRESH_TOKEN, GMAIL_USER, GMAIL_RECEIVER } = process.env;

const oAuth2Client = new google.auth.OAuth2(
  GMAIL_CLIENT_ID,
  GMAIL_CLIENT_SECRET,
  'https://developers.google.com/oauthplayground'
);
oAuth2Client.setCredentials({ refresh_token: GMAIL_REFRESH_TOKEN });

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request) {
  if (!GMAIL_CLIENT_ID || !GMAIL_CLIENT_SECRET || !GMAIL_REFRESH_TOKEN || !GMAIL_USER || !GMAIL_RECEIVER) {
    console.error('Missing required Gmail OAuth environment variables.');
    return Response.json({ error: 'Server email configuration error.' }, { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, phone, company, service, budget, message } = body;

  if (!name || !email || !message) {
    return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  // Basic email format guard
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  try {
    const accessTokenObj = await oAuth2Client.getAccessToken();
    const accessToken = accessTokenObj?.token || accessTokenObj;

    if (!accessToken) {
      console.error('Failed to retrieve OAuth access token.');
      return Response.json({ error: 'Failed to generate access token.' }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: GMAIL_USER,
        clientId: GMAIL_CLIENT_ID,
        clientSecret: GMAIL_CLIENT_SECRET,
        refreshToken: GMAIL_REFRESH_TOKEN,
        accessToken,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });

    const date = new Date().toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
    });
    const time = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit', minute: '2-digit',
    });

    const safeName    = escapeHtml(name);
    const safeEmail   = escapeHtml(email);
    const safePhone   = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeService = escapeHtml(service);
    const safeBudget  = escapeHtml(budget);
    const safeMessage = escapeHtml(message);

    const optionalRows = [
      phone   && `<tr><td style="padding-bottom:8px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Phone</td></tr><tr><td style="padding-bottom:20px;color:#111827;font-size:16px;">${safePhone}</td></tr>`,
      company && `<tr><td style="padding-bottom:8px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Company</td></tr><tr><td style="padding-bottom:20px;color:#111827;font-size:16px;">${safeCompany}</td></tr>`,
      service && `<tr><td style="padding-bottom:8px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Service Interested In</td></tr><tr><td style="padding-bottom:20px;color:#111827;font-size:16px;">${safeService}</td></tr>`,
      budget  && `<tr><td style="padding-bottom:8px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Approximate Budget</td></tr><tr><td style="padding-bottom:20px;color:#111827;font-size:16px;">${safeBudget}</td></tr>`,
    ].filter(Boolean).join('');

    const result = await transporter.sendMail({
      from: `"Ekavex Contact Form" <${GMAIL_USER}>`,
      to: GMAIL_RECEIVER,
      bcc: GMAIL_USER,
      replyTo: email,
      subject: `✨ New Inquiry from ${safeName}${company ? ` — ${safeCompany}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Inquiry</title>
        </head>
        <body style="margin:0;padding:0;background-color:#f3f4f6;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
          <div style="max-width:600px;margin:40px auto;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.05);">

            <div style="background-color:#111827;padding:30px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">New Client Inquiry</h1>
              <p style="margin:8px 0 0;color:#9ca3af;font-size:13px;">via ekavex.in contact form</p>
            </div>

            <div style="padding:40px;">
              <table style="width:100%;border-collapse:collapse;margin-bottom:25px;">
                <tr>
                  <td style="padding-bottom:8px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">From</td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px;color:#111827;font-size:18px;font-weight:600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Email Address</td>
                </tr>
                <tr>
                  <td style="padding-bottom:20px;">
                    <a href="mailto:${safeEmail}" style="color:#f59e0b;font-size:16px;text-decoration:none;font-weight:500;">${safeEmail}</a>
                  </td>
                </tr>
                ${optionalRows}
                <tr>
                  <td style="padding-bottom:8px;color:#6b7280;font-size:12px;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Date Received</td>
                </tr>
                <tr>
                  <td style="color:#374151;font-size:16px;">${date} at ${time}</td>
                </tr>
              </table>

              <div style="background-color:#f9fafb;border-left:4px solid #111827;padding:20px;border-radius:4px;margin-top:10px;">
                <p style="margin:0 0 10px;color:#6b7280;font-size:12px;font-weight:600;text-transform:uppercase;">Project Brief</p>
                <p style="margin:0;color:#374151;font-size:16px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</p>
              </div>

              <div style="margin-top:35px;text-align:center;">
                <a href="mailto:${safeEmail}?subject=Re: Your Inquiry — Ekavex" style="background-color:#111827;color:#ffffff;padding:12px 25px;border-radius:6px;text-decoration:none;font-weight:600;font-size:14px;display:inline-block;">Reply to ${safeName}</a>
              </div>
            </div>

            <div style="background-color:#f9fafb;padding:20px;text-align:center;border-top:1px solid #e5e7eb;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">This email was sent from the contact form at ekavex.in</p>
            </div>

          </div>
        </body>
        </html>
      `,
    });

    console.log('Email sent. MessageId:', result.messageId, '| Response:', result.response);
    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error.message);
    return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
