import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const RECIPIENT = "info@contact.residenciatorremarti.es"

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const { firstName, lastName, phone, serviceInterest, questions } = body as Record<string, string>

  if (!firstName || !lastName || !phone || !serviceInterest) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 422 })
  }

  const { error } = await resend.emails.send({
    from: "Formulario Torre Martí <onboarding@resend.dev>",
    to: RECIPIENT,
    subject: `Nueva consulta: ${serviceInterest} — ${firstName} ${lastName}`,
    html: `
      <h2>Nueva consulta de la web</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td><strong>Nombre</strong></td><td>${firstName} ${lastName}</td></tr>
        <tr><td><strong>Teléfono</strong></td><td>${phone}</td></tr>
        <tr><td><strong>Tipo de estancia</strong></td><td>${serviceInterest}</td></tr>
        ${questions ? `<tr><td><strong>Consulta</strong></td><td style="white-space:pre-wrap">${questions}</td></tr>` : ""}
      </table>
    `,
  })

  if (error) {
    console.error("[contact] Resend error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
