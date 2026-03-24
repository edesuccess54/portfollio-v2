import fs from "fs";
import path from "path";

export function buildEmailTemplate(data: {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}) {
  const templatePath = path.join(process.cwd(), "template/contact-email-template.html");

  let html = fs.readFileSync(templatePath, "utf-8");

  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long", year: "numeric", month: "long",
    day: "numeric", hour: "2-digit", minute: "2-digit",
  });

  html = html
    .replace(/{{FULL_NAME}}/g, data.fullName)
    .replace(/{{EMAIL}}/g, data.email)
    .replace(/{{SUBJECT}}/g, data.subject)
    .replace(/{{MESSAGE}}/g, data.message)
    .replace(/{{TIMESTAMP}}/g, timestamp);

  return html;
}