import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Building2, GraduationCap, Factory, FlaskConical, Target, Microscope, TestTubes, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { JsonLd } from "@/components/json-ld"
import { schema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Partners | Complement Research & Diagnostics Collaboration",
  description: "Compvide collaborates with organizations across the life sciences ecosystem to advance complement assay development, translational research, and diagnostic innovation.",
  keywords: ["pharmaceutical partnerships", "biotech collaboration", "academic research", "diagnostics partnership", "complement research", "complement CRO partner", "life sciences collaboration"],
  openGraph: {
    title: "Partners | Complement Research & Diagnostics Collaboration",
    description:
      "Collaborate with Compvide on complement assay development, translational research, and diagnostic innovation.",
  },
  alternates: {
    canonical: "/partners",
  },
}

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={schema.breadcrumb([{ name: "Home", path: "/" }, { name: "Partners", path: "/partners" }])} />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Our Partners & Collaborators
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Compvide collaborates with organizations across the life sciences ecosystem to advance complement assay development, translational research, and diagnostic innovation.
              </p>
              <p className="mt-4 text-primary-foreground/60">
                Our partnerships are built on scientific rigor, transparency, and shared goals.
              </p>
            </div>
          </div>
        </section>

        {/* Pharma & Biotech */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <Building2 className="h-4 w-4" />
                  Industry Partners
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Pharma & Biotech
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We support pharmaceutical and biotechnology partners developing complement-targeted therapeutics across discovery, preclinical, and translational stages.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our platform enables partners to generate reliable, physiologically relevant data to guide program decisions.
                </p>
              </div>
              
              <div className="rounded-2xl bg-muted/50 p-8">
                <h3 className="font-semibold text-foreground">Typical collaborations include:</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <FlaskConical className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Functional complement assay development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Target className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Pharmacodynamic (PD) and mechanism-of-action (MOA) studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Microscope className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Translational biomarker programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <TestTubes className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Support for complement inhibition and efficacy assessment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Academic & Research */}
        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-2xl border border-border bg-card p-8">
                <h3 className="font-semibold text-foreground">Typical collaborations include:</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <FlaskConical className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Assay development and validation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Target className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Mechanistic and pathway-focused studies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <GraduationCap className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Support for grant-funded and publication-driven research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <TestTubes className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Access to high-integrity biological samples</span>
                  </li>
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  These collaborations help bridge foundational research with translational application.
                </p>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <GraduationCap className="h-4 w-4" />
                  Research Partners
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Academic & Research Labs
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We work with academic and research institutions to translate complement biology into robust functional assays and meaningful experimental outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostics & Industry */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <Factory className="h-4 w-4" />
                  Diagnostic Partners
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Diagnostics & Industry
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Compvide collaborates with diagnostics and industry partners to advance scalable complement-based diagnostic solutions.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Our work in diagnostics builds on Compvide's assay development foundation and includes the advancement of our proprietary platform, CIMED™.
                </p>
              </div>
              
              <div className="rounded-2xl bg-muted/50 p-8">
                <h3 className="font-semibold text-foreground">Typical collaborations include:</h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <FlaskConical className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Diagnostic assay and platform development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Target className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Evaluation and validation of complement testing methodologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Handshake className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">Strategic technology and development partnerships</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Interested in partnering with Compvide?
              </h2>
              <p className="mt-6 text-primary-foreground/80 leading-relaxed">
                Tell us about your organization and your scientific goals. Our team will review your request and follow up to discuss scope, feasibility, and next steps.
              </p>
              <div className="mt-10">
                <Link href="/contact#collaborate">
                  <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
                    Request Collaboration
                    <ArrowRight className="ml-2 h-4 w-4" />
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
