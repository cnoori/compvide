import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FlaskConical,
  Microscope,
  Activity,
  Building2,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { schema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Complement Assay Development & Diagnostic Innovation",
  description:
    "Compvide is the premier platform for functional complement assay development, clinical sample analysis, and complement diagnostics. Explore the CIMED diagnostic platform.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Compvide — Complement Assay Development & Diagnostic Innovation",
    description:
      "Advance your complement-targeted therapeutics with functional assays built for translational impact.",
  },
};

const stats = [
  { value: "3", label: "Complement Pathways" },
  { value: "20+", label: "Functional Assays" },
  { value: "100%", label: "Sample Integrity Focus" },
  { value: "CIMED", label: "Diagnostic Platform" },
];

const capabilities = [
  {
    icon: FlaskConical,
    title: "Complement Assay Development",
    description:
      "Design and optimization of pathway-specific functional assays (CP / AP / LP), including high-serum and inhibition formats for therapeutic evaluation.",
    href: "/platform#assays",
  },
  {
    icon: Microscope,
    title: "Clinical & Translational Studies",
    description:
      "Clinical study sample testing, pharmacodynamic support, and translational readouts connecting mechanism to outcomes.",
    href: "/platform#services",
  },
  {
    icon: Activity,
    title: "Diagnostic Innovation",
    description:
      "Building scalable diagnostic tools from complement biology, including the proprietary CIMED platform family.",
    href: "/platform#cimed",
  },
];

const partnerTypes = [
  {
    icon: Building2,
    title: "Pharma & Biotech",
    description:
      "Assay development, PD support, and translational studies for complement-targeted programs.",
  },
  {
    icon: GraduationCap,
    title: "Academic Research",
    description:
      "Collaborative research programs advancing complement science and therapeutic discovery.",
  },
  {
    icon: Handshake,
    title: "Diagnostics Partners",
    description:
      "Collaborations translating complement biology into scalable diagnostic solutions.",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={[schema.organization, schema.webSite, schema.breadcrumb([{ name: "Home", path: "/" }])]} />
      <Header />

      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative flex min-h-[500px] items-center sm:min-h-[600px] lg:min-h-[700px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a2744]/95 via-[#1a2744]/90 to-[#1a2744]/80 sm:bg-gradient-to-r sm:from-[#1a2744]/95 sm:via-[#1a2744]/85 sm:to-[#1a2744]/70" />
          </div>

          {/* Content */}
          <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-white text-balance sm:text-3xl md:text-4xl lg:text-5xl">
                The Premier Platform for Functional Complement Assay Development
              </h1>
              <p className="mt-4 text-base leading-relaxed text-white/85 text-pretty sm:mt-6 sm:text-lg">
                Advance your complement-targeted therapeutics with functional
                assays built for translational impact. From assay development to
                clinical sample analysis, our platform delivers reliable data
                for drug development.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:items-start sm:gap-4">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-accent text-white hover:bg-accent/90 font-semibold sm:w-auto"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/platform" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/40 bg-white/5 text-white hover:bg-white/15 hover:text-white sm:w-auto"
                  >
                    Explore Our Platform
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 py-8 sm:gap-8 sm:py-12 lg:grid-cols-4 lg:py-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-accent sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                Full Suite of Complement Solutions
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Our proprietary complement assay platform combines deep
                scientific expertise with rigorous sample handling to deliver
                reliable, physiologically relevant data.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:gap-8 md:grid-cols-3">
              {capabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg sm:p-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent sm:h-12 sm:w-12">
                    <capability.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-card-foreground sm:mt-6 sm:text-lg">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                    {capability.description}
                  </p>
                  <Link
                    href={capability.href}
                    className="mt-4 inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 sm:mt-6"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:mt-12">
              <Link href="/platform">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent"
                >
                  View All Capabilities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-primary py-12 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="text-center lg:text-left">
                <h2 className="text-xl font-bold tracking-tight text-primary-foreground sm:text-2xl lg:text-3xl">
                  Built for Complement Biology
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/80 sm:mt-6 sm:text-base">
                  Compvide has become a trusted partner for pharmaceutical and
                  biotech companies advancing complement-targeted therapeutics.
                  Our proprietary platform supports assay development, biomarker
                  programs, and clinical study sample analysis.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/80 sm:mt-4 sm:text-base">
                  With deep expertise in complement biology and a commitment to
                  sample integrity, we deliver high-quality data that drives
                  confident decision-making in drug development.
                </p>
                <div className="mt-6 flex justify-center gap-4 sm:mt-8 lg:justify-start">
                  <Link href="/about">
                    <Button
                      variant="outline"
                      className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    >
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="rounded-xl bg-primary-foreground/10 p-4 sm:p-6">
                      <div className="text-xl font-bold text-accent sm:text-2xl">
                        CP
                      </div>
                      <div className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">
                        Classical Pathway
                      </div>
                    </div>
                    <div className="rounded-xl bg-primary-foreground/10 p-4 sm:p-6">
                      <div className="text-xl font-bold text-accent sm:text-2xl">
                        LP
                      </div>
                      <div className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">
                        Lectin Pathway
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 pt-6 sm:space-y-4 sm:pt-8">
                    <div className="rounded-xl bg-primary-foreground/10 p-4 sm:p-6">
                      <div className="text-xl font-bold text-accent sm:text-2xl">
                        AP
                      </div>
                      <div className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">
                        Alternative Pathway
                      </div>
                    </div>
                    <div className="rounded-xl border border-accent/30 bg-accent/20 p-4 sm:p-6">
                      <div className="text-xl font-bold text-accent sm:text-2xl">
                        CIMED
                      </div>
                      <div className="mt-1 text-xs text-primary-foreground/70 sm:text-sm">
                        Diagnostic Platform
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models Section */}
        <section className="py-12 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                Drive Breakthroughs with Compvide
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                We support diverse partners in advancing complement science,
                from pharmaceutical companies to academic researchers and
                diagnostics developers.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 md:grid-cols-3">
              {partnerTypes.map((partner) => (
                <div key={partner.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent sm:h-16 sm:w-16">
                    <partner.icon className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground sm:mt-6 sm:text-lg">
                    {partner.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center sm:mt-12">
              <Link href="/partners">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto bg-transparent"
                >
                  Learn About Partnering
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted/40 py-12 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                Start the Conversation
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                Discover how Compvide can advance your complement-targeted
                therapeutic program. Let us know what you&apos;re working on and
                we&apos;ll propose a clear plan.
              </p>
              <div className="mt-6 sm:mt-10">
                <Link href="/contact" className="block sm:inline-block">
                  <Button
                    size="lg"
                    className="w-full bg-accent font-semibold text-white hover:bg-accent/90 sm:w-auto"
                  >
                    Let&apos;s Work Together
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
  );
}
