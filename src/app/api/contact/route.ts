/*import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const payload = {
      service_id: process.env.EMAILJS_SERVICE_ID,
      template_id: process.env.EMAILJS_TEMPLATE_ID,
      user_id: process.env.EMAILJS_PRIVATE_KEY, // clé privée EmailJS
      template_params: {
        from_name: name,
        from_email: email,
        message,
      },
    };

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`EmailJS error: ${text}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur EmailJS:", err);
    return NextResponse.json({ success: false, error: "Impossible d'envoyer l'email." }, { status: 500 });
  }
}
*/