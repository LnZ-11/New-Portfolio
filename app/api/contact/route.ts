import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    },
});

export async function POST(req: Request) {
  try {
    const { name ,email, phone, message } = await req.json();
    // Options de l'email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "*Portfolio*",
      text: `De:\n${name}\n\nEmail:\n${email}\n\nTéléphone:\n${phone}\n\nMessage:\n${message}`,
      html: `
      <!doctype html>
      <html><body>
        <h2>Nouveau message reçu</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message}</p>
      </body></html>
    `,
    };
    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}