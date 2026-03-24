import { buildEmailTemplate } from "@/src/utils/buildEmailTemplate";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const {fullName, email, subject, message} = await req.json();

    // options for sending email 
    const options = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_RECEIVER,
        replyTo: email,
        subject: `✉ New Message: ${subject}`,
        html: buildEmailTemplate({ fullName, email, subject, message }),
    }

    try {

        if (!fullName || !email || !subject || !message) {
            return NextResponse.json({error: true, message: "All fields are required." }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: false, // true for port 465, false for 587
            auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail(options);

        return NextResponse.json(
            { 
                success: true, message: 'Your Email has been sent successfully, we would be in touch soon' 
            }, 
            { status: 200 }
        )

    } catch (error) {
        console.error("Email Error: ", error)
        const message = error instanceof Error ? error.message : "Unknown error"
        return NextResponse.json({ error: true, message }, { status: 500 })
    }
}