// src/app/api/contact/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Email del negocio que recibirá los mensajes
const BUSINESS_EMAIL = 'gallardoscleaninglpz@gmail.com';
// Desde qué dirección saldrán los correos (debe ser un dominio verificado en Resend,
// o usar onboarding@resend.dev para pruebas sin dominio propio)
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // --- Validación en servidor ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, or message.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // --- Email al negocio (notificación de nuevo lead) ---
    const businessEmail = resend.emails.send({
      from: FROM_EMAIL,
      to: BUSINESS_EMAIL,
      reply_to: email,
      subject: `📬 Nuevo Mensaje de Contacto: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background-color: #2a3a6a; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">¡Nuevo Mensaje de Contacto!</h1>
            <p style="color: #aed6f1; margin: 5px 0 0;">Desde el sitio web de Gallardos Cleaning</p>
          </div>
          <div style="padding: 24px; background-color: #f9fafb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 140px;">Nombre:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #2a3a6a;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Teléfono:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone}" style="color: #2a3a6a;">${phone}</a>
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #374151; vertical-align: top;">Mensaje:</td>
                <td style="padding: 10px 0; color: #111827; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px; text-align: center; background-color: #e8f5e9; border-radius: 0 0 6px 6px;">
            <p style="margin: 0; font-size: 13px; color: #555;">
              Responde directamente a este email para contactar a <strong>${name}</strong>
            </p>
          </div>
        </div>
      `,
    });

    // --- Email de confirmación al cliente ---
    const clientEmail = resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `✅ Recibimos tu mensaje, ${name}!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <div style="background-color: #2a3a6a; padding: 20px; border-radius: 6px 6px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 22px;">¡Gracias, ${name}!</h1>
          </div>
          <div style="padding: 24px;">
            <p style="color: #374151; font-size: 16px;">Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad.</p>
            <p style="color: #374151; font-size: 16px;">Mientras tanto, puedes contactarnos directamente:</p>
            <ul style="color: #374151; font-size: 15px; line-height: 1.8;">
              <li>📞 Teléfono: <a href="tel:737-618-8548" style="color: #2a3a6a;">737-618-8548</a></li>
              <li>📘 Facebook: <a href="https://www.facebook.com/GallardosCleaning" style="color: #2a3a6a;">Gallardos Cleaning</a></li>
            </ul>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
            <p style="color: #9ca3af; font-size: 13px; text-align: center;">Gallardos Cleaning · Austin, TX 78754</p>
          </div>
        </div>
      `,
    });

    // Enviar ambos emails en paralelo
    const [businessResult, clientResult] = await Promise.all([businessEmail, clientEmail]);

    // Verificar errores de Resend
    if (businessResult.error || clientResult.error) {
      const err = businessResult.error || clientResult.error;
      console.error('[Contact API] Resend error:', err);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('[Contact API Error]', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
