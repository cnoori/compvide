import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | Scientific Collaboration",
  description:
    "Get in touch with Compvide to discuss your complement research needs. Request a scientific collaboration for assay development, biomarker studies, or clinical sample analysis.",
  keywords: [
    "contact Compvide",
    "scientific collaboration",
    "complement assay request",
    "biotech partnership",
    "research inquiry",
  ],
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Get in touch with our team to discuss your complement research
                needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section (Client Component) */}
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
