import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Droplets, FileCheck, TestTubes, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/json-ld"
import { FaqSection } from "@/components/faq-section"
import { schema } from "@/lib/schema"

const samplesFaqs = [
  {
    question: "What biological samples does Compvide provide?",
    answer:
      "Compvide supplies certified human complement serum and plasma optimized for functional complement assays. Available sample types include standard complement-active serum, pathway-deficient sera, and heat-inactivated serum for control studies. Plasma is available as single-donor, pooled, or bulk volumes to meet diverse research and manufacturing requirements.",
    richAnswer: (
      <>
        Compvide supplies certified human complement serum and plasma optimized for functional complement assays. Available sample types include standard complement-active serum, pathway-deficient sera, and heat-inactivated serum for control studies. Plasma is available as single-donor, pooled, or bulk volumes to meet diverse research and manufacturing requirements.{" "}
        <Link href="/contact" className="text-accent underline hover:text-accent/80">
          Contact Compvide
        </Link>{" "}
        for specifications and pricing.
      </>
    ),
  },
  {
    question: "How is Compvide serum qualified?",
    answer:
      "Each Compvide serum lot includes verified CH50 activity, lot-specific functional testing of classical, lectin, and alternative pathway activity, and full preparation, handling, and QC documentation. Compvide has developed specialized preparation methods that preserve full complement activity, ensuring reproducible results for downstream functional complement assays.",
  },
]

export const metadata: Metadata = {
  title: "Human Complement Serum & Plasma | Biological Samples",
  description: "Source high-integrity human complement serum and plasma from Compvide. Research-grade biological samples optimized for functional complement assays.",
  keywords: ["human complement serum", "complement-active serum", "research-grade serum", "plasma samples", "biological samples", "CH50 testing", "complement activity", "clinical sample"],
  openGraph: {
    title: "Biological Samples | High-Integrity Serum & Plasma",
    description:
      "Certified human serum and plasma optimized for functional complement assays and translational research.",
    url: "/samples",
  },
  alternates: {
    canonical: "/samples",
  },
}

export default function SamplesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={schema.breadcrumb([{ name: "Home", path: "/" }, { name: "Biological Samples", path: "/samples" }])} />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Human Complement Serum & Plasma for Research
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Compvide provides certified human serum and plasma optimized for functional complement assays, supporting reproducible complement research and complement-targeted drug development.
              </p>
            </div>
          </div>
        </section>

        {/* Serum Section */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <Droplets className="h-4 w-4" />
                  Serum Products
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Certified Human Complement Serum
                </h2>
                <h3 className="mt-6 text-base font-semibold text-foreground sm:text-lg">
                  What is complement-active serum?
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Complement-active serum is human serum that has been collected
                  and processed using specialized methods to preserve the full
                  functional activity of all complement pathways. Standard serum
                  preparation often causes unintended complement activation and
                  depletion, compromising downstream assay results.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  There is limited guidance on proper serum preparation for functional complement assays. Mishandling can lead to unintended complement activation and depletion.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Compvide has developed specialized preparation methods that preserve full complement activity.
                </p>
                
                <div className="mt-8 rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-accent" />
                    Each serum lot includes:
                  </h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">Lot-specific functional testing of CH50, classical, lectin and alternative pathway activity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                      <span className="text-sm text-foreground">Full preparation, handling, and QC documentation provided</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="rounded-2xl bg-muted/50 p-8">
                <h3 className="font-semibold text-foreground">Available as:</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-4 rounded-lg bg-card p-4 border border-border">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Droplets className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Human complement serum</p>
                      <p className="text-sm text-muted-foreground">Standard preparation for functional assays</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 rounded-lg bg-card p-4 border border-border">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <TestTubes className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Specialized sera</p>
                      <p className="text-sm text-muted-foreground">Including pathway-deficient variants</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 rounded-lg bg-card p-4 border border-border">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Droplets className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Heat-inactivated</p>
                      <p className="text-sm text-muted-foreground">For control and comparison studies</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="w-full bg-accent text-white hover:bg-accent/90">
                      Request Specification or Pricing
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plasma Section */}
        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl border border-border bg-card p-8">
                  <h3 className="font-semibold text-foreground">Available formats:</h3>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <span className="block font-serif text-2xl font-bold text-accent">1</span>
                      <span className="mt-1 block text-sm text-foreground">Single donor</span>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <span className="block font-serif text-2xl font-bold text-accent">n</span>
                      <span className="mt-1 block text-sm text-foreground">Pooled</span>
                    </div>
                    <div className="rounded-lg bg-muted/50 p-4 text-center">
                      <span className="block font-serif text-2xl font-bold text-accent">L</span>
                      <span className="mt-1 block text-sm text-foreground">Bulk volumes</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full bg-transparent">
                        Contact Us for Availability
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <TestTubes className="h-4 w-4" />
                  Plasma Products
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Plasma Samples
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Compvide offers premium-quality plasma from healthy donors for research and manufacturing use.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our plasma samples undergo rigorous quality control to ensure consistency and reliability for your complement research programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regulatory Notice */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="rounded-lg border border-border bg-muted/30 p-6 flex items-start gap-4">
                <AlertCircle className="h-6 w-6 flex-shrink-0 text-muted-foreground mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Research Use Only</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    All biological samples are for in vitro research use only and are not intended for diagnostic or therapeutic use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FaqSection items={samplesFaqs} />

        {/* CTA Section */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Need biological samples for your research?
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                Contact our team to discuss your specific requirements and get pricing information.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
                    Request Samples
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                    View the Compvide Platform
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
