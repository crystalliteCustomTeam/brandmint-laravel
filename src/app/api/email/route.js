// Utils
import mail from "@/helpers/mail"
// Next
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const requestBody = await request.json()
    const { name, email, phone, company, website, message, service } =
      requestBody
    const mailResponse = await mail({
      name,
      email,
      phone,
      company,
      website,
      message,
      service,
    })
    if (mailResponse) return NextResponse.json({ success: true, status: 200 })
  } catch (error) {
    return NextResponse.json({ error: error.message, status: 500 })
  }
}
