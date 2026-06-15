import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received POST request on /api/contact with body:', body);
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    console.log('Sending email using Resend...');
    const resendResult = await resend.emails.send({
      from: 'Ekavex Contact Form <onboarding@resend.dev>',
      to: 'contact@ekavex.in',
      replyTo: email,
      subject: `New Inquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
          <tr><td style="padding:8px;font-weight:bold;width:140px;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || '—'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${company || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Service</td><td style="padding:8px;">${service || '—'}</td></tr>
          <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold;">Budget</td><td style="padding:8px;">${budget || '—'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;white-space:pre-wrap;">${message}</td></tr>
        </table>
      `,
    });
    console.log('Resend send result:', resendResult);

    return Response.json({ success: true, id: resendResult?.data?.id, resendError: resendResult?.error });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
