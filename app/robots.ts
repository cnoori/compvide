import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/privacy", "/terms"],
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
        disallow: ["/privacy", "/terms"],
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/privacy", "/terms"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/privacy", "/terms"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/privacy", "/terms"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/privacy", "/terms"],
      },
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
        disallow: ["/privacy", "/terms"],
      },
    ],
    sitemap: "https://www.compvide.com/sitemap.xml",
  }
}
