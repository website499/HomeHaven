import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ["error"],
    errorFormat: "minimal",
  })
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export { prisma }

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma

export async function checkDatabaseConnection() {
  try {
    await prisma.$connect()
    // Try a simple query to really verify the connection
    await prisma.user.count()
    return { ok: true }
  } catch (error) {
    console.error("Database connection failed:", error)
    return { ok: false, error }
  } finally {
    await prisma.$disconnect()
  }
}

