import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send notification to you about new subscriber
    await resend.emails.send({
      from: "Newsletter <onboarding@resend.dev>",
      to: ["shubhamasati.dev@gmail.com"],
      subject: "New Newsletter Subscription",
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #007bff;">New Newsletter Subscription!</h2>
          <p>Someone just subscribed to your newsletter:</p>
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    // Send welcome email to subscriber
    await resend.emails.send({
      from: "Shubham Asati <onboarding@resend.dev>",
      to: [email],
      subject: "Welcome to my Newsletter!",
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #007bff; text-align: center;">Welcome to my Newsletter! 🎉</h2>
          
          <p>Thank you for subscribing to my newsletter! I'm excited to have you on board.</p>
          
          <p>Here's what you can expect:</p>
          <ul style="line-height: 1.8;">
            <li>🚀 Latest updates on my projects and tech journey</li>
            <li>💡 Tips and insights on full-stack development</li>
            <li>🤖 AI and machine learning discoveries</li>
            <li>📚 Resources and tutorials I find valuable</li>
            <li>🏆 Achievements and milestones in my career</li>
          </ul>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <h3 style="color: #333; margin-top: 0;">Stay Connected</h3>
            <p>Follow me on:</p>
            <div style="margin: 15px 0;">
              <a href="https://github.com/ShubhamAsati-123" style="color: #007bff; text-decoration: none; margin: 0 10px;">GitHub</a> |
              <a href="https://linkedin.com/in/shubham-asati" style="color: #007bff; text-decoration: none; margin: 0 10px;">LinkedIn</a> |
              <a href="https://shubhamasati.tech" style="color: #007bff; text-decoration: none; margin: 0 10px;">Portfolio</a>
            </div>
          </div>
          
          <p>I typically send updates once or twice a month, so you won't be overwhelmed with emails.</p>
          
          <p>Best regards,<br>
          <strong>Shubham Asati</strong><br>
          Full Stack Developer & AI Enthusiast</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #888; font-size: 12px;">
              You can unsubscribe at any time by replying to this email with "Unsubscribe" in the subject line.
            </p>
          </div>
        </div>
      `,
      text: `
        Welcome to my Newsletter!
        
        Thank you for subscribing to my newsletter! I'm excited to have you on board.
        
        Here's what you can expect:
        - Latest updates on my projects and tech journey
        - Tips and insights on full-stack development
        - AI and machine learning discoveries
        - Resources and tutorials I find valuable
        - Achievements and milestones in my career
        
        Stay Connected:
        - GitHub: https://github.com/ShubhamAsati-123
        - LinkedIn: https://linkedin.com/in/shubham-asati
        - Portfolio: https://shubhamasati.tech
        
        I typically send updates once or twice a month, so you won't be overwhelmed with emails.
        
        Best regards,
        Shubham Asati
        Full Stack Developer & AI Enthusiast
        
        ---
        You can unsubscribe at any time by replying to this email with "Unsubscribe" in the subject line.
      `,
    });

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    return NextResponse.json(
      { error: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
