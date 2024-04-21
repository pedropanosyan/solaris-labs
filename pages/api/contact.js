import nodemailer from "nodemailer";
import exp from "node:constants";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export default async function SendEmail(req, res) {
    console.log('hola')
    const { name, email, message } = req.body;
    const user = process.env.EMAIL
    console.log(user)
    if (!name || !message || !emailRegex.test(email)) {
        return res.status(400).send("Do not pass validation");
    }
    console.log('paso')
    const transporter = await nodemailer.createTransport({
        service: 'smtp.gmail.com',
        secure: true,
        port: 465,
        auth: {
            user: user,
            pass: process.env.PASSWORD
        }
    });
    try {
        await transporter.sendMail({
            from: user,
            to: user,
            subject: `Contact form submission from ${name}`,
            html: `<p>You have a new contact form submission</p>
            <p><strong>Name: </strong> ${name}</p>
            <p><strong>Email: </strong> ${email}</p>
            <p><strong>Message: </strong> ${message}</p>`
        });
        return res.status(200).send("Email sent successfully");
    } catch (error) {
        return res.status(500).send("Email was not sent correctly");
    }


}