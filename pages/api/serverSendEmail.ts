import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const email = req.body.email;
    const message = req.body.message;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_FORM_EMAIL,
        pass: process.env.MY_FORM_EMAIL_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_FORM_EMAIL,
      to: process.env.MY_FORM_EMAIL,
      subject: `Message from (${email})`,
      text: message,
    };

    try {
      await transport.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent" });
    } catch (err) {
      res.status(500).json({ error: err });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
