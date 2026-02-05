import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions for using Compvide's website and services.",
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Terms of Use
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: January 2026
            </p>

            <div className="mt-12 prose prose-gray max-w-none">
              <div className="space-y-8">
                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Acceptance of Terms</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Use of Website</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    The content of this website is for general information and use only. It is subject to change without notice. This website uses cookies to monitor browsing preferences.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Intellectual Property</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Research Use Only</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    All products and services described on this website are for in vitro research use only unless otherwise stated. They are not intended for diagnostic or therapeutic use. Users are responsible for ensuring compliance with all applicable regulations in their jurisdiction.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Limitation of Liability</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Links to Other Websites</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    From time to time, this website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Governing Law</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Your use of this website and any dispute arising out of such use of the website is subject to the laws of the United States of America.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-xl font-semibold text-foreground">Contact Us</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms of Use, please contact us at info@compvide.com.
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
