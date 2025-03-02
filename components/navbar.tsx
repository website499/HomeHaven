"use client"

import { cn } from "@/lib/utils"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">VillaMoPro</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/properties"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/properties" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Properties
            </Link>
            <Link
              href="/rent"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/rent" ? "text-foreground" : "text-foreground/60",
              )}
            >
              Rent
            </Link>
            <Link
              href="/buy"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname?.startsWith("/buy") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Buy
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="outline" className="inline-flex items-center whitespace-nowrap">
              <Search className="mr-2 h-4 w-4" />
              Search properties
            </Button>
          </div>
          <nav className="flex items-center">
            <Link href="/login">
              <Button variant="ghost" className="mr-2">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  )
}

