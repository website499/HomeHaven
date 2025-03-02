"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-red-500">Error</h1>
      <p className="mt-4">{error.message}</p>
      <button onClick={() => reset()} className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
        Try again
      </button>
    </div>
  )
}

