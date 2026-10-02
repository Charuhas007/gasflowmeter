import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/contact
 *
 * Receives contact form submissions and:
 *  1. Sends an email notification to response@gasflowmeter.net via Hostinger SMTP
 *  2. Returns a JSON response (success or error)
 *
 * Environment variables required (set in Hostinger → Node.js → Environment Variables):
 *   SMTP_HOST      = mail.gasflowmeter.net  (Hostinger mail server)
 *   SMTP_PORT      = 465
 *   SMTP_USER      = response@gasflowmeter.net
 *   SMTP_PASS      = (your email password)
 *   CONTACT_TO     = response@gasflowmeter.net  (recipient inbox)
 */

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const { firstName, lastName, email, phone, company, product, message } = body;

    // ── Basic validation ─────────────────────────────────────
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Required fields are missing.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // ── Send email via nodemailer ────────────────────────────
    // Dynamically import so it's only loaded server-side
    const nodemailer = await import('nodemailer');

    const transporter = nodemailer.default.createTransport({
      host: process.env.SMTP_HOST || 'mail.gasflowmeter.net',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER || 'response@gasflowmeter.net',
        pass: process.env.SMTP_PASS,
      },
    });

    const productLabels: Record<string, string> = {
      'thermal-mass': 'Thermal Mass Flow Meter',
      'compact-gas': 'Compact Gas Flow Meter',
      'air-flow': 'Air Flow Meter',
      'steam-flow': 'Steam Flow Meter',
      'insertion-thermal': 'Insertion Type Thermal Mass Flow Meter',
      'electromagnetic': 'Electromagnetic Flow Meter',
      'other': 'Other / Not sure',
    };

    const productLabel = productLabels[product] || product || 'Not specified';

    // Email to Manas team
    await transporter.sendMail({
      from: `"GasFlowmeter.net Enquiry" <${process.env.SMTP_USER || 'response@gasflowmeter.net'}>`,
      to: process.env.CONTACT_TO || 'response@gasflowmeter.net',
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName} — ${productLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background: #0F172A; padding: 24px 32px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h2>
            <p style="color: #94A3B8; margin: 4px 0 0; font-size: 14px;">GasFlowmeter.net</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; width: 140px; font-size: 14px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; font-size: 14px;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="mailto:${email}" style="color: #0055FF;">${email}</a></td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${phone || 'Not provided'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${company || 'Not provided'}</td></tr>
              <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Product</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${productLabel}</td></tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #64748B; font-size: 14px; margin-bottom: 8px;">Message:</p>
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
            </div>
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e2e8f0;">
              <p style="color: #94A3B8; font-size: 12px; margin: 0;">Submitted via gasflowmeter.net/contact · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to the enquirer
    await transporter.sendMail({
      from: `"Manas Microsystems" <${process.env.SMTP_USER || 'response@gasflowmeter.net'}>`,
      to: email,
      subject: 'Thank you for your enquiry — Manas Microsystems',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background: #0F172A; padding: 24px 32px;">
            <h2 style="color: white; margin: 0; font-size: 20px;">Thank you, ${firstName}!</h2>
            <p style="color: #94A3B8; margin: 4px 0 0; font-size: 14px;">Manas Microsystems Pvt. Ltd.</p>
          </div>
          <div style="padding: 32px; font-size: 15px; line-height: 1.7; color: #334155;">
            <p>We have received your enquiry regarding <strong>${productLabel}</strong> and our team will get back to you within <strong>1–2 business days</strong>.</p>
            <p>For urgent requirements, you can reach us directly:</p>
            <ul style="padding-left: 20px; color: #475569;">
              <li>📞 <a href="tel:+9102027127044" style="color: #0055FF;">+91 (020) 27127044</a></li>
              <li>✉️ <a href="mailto:response@gasflowmeter.net" style="color: #0055FF;">response@gasflowmeter.net</a></li>
            </ul>
            <p style="margin-top: 24px; color: #64748B; font-size: 13px;">— Team Manas Microsystems<br/>EL-54, J Block, Electronic Zone, M.I.D.C., Bhosari, Pune – 411 026</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Your message has been sent successfully.' });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again or email us directly at response@gasflowmeter.net' },
      { status: 500 }
    );
  }
}
