import { NextResponse } from "next/server"

export async function GET() {
  const resendApiKey = process.env.RESEND_API_KEY
  const configured = typeof resendApiKey === "string" && resendApiKey.trim().length > 0

  return NextResponse.json(
    {
      ok: true,
      service: "resend",
      configured,
    },
    {
      status: configured ? 200 : 503,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  )
}
