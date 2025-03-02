import { NextResponse } from "next/server"
import { checkDatabaseConnection } from "@/lib/db"

export async function GET() {
  const dbStatus = await checkDatabaseConnection()

  if (!dbStatus.ok) {
    return NextResponse.json(
      {
        status: "error",
        message: "Database connection failed",
        timestamp: new Date().toISOString(),
      },
      { status: 503 },
    )
  }

  return NextResponse.json(
    {
      status: "ok",
      message: "System operational",
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  )
}

