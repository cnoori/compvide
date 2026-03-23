import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contact-form"
import { JsonLd } from "@/components/json-ld"
import { schema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Contact Compvide | Complement Diagnostics Inquiry",
  description:
    "Get in touch with Compvide. Ask about our complement diagnostic platform, assay development services, or partnership opportunities.",
  keywords: [
    "contact Compvide",
    "complement diagnostics inquiry",
    "CIMED inquiry",
    "biotech partnership",
    "research inquiry",
    "complement assay inquiry",
    "diagnostic platform inquiry",
  ],
  openGraph: {
    title: "Contact Compvide | Complement Diagnostics Inquiry",
    description:
      "Reach out to discuss complement assay development, CIMED platform access, or partnership opportunities.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={[schema.contactPage, schema.breadcrumb([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />
      <Header />
      <main className="flex-1">
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
