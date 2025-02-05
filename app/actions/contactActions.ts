"use server";

import { mailType } from "@/types/contact-form";
import nodemailer from "nodemailer";

export async function sendContact(formData: mailType) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `${formData.name}`,
      to: process.env.MAIL_RECEIVER_ADDRESS,
      subject: `${formData.name} muốn liên hệ với bạn`,
      text: formData.message,
      html: "",
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
