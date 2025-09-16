import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // You'll need to update this with your verified domain
      to: ["shubhamasati.dev@gmail.com"], // Your email address
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(
              /\n/g,
              "<br>"
            )}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 12px;">
              This email was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This email was sent from your portfolio contact form.
      `,
    });

    // Send auto-reply to the sender
    await resend.emails.send({
      from: "Shubham Asati <onboarding@resend.dev>", // You'll need to update this with your verified domain
      to: [email],
      subject: "Thank you for contacting me!",
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #007bff; text-align: center;">Thank You for Reaching Out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible, usually within 24-48 hours.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Your Message Summary:</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message.substring(0, 100)}${
        message.length > 100 ? "..." : ""
      }</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Check out my <a href="https://github.com/ShubhamAsati-123" style="color: #007bff;">GitHub</a> for my latest projects</li>
            <li>Connect with me on <a href="https://linkedin.com/in/shubham-asati" style="color: #007bff;">LinkedIn</a></li>
            <li>Explore my <a href="https://shubhamasati.tech" style="color: #007bff;">portfolio</a> for more details</li>
          </ul>
          
          <p>Best regards,<br>
          <strong>Shubham Asati</strong><br>
          Full Stack Developer & AI Enthusiast</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 12px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
      text: `
        Hi ${name},
        
        Thank you for contacting me through my portfolio website. I've received your message and will get back to you as soon as possible, usually within 24-48 hours.
        
        Your Message Summary:
        Subject: ${subject}
        Message: ${message.substring(0, 100)}${
        message.length > 100 ? "..." : ""
      }
        
        In the meantime, feel free to:
        - Check out my GitHub: https://github.com/ShubhamAsati-123
        - Connect with me on LinkedIn: https://linkedin.com/in/shubham-asati
        - Explore my portfolio: https://shubhamasati.tech
        
        Best regards,
        Shubham Asati
        Full Stack Developer & AI Enthusiast
        
        ---
        This is an automated response. Please do not reply to this email.
      `,
    });

    return NextResponse.json(
      {
        message: "Email sent successfully!",
        data: emailData.data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
