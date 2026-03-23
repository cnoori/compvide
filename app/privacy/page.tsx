import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Compvide's privacy policy explaining how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: January 2026
            </p>

            <div className="mt-12 prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Introduction</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Compvide ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Information We Collect</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We may collect information you provide directly to us, such as when you fill out a contact form, request a collaboration, or communicate with us. This may include:
                  </p>
                  <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Name and contact information</li>
                    <li>Organization or company name</li>
                    <li>Email address</li>
                    <li>Project details and research requirements</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">How We Use Your Information</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We use the information we collect to:
                  </p>
                  <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Respond to your inquiries and collaboration requests</li>
                    <li>Provide our scientific services and support</li>
                    <li>Communicate with you about our products and services</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Information Sharing</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share information with trusted third parties who assist us in operating our website and conducting our business, so long as those parties agree to keep this information confidential.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Data Security</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Contact Us</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at info@compvide.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
