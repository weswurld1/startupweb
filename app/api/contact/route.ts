import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, service, message } = await req.json()

  if (!name || !email || !service || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
  }

try {
    await resend.emails.send({
      from: 'ByteClub Dev <noreply@info.byteclubdev.com>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    // Confirmación al cliente
    await resend.emails.send({
      from: 'ByteClub Dev <noreply@info.byteclubdev.com>',
      to: email,
      subject: `We received your message, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; background: #080808; color: #f0ede8;">
          <h2 style="color: #A6FF8C; font-size: 24px; margin-bottom: 16px;">We got your message!</h2>
          <p style="color: rgba(240,237,232,0.7); line-height: 1.7;">
            Hi ${name}, thanks for reaching out. We'll review your request and get back to you within 24 hours.
          </p>
          <hr style="border: none; border-top: 1px solid rgba(240,237,232,0.07); margin: 32px 0;" />
          <p style="color: rgba(240,237,232,0.4); font-size: 13px;">
            <strong style="color: rgba(240,237,232,0.6);">Service:</strong> ${service}
          </p>
          <p style="color: rgba(240,237,232,0.4); font-size: 13px; margin-top: 8px;">
            <strong style="color: rgba(240,237,232,0.6);">Your message:</strong> ${message}
          </p>
          <hr style="border: none; border-top: 1px solid rgba(240,237,232,0.07); margin: 32px 0;" />
          <p style="color: rgba(240,237,232,0.4); font-size: 12px;">ByteClub Dev · byteclubdev.com</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}