/*
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        const name = data.get('name')?.toString();
        const email = data.get('email')?.toString();
        const message = data.get('message')?.toString();

        if (!name || !email || !message) {
            return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
        }

        await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // or your verified domain
            to: import.meta.env.CONTACT_EMAIL,
            replyTo: email,
            subject: `New contact from ${name}`,
            text: message,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to send message.' }), { status: 500 });
    }
};*/

// TODO: Implement a contact form API route using Resend for email sending. The above code is a placeholder and should be uncommented and adjusted as needed.