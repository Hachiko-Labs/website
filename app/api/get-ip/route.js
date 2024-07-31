import { NextResponse } from "next/server"

export async function GET (req) {
    const ip = req.headers.get('x-forwarded-for')
    return NextResponse.json({ ip })
}