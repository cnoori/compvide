import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.compvide.com"),
  title: {
    default: "Compvide | Complement Assay Development & Clinical Sample Analysis",
    template: "%s | Compvide",
  },
  description:
    "Compvide is a biotechnology company specializing in functional complement assays, biomarker programs, and clinical-study sample analysis for translational research and therapeutic development.",
  keywords: [
    "complement assay",
    "biomarker analysis",
    "clinical research",
    "biotechnology",
    "immunology",
    "drug development",
    "translational research",
    "CIMED",
    "complement diagnostics",
  ],
  authors: [{ name: "Compvide" }],
  creator: "Compvide",
  publisher: "Compvide",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Compvide",
    title: "Compvide | Complement Assay Development & Clinical Sample Analysis",
    description:
      "Advancing complement assay development, translational research, and diagnostic innovation for drug development and precision medicine.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Compvide — Complement Assay Development & Diagnostic Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compvide | Complement Assay Development",
    description:
      "Biotechnology company focused on functional complement assays and diagnostic innovation.",
    images: ["/og/default.png"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a2744" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="help" type="text/plain" href="/llms.txt" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
