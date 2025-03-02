"use client"

import type React from "react"

import { SessionProvider } from "next-auth/react"

export default function AuthContext({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

