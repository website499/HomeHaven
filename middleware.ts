import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { checkDatabaseConnection } from "@/lib/db"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

export async function middleware(req: NextRequest) {
  // Add custom headers
  const requestHeaders = new Headers(req.headers)
  requestHeaders.set("x-url", req.url)

  // Check database connection for API routes
  if (req.nextUrl.pathname.startsWith("/api")) {
    const dbStatus = await checkDatabaseConnection()
    if (!dbStatus.ok) {
      return NextResponse.json({ error: "Database connection failed" }, { status: 503 })
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
    "/dashboard/:path*",
    "/properties/create",
    "/profile/:path*",
  ],
}

