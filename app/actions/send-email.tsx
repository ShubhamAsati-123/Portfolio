'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: {
  email: string
  message: string
  name?: string
}) {
  try {
    // Send email to Shubham
    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: 'asatishubham2004@gmail.com',
      subject: `New Portfolio Contact: ${formData.name || formData.email}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${formData.email}</p>
        ${formData.name ? `<p><strong>Name:</strong> ${formData.name}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Send acknowledgement email to the sender
    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: formData.email,
      subject: 'Message Received - Shubham Asati',
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${formData.name || 'there'},</p>
        <p>I've received your message and appreciate you taking the time to connect with me. I'll get back to you as soon as possible.</p>
        <p><strong>Your Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
        <hr style="margin: 20px 0;">
        <p>Best regards,<br>Shubham Asati</p>
      `,
    })

    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, message: 'Failed to send email. Please try again.' }
  }
}
