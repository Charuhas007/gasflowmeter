import { NextRequest, NextResponse } from 'next/server';
import { saveLead } from '@/lib/db';

/**
 * POST /api/contact
 *
 * 1. Persists lead into MariaDB/MySQL (`contact_leads` table).
 * 2. Sends HTML notification email to response@gasflowmeter.net via Hostinger SMTP.
 * 3. Sends confirmation auto-responder to the enquirer.
 */

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  product?: string;
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

    // Capture client metadata
    const ipAddress = 
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      null;
    const userAgent = request.headers.get('user-agent') || null;

    const productLabels: Record<string, string> = {
      'thermal-mass': 'Thermal Mass Flow Meter',
      'compact-gas': 'Compact Gas Flow Meter',
      'air-flow': 'Air Flow Meter',
      'steam-flow': 'Steam Flow Meter',
      'insertion-thermal': 'Insertion Type Thermal Mass Flow Meter',
      'electromagnetic': 'Electromagnetic Flow Meter',
      'other': 'Other / Not sure',
    };
    const productLabel = (product && productLabels[product]) || product || 'Not specified';

    // ── 1. Save to Database ──────────────────────────────────
    let dbSaved = false;
    let leadId: number | null = null;
    try {
      leadId = await saveLead({
        firstName,
        lastName,
        email,
        phone: phone || null,
        company: company || null,
        product: productLabel,
        message,
        ipAddress,
        userAgent,
      });
      dbSaved = true;
      console.log(`[Contact API] Lead saved to database with ID: ${leadId}`);
    } catch (dbError) {
      console.error('[Contact API] Failed to save lead to database:', dbError);
      // We will still attempt to send the email so the lead is never lost
    }

    // ── 2. Send Notification Email ───────────────────────────
    let emailSent = false;
    try {
      const nodemailer = await import('nodemailer');

      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST || 'mail.gasflowmeter.net',
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: true,
        auth: {
          user: process.env.SMTP_USER || 'response@gasflowmeter.net',
          pass: process.env.SMTP_PASS,
        },
      });

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
              <p style="color: #94A3B8; margin: 4px 0 0; font-size: 14px;">GasFlowmeter.net ${leadId ? `(Lead #${leadId})` : ''}</p>
            </div>
            <div style="padding: 32px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; width: 140px; font-size: 14px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: 600; font-size: 14px;">${firstName} ${lastName}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;"><a href="mailto:${email}" style="color: #0055FF;">${email}</a></td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${phone || 'Not provided'}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${company || 'Not provided'}</td></tr>
                <tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Product</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px;">${productLabel}</td></tr>
                ${leadId ? `<tr><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748B; font-size: 14px;">Database Status</td><td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-size: 14px; color: #16A34A; font-weight: 600;">Saved to MariaDB (ID: ${leadId})</td></tr>` : ''}
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

      // Auto-reply to enquirer
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
              <p>We have received your enquiry regarding <strong>${productLabel}</strong> and our technical team will review your specifications and contact you within <strong>1–2 business days</strong>.</p>
              <p>For urgent requirements, you can reach our technical team directly:</p>
              <ul style="padding-left: 20px; color: #475569;">
                <li>📞 <a href="tel:+9102027127044" style="color: #0055FF;">+91 (020) 27127044</a></li>
                <li>✉️ <a href="mailto:response@gasflowmeter.net" style="color: #0055FF;">response@gasflowmeter.net</a></li>
              </ul>
              <p style="margin-top: 24px; color: #64748B; font-size: 13px;">— Team Manas Microsystems<br/>EL-54, J Block, Electronic Zone, M.I.D.C., Bhosari, Pune – 411 026</p>
            </div>
          </div>
        `,
      });

      emailSent = true;
    } catch (emailError) {
      console.error('[Contact API] Failed to send email:', emailError);
    }

    // If either DB or Email succeeded, we treat the submission as successful
    if (dbSaved || emailSent) {
      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully.',
        leadId,
      });
    }

    // Both failed
    return NextResponse.json(
      {
        success: false,
        error: 'Unable to process your request at this moment. Please email us directly at response@gasflowmeter.net',
      },
      { status: 500 }
    );
  } catch (error) {
    console.error('[Contact API] Unexpected error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Server error. Please try again or email us directly at response@gasflowmeter.net',
      },
      { status: 500 }
    );
  }
}
