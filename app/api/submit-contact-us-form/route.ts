import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } =
      await request.json();

    const subjectLine = "Terrum - Contact Us Form Submission";

    let emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    if (phone) {
      emailHtml += `
        <p>Phone:${phone}</p>
      `;
    }

    if (email) {
      emailHtml += `
        <p>Email:${email}</p>
      `;
    }

    const data = await resend.emails.send({
      from: "contact.us.form@terrum.in",
      to: "abhishek@terrum.in",
      subject: subjectLine,
      html: emailHtml,
    });

    // Add contact to Resend audience
    try {
      await resend.contacts.create({
        email,
        firstName: name.split(" ")[0],
        lastName: name.split(" ").slice(1).join(" "),
        unsubscribed: false,
        audienceId: process.env.RESEND_AUDIENCE_ID || "",
      });
    } catch (contactError) {
      console.error("Error adding contact to Resend:", contactError);
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
