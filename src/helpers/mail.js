// Nodemailer
import nodemailer from "nodemailer"

export default async function mail({
  name,
  email,
  phone,
  company,
  website,
  message,
  service,
}) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: "developer@infinitimediainc.com",
        pass: "lwtfjpsmswjhgpos",
      },
    })
    const servicesList = Array.isArray(service)
      ? service.map((s) => `• ${s}`).join("<br>")
      : `• ${service ? service : "N/A"}`

    const mailOptions = {
      from: "developer@infinitimediainc.com",
      to: ["adil@infinityanimations.com", "developer@infinitimediainc.com"],
      subject: `New Lead Generated - SEO Company`,
      html: `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        color: #333;
                        background-color: #f4f4f4;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ebebeb;
                        padding: 20px;
                        border-radius: 8px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        font-size: 24px;
                        color: #333;
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    p {
                        font-size: 16px;
                        line-height: 1.5;
                        margin: 10px 0;
                    }
                    .details {
                        border-top: 1px solid #ddd;
                        margin-top: 20px;
                        padding-top: 20px;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 5px;
                    }
                    .field {
                        margin-bottom: 15px;
                    }
                    .field strong {
                        color: #555;
                        display: block;
                        margin-bottom: 5px;
                    }
                    .services {
                        background-color: #f8f9fa;
                        padding: 15px;
                        border-radius: 5px;
                        margin-top: 10px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>New Contact Form Submission</h1>
                    <p style="text-align:center">You have received a new message from your contact form. Here are the details:</p>
                    <div class="details">
                        <div class="field">
                            <strong>Name:</strong>
                            ${name}
                        </div>
                        <div class="field">
                            <strong>Email:</strong>
                            ${email}
                        </div>
                        <div class="field">
                            <strong>Phone Number:</strong>
                            ${phone}
                        </div>
                        <div class="field">
                            <strong>Company:</strong>
                            ${company ? company : "N/A"}
                        </div>
                        <div class="field">
                            <strong>Website URL:</strong>
                            ${website ? website : "N/A"}
                        </div>
                        <div class="field">
                            <strong>Services Interested In:</strong>
                            <div class="services">
                                ${servicesList ? servicesList : "N/A"}
                            </div>
                        </div>
                        <div class="field">
                            <strong>Message:</strong>
                            <p>${message ? message : "N/A"}</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>`,
    }
    const mailresponse = await transporter.sendMail(mailOptions)
    return mailresponse
  } catch (error) {
    throw new Error(error.message)
  }
}
