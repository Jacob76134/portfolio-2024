"use server"

import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
    const formData = await request.json();

    // console.log('formdata', formData);

    try {
        const response = await resend.emails.send({
            from: 'noreply@goj2.com',
            to: ['jacob@goj2.com'],
            subject: 'New Form Submission',
            react: EmailTemplate(formData),
        });

        // console.log('response', response);

        return new Response(JSON.stringify({ message: "Form submitted and email sent successfully!" }), {
            headers: { 'Content-Type': 'application/json' },
          });

    } catch (error:any) {
        console.error(error); 
        return Response.json({ error: error.message || "An unknown error occurred" });
    }
}