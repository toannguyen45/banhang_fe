"use server";

import { mailType } from "@/types/contact-form";
import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

export async function sendContact(formData: mailType) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Read the email template file
    const templatePath = path.resolve("templates", "contact-email.hbs");
    const source = fs.readFileSync(templatePath, "utf8");

    // Compile the template
    const template = handlebars.compile(source);

    // Replace placeholders with actual data
    const html = template(formData);

    const mailOptions = {
      from: `${formData.name}`,
      to: process.env.MAIL_RECEIVER_ADDRESS,
      subject: `${formData.name} muốn liên hệ với bạn`,
      text: formData.message,
      html: html,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Email đã được gửi thành công",
    };
  } catch {
    return {
      success: false,
      message: "Có lỗi xảy ra khi gửi mail, vui lòng thử lại sau",
    };
  }
}
