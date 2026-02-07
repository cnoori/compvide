import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Microscope,
  Activity,
  CheckCircle2,
  Beaker,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "CIMED Diagnostic Platform",
  description:
    "CIMED is a proprietary complement activity and drug monitoring platform developed by Compvide. Functional ELISA-based kits for classical, lectin, and alternative pathway analysis.",
  keywords: [
    "CIMED",
    "complement diagnostics",
    "CIMED-CP",
    "CIMED-LP",
    "CIMED-AP",
    "complement ELISA",
    "drug monitoring",
    "complement pathway",
    "functional assay",
  ],
}

const products = [
  {
    name: "CIMED-CP",
    fullName: "Classical Pathway Assay",
    description:
      "Measures functional activity of the classical complement pathway. Detects C1q-dependent activation through C5b-9 (MAC) formation using a sensitive ELISA-based format.",
    features: [
      "C1q-initiated activation",
      "Functional endpoint: MAC deposition",
      "Serum-based analysis",
      "High sensitivity & specificity",
    ],
  },
  {
    name: "CIMED-LP",
    fullName: "Lectin Pathway Activity Panel",
    description:
      "Evaluates functional activity of the lectin pathway by measuring MBL/ficolin-dependent complement activation through terminal pathway complex formation.",
    features: [
      "MBL & ficolin-dependent activation",
      "Lectin pathway-specific readout",
      "Pharmacodynamic drug monitoring",
      "Clinical study-ready",
    ],
  },
  {
    name: "CIMED-AP",
    fullName: "Alternative Pathway Activity Panel",
    description:
      "Assesses the function of the alternative complement pathway, including Factor B and Factor D-dependent amplification through properdin-stabilized C3 convertase activity.",
    features: [
      "Factor B/D-dependent activation",
      "Properdin-stabilized convertase",
      "Pathway-specific inhibition profiling",
      "Supports preclinical & clinical use",
    ],
  },
]

const advantages = [
  {
    icon: ShieldCheck,
    title: "Pathway-Specific",
    description:
      "Each kit isolates a single complement pathway, eliminating crosstalk for clean, interpretable data.",
  },
  {
    icon: FlaskConical,
    title: "Functional ELISA Format",
    description:
      "Measures actual pathway activity, not just protein levels. Provides physiologically relevant results.",
  },
  {
    icon: Microscope,
    title: "Drug Monitoring Ready",
    description:
      "Purpose-built for pharmacodynamic assessment of complement-targeted therapeutics in clinical trials.",
  },
  {
    icon: Activity,
    title: "Research Use Only",
    description:
      "Currently designated RUO. Developed under rigorous quality standards for translational and clinical research.",
  },
]

export default function CimedPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-primary py-12 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="text-center lg:text-left">
                <div className="mb-4 inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent sm:text-sm">
                  Advanced Complement Diagnostics
                </div>
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-primary-foreground text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                  CIMED Diagnostic Platform
                </h1>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80 text-pretty sm:mt-6 sm:text-base lg:mx-0 lg:text-lg">
                  A proprietary suite of functional complement activity and drug monitoring assays. Pathway-specific ELISA kits designed for translational research and clinical pharmacodynamic analysis.
                </p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row lg:justify-start">
                  <Link href="/cimed/request-access" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full bg-accent font-semibold text-white hover:bg-accent/90 sm:w-auto"
                    >
                      Request Platform Access
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                    >
                      Contact Sales
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/cimed-products.png"
                  alt="CIMED diagnostic kits - CIMED-LP, CIMED-AP, and CIMED-CP complement pathway assay boxes"
                  width={600}
                  height={450}
                  className="w-full max-w-md lg:max-w-none"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is CIMED */}
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                What is CIMED?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                CIMED (Complement Immunoassay for Monitoring and Evaluating Diagnostics) is a proprietary platform developed by Compvide Inc. It provides functional, pathway-specific ELISA-based assays that measure real complement activation rather than just protein concentrations.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Unlike conventional complement assays, CIMED kits are engineered to deliver clean, pathway-isolated data that is directly relevant to drug development and pharmacodynamic monitoring in clinical trials.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-muted/40 py-12 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                Why CIMED?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Built from the ground up for complement-targeted drug development.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
              {advantages.map((adv) => (
                <div
                  key={adv.title}
                  className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-accent/40 hover:shadow-md sm:p-8"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <adv.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-card-foreground sm:text-lg">
                    {adv.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Kits */}
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                CIMED Product Suite
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Three pathway-specific kits covering the full complement system.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 sm:h-12 sm:w-12">
                      <Beaker className="h-5 w-5 text-accent sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-card-foreground sm:text-xl">
                        {product.name}
                        <span className="text-xs align-top text-muted-foreground">TM</span>
                      </h3>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        {product.fullName}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-card-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="bg-muted/40 py-12 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                Applications
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                CIMED kits are designed to support a range of use cases across the complement therapeutics pipeline.
              </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6">
              {[
                "Pharmacodynamic (PD) drug monitoring in clinical trials",
                "Complement pathway-specific inhibition profiling",
                "Preclinical and translational research studies",
                "Biomarker program development and validation",
                "Clinical study sample analysis (serum/plasma)",
                "Drug potency and mechanism-of-action studies",
              ].map((useCase) => (
                <div
                  key={useCase}
                  className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 sm:p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                  <p className="text-sm text-card-foreground sm:text-base">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-primary-foreground sm:text-2xl lg:text-3xl">
                Ready to Explore CIMED?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80 sm:mt-4 sm:text-base">
                Request access to the CIMED diagnostic platform for your complement research, clinical trial support, or drug development program.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center">
                <Link href="/cimed/request-access" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-accent font-semibold text-white hover:bg-accent/90 sm:w-auto"
                  >
                    Request Platform Access
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
                  >
                    Speak with Our Team
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
