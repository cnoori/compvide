import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  Microscope,
  Activity,
  Beaker,
  ShieldCheck,
  Globe,
  TestTube,
  Target,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Platform | Complement Assay & Diagnostic Innovation",
  description:
    "Compvide's platform integrates complement biology expertise, functional assay design, and rigorous sample integrity control to generate reliable, physiologically relevant data for translational research.",
  keywords: [
    "complement assay platform",
    "CIMED diagnostics",
    "functional assays",
    "biomarker analysis",
    "clinical studies",
  ],
  alternates: {
    canonical: "/platform",
  },
};

export default function PlatformPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                The Compvide Complement Platform
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Compvide's platform integrates complement biology expertise,
                functional assay design, and rigorous sample integrity control
                to generate reliable, physiologically relevant data for
                translational research, drug development, and diagnostic
                innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Complement Assay Platform */}
        <section id="assays" className="py-20 sm:py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <FlaskConical className="h-4 w-4" />
                  Core Platform
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Complement Assay Platform
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  At the core of Compvide is a functional complement assay
                  platform spanning all three activation pathways and terminal
                  pathway biology.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  This comprehensive pathway coverage enables mechanistic
                  assessment of complement activation and inhibition rather than
                  reliance on indirect or surrogate readouts.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-border bg-card p-4 text-center">
                    <span className="block font-serif text-xl font-bold text-accent">
                      CP
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Classical Pathway
                    </span>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4 text-center">
                    <span className="block font-serif text-xl font-bold text-accent">
                      AP
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Alternative Pathway
                    </span>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-4 text-center">
                    <span className="block font-serif text-xl font-bold text-accent">
                      LP
                    </span>
                    <span className="mt-1 block text-xs text-muted-foreground">
                      Lectin Pathway
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-muted/50 p-8">
                <h3 className="font-semibold text-foreground">
                  Functional & High-Serum Testing
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We design assays to reflect true biological function under
                  conditions that preserve native complement behavior.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Beaker className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">
                      High-serum and physiologic testing conditions to maintain
                      biologically relevant activity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Target className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">
                      Pathway-specific activation and inhibition readouts for
                      mechanistic clarity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Workflow className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm text-foreground">
                      Functional relevance over convenience assays, ensuring
                      data supports translational decision-making
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CIMED Diagnostics */}
        <section id="cimed" className="bg-muted/30 py-20 sm:py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                <Activity className="h-4 w-4" />
                Diagnostics
              </div>
              <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Introducing CIMED™
              </h2>
              <p className="mt-2 text-lg font-medium text-muted-foreground">
                Complement Inhibition Monitoring & Efficacy Determination
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                CIMED™ is Compvide's proprietary diagnostic platform designed to
                assess complement activity and therapeutic inhibition under
                physiologic serum conditions. Built on Compvide's deep expertise
                in functional complement assay development, CIMED™ supports a
                scalable approach to drug monitoring, translational research,
                and future clinical diagnostics.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Currently supplied for Research Use Only (RUO), with a long-term
                vision toward scaled diagnostic monitoring and clinical
                diagnostics.
              </p>
              <div className="mt-8">
                <Link href="/contact#collaborate">
                  <Button className="bg-accent text-white hover:bg-accent/90">
                    Learn More About CIMED™
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Integrity */}
        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="order-2 lg:order-1 rounded-2xl border border-border bg-card p-8">
                <h3 className="font-semibold text-foreground">
                  Our quality systems support:
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">
                      Preservation of functional complement activity
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">
                      Reproducibility across studies and time points
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                    <span className="text-sm text-foreground">
                      Increased confidence in assay results and downstream
                      interpretation
                    </span>
                  </li>
                </ul>

                <div className="mt-8 flex items-center gap-3 rounded-lg bg-muted/50 p-4">
                  <Globe className="h-8 w-8 text-accent" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Multi-Species Capability
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Supporting translational continuity from preclinical to
                      clinical studies
                    </p>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                  <ShieldCheck className="h-4 w-4" />
                  Quality Systems
                </div>
                <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Sample Integrity & Quality Systems
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Complement activity is highly sensitive to sample collection,
                  preparation, and handling. Improper workflows can lead to
                  unintended activation and depletion, compromising functional
                  results.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Compvide has developed specialized preparation, handling, and
                  quality control protocols designed to preserve native
                  complement activity and minimize artifactual activation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="bg-primary py-20 sm:py-24 scroll-mt-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl">
                Complement Assays & Scientific Services
              </h2>
              <p className="mt-6 text-primary-foreground/80 leading-relaxed">
                Compvide provides standard and custom complement assay services
                supporting drug discovery, preclinical development, and
                translational research. Our services are built on functional
                relevance, pathway specificity, and rigorous sample handling.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Functional Assays */}
              <div className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <TestTube className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-primary-foreground">
                  Functional Complement Assays
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                  We perform pathway-specific functional assays in human and
                  animal samples, enabling mechanistic assessment of complement
                  activation and inhibition.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-medium text-primary-foreground/90">
                    Measured functional outputs:
                  </p>
                  <ul className="text-xs text-primary-foreground/70 space-y-1">
                    <li>• C4 activation</li>
                    <li>• C3 activation</li>
                    <li>• Terminal pathway activity (C5b-9)</li>
                    <li>• Hemolytic assays (CH50, APH50)</li>
                  </ul>
                </div>
              </div>

              {/* Clinical Studies */}
              <div className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6">
                <Microscope className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-primary-foreground">
                  Clinical & Translational Studies
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                  We support complement-focused programs from preclinical models
                  through clinical study execution, providing data that connects
                  mechanism to outcome.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-medium text-primary-foreground/90">
                    Services include:
                  </p>
                  <ul className="text-xs text-primary-foreground/70 space-y-1">
                    <li>• Clinical study sample testing</li>
                    <li>• Functional complement monitoring</li>
                    <li>• Translational readouts across species</li>
                    <li>• Support for complement-targeted programs</li>
                  </ul>
                </div>
              </div>

              {/* Biomarker Programs */}
              <div
                id="biomarkers"
                className="rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-6 scroll-mt-20"
              >
                <Activity className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-primary-foreground">
                  Complement Biomarker Analysis
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                  We measure complement activation biomarkers using fully
                  validated assays, supporting pharmacodynamic and mechanistic
                  studies.
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-xs font-medium text-primary-foreground/90">
                    Biomarkers include:
                  </p>
                  <ul className="text-xs text-primary-foreground/70 space-y-1">
                    <li>• C3a, C4a, C5a</li>
                    <li>• Ba</li>
                    <li>• Soluble C5b-9</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Assay Development */}
        <section id="custom" className="py-20 sm:py-24 scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Custom Assay Development
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  We develop and validate custom complement assays tailored to
                  specific targets, pathways, or therapeutic modalities.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Custom assays are designed in collaboration with our partners
                  to align with program-specific scientific and translational
                  goals.
                </p>

                <div className="mt-8">
                  <p className="text-sm font-medium text-foreground mb-4">
                    Capabilities include assays for:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "C3, C4, Factor D, Factor B",
                      "C1q, C1r, C1s",
                      "MBL and Ficolins",
                      "MASP-1, MASP-2, MASP-3",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-md bg-muted/50 px-3 py-2 text-sm text-foreground"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-accent/5 border border-accent/20 p-8 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Interested in a complement-focused study or assay?
                </h3>
                <p className="mt-4 text-muted-foreground">
                  Talk with our scientific team about your program.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Link href="/contact#collaborate">
                    <Button className="w-full sm:w-auto bg-accent text-white hover:bg-accent/90">
                      Request Collaboration
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto bg-transparent"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
