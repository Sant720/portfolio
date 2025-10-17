"use server";

import ContactFormEmail from "@/components/email/ContactFormEmail";
import { Resend } from "resend";
import { z } from "zod";
import { ContactFormSchema } from "./schemas";

// instantiate with the API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(payload: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const resp = await resend.emails.send({
      // MUST be a from address on your verified domain
      from: "no-reply@santiagobolivar.dev",
      // deliver to your Gmail
      to: "santiago.bolivar7@gmail.com",
      subject: `New message from ${payload.name}`,
      // include reply-to so you can reply directly to the visitor
      headers: {
        "Reply-To": payload.email,
      },
      // both plain text and HTML
      text: `${payload.message}\n\nReply to: ${payload.email}`,
      html: `<p>${payload.message.replace(/\n/g, "<br/>")}</p><p>Reply to: <a href="mailto:${payload.email}">${payload.email}</a></p>`,
    });

    // defensively extract an id from the response (avoid non-serializable objects)
    const id = (resp as any)?.id ?? (resp as any)?.messageId ?? null;

    // return a plain object only (no classes/prototypes)
    return { success: true, id };
  } catch (err) {
    console.error("sendEmail error:", err);
    const message = err instanceof Error ? err.message : String(err ?? "Unknown error");
    return { success: false, error: message };
  }
}
