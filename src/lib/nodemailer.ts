import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.BREVO_HOST,
    port: Number(process.env.BREVO_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.BREVO_USER,
        pass: process.env.BREVO_PASS,
    },
});

export async function sendEmail(opts: {
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
}) {
    const info = await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
    });
    return info;
}
