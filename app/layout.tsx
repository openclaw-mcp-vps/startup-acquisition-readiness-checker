import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Acquisition Readiness Checker — Is Your Startup Ready to Sell?',
  description: 'Assess your startup acquisition readiness with interactive checklists, automated scoring, and benchmarks across financials, operations, legal, and market positioning.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3b2130b7-9084-4c26-a3e0-09bbd79426fe"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
