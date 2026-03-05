import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Eye, Target, Heart, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/json-ld";
import { schema } from "@/lib/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "About Compvide | Leadership & Mission",
  description:
    "Compvide is a biotechnology company focused on advancing complement system science through rigorous assay development, translational research, and diagnostic innovation.",
  keywords: [
    "Compvide",
    "biotechnology company",
    "complement diagnostics",
    "leadership team",
    "scientific advisory board",
  ],
  alternates: {
    canonical: "/about",
  },
};

const leadershipTeam = [
  {
    name: "Dr. Sadam Yaseen, Ph.D.",
    role: "President and Chief Executive Officer",
    image: "/images/dr-yassen.jpeg",
    shortBio:
      "Dr. Sadam Yaseen is President and Chief Executive Officer of Compvide, bringing deep scientific and translational expertise in complement system biology, immunology, and diagnostic assay development.",
    fullBio: `Dr. Sadam Yaseen is President and Chief Executive Officer of Compvide, bringing deep scientific and translational expertise in complement system biology, immunology, and diagnostic assay development. At Compvide, he leads the company's mission to establish a new global standard for complement diagnostics and pharmacodynamic drug monitoring.

Prior to founding Compvide, Dr. Yaseen worked at Omeros Corporation, where he led functional assay development, biomarker platforms, and PK/PD strategy across multiple complement-targeted therapeutic programs. He was a core member of the teams responsible for the development of narsoplimab (YARTEMLEA®), the first and only FDA-approved lectin-pathway inhibitor for transplant-associated thrombotic microangiopathy, as well as zaltenibart (OMS906), a first-in-class MASP-3 inhibitor later acquired by Novo Nordisk.

Dr. Yaseen earned his Ph.D. in Immunology from the University of Leicester (UK), training under Professors Wilhelm Schwaeble and Robert B. Sim. He is an inventor on multiple international patents and has published extensively in leading immunology journals. As founder of Compvide, he invented the CIMED™ diagnostic platform and oversees all scientific, operational, and early commercialization activities.`,
  },
  {
    name: "Dr. Clark Tedford, Ph.D.",
    role: "Board Director",
    image: "/images/clark.png",
    shortBio:
      "Dr. Clark Tedford is a biotechnology executive and inventor with decades of leadership experience spanning diagnostics, therapeutics, and medical devices.",
    fullBio: `Dr. Clark Tedford is a biotechnology executive and inventor with decades of leadership experience spanning diagnostics, therapeutics, and medical devices. As a Board Director of Compvide, he brings deep strategic, scientific, and commercialization expertise to support the company's mission to advance next-generation complement diagnostics and drug monitoring.

Dr. Tedford currently serves as President and Chief Executive Officer of OpZira, an ophthalmology diagnostics company focused on precision diagnostics in retinal disease. Previously, he was President and CEO of LumiThera, Inc. from its founding through its acquisition by Alcon in 2025, following the successful commercialization of Valeda®, the first FDA-cleared treatment shown to improve vision in patients with dry age-related macular degeneration.

Earlier in his career, Dr. Tedford spent seven years at Omeros Corporation as Vice President of Pharmaceutical Research, where he invented Omidria® and led development of narsoplimab (YARTEMLEA®), the first FDA-approved therapeutic targeting the lectin complement pathway. He has held senior leadership roles across multiple pharmaceutical and medical device companies and is an inventor on numerous patents. Dr. Tedford earned his Ph.D. in Pharmacology from the University of Iowa.`,
  },
  {
    name: "Dr. Amar Sethi, M.D., Ph.D.",
    role: "Board Director",
    image: "/images/yusuf.jpeg",
    shortBio:
      "Dr. Amar Sethi is a physician–scientist and senior biotechnology executive with nearly three decades of experience leading clinical development, translational science, and biomarker innovation.",
    fullBio: `Dr. Amar Sethi is a physician–scientist and senior biotechnology executive with nearly three decades of experience leading clinical development, translational science, and biomarker innovation across biotechnology, diagnostics, and contract research organizations. As a Board Director of Compvide, he brings deep clinical, regulatory, and strategic expertise to support the company's advancement of precision complement diagnostics and drug monitoring.

Dr. Sethi currently serves as Chief Scientific Officer at VivoSim Labs, Inc. Previously, he was Associate Vice President of Clinical Science at Omeros Corporation, where he led the global pivotal Phase 3 program for a Breakthrough Therapy–designated biologic in IgA nephropathy and supported BLA-enabling activities for a monoclonal antibody in transplant-associated thrombotic microangiopathy. In this role, he directed protocol design, regulatory engagement, and clinical data strategy across multiple complement-mediated disease programs and built internal biomarker capabilities to strengthen mechanistic insight and pipeline development.

Prior to Omeros, Dr. Sethi spent a decade at Pacific Biomarkers, ultimately serving as President and Chief Medical Officer, where he guided company strategy, oversaw scientific operations and P&L, and contributed to the company's successful acquisition. He holds both an M.D. and Ph.D. and has authored chapters in leading clinical chemistry textbooks.`,
  },
];

const advisoryBoard = [
  {
    name: "Professor Wilhelm Schwaeble, Ph.D.",
    role: "Scientific Advisory Board Member",
    image: "/images/wilhelm.jpg",
    shortBio:
      "Professor Wilhelm Schwaeble is a globally recognized leader in complement immunology, with more than three decades of pioneering contributions.",
    fullBio: `Professor Wilhelm Schwaeble is a globally recognized leader in complement immunology, with more than three decades of pioneering contributions that have shaped modern understanding of innate immune defense. He currently serves as Director of Research at the University of Cambridge (Department of Veterinary Medicine) and previously held the Chair of Immunology at the University of Leicester, where his work established new foundational concepts in complement biology and immune regulation.

Over his career, Professor Schwaeble has played a central role in advancing the field of complement research, including key discoveries that helped define the lectin pathway as a distinct activation cascade and clarify how complement integrates with inflammation, pathogen recognition, and tissue injury. His research spans molecular immunology, gene regulation, structural and functional characterization of immune proteins, and the development of gene-targeted and transgenic mouse models that continue to inform both basic biology and therapeutic innovation.

Professor Schwaeble has authored numerous highly cited publications and has served as Editor-in-Chief of Immunobiology for nearly two decades, reflecting his long-standing influence on the scientific community. His research programs have been supported by major funding bodies including the MRC and Wellcome Trust, and he has led impactful academic–industry collaborations, including long-term translational work with Omeros Corporation contributing to the development of complement-targeted therapeutics now in clinical evaluation.`,
  },
  {
    name: "Professor Peter Garred, M.D., DMSc",
    role: "Scientific Advisory Board Member",
    image: "/images/peter.png",
    shortBio:
      "Professor Peter Garred is an internationally recognized leader in clinical immunology and molecular medicine, with seminal contributions to the understanding of the lectin pathway of complement.",
    fullBio: `Professor Peter Garred is an internationally recognized leader in clinical immunology and molecular medicine, with seminal contributions to the understanding of the lectin pathway of complement. He serves as Chair Professor at the University of Copenhagen and Consultant at Rigshospitalet, where his work has helped define the molecular and genetic foundations of innate immunity in health and disease.

Over several decades, Professor Garred's research has elucidated how lectin pathway pattern-recognition molecules and complement proteins interact with immune and coagulation systems. He was among the first to demonstrate the genetic regulation of mannose-binding lectin and related pathway components, establishing their roles in susceptibility to infectious diseases, autoimmune disorders, and cardiovascular conditions. His group also discovered the regulatory molecule MAP-1, fundamentally reshaping understanding of lectin pathway activation and control.

Professor Garred has published more than 420 peer-reviewed papers in leading journals, including The New England Journal of Medicine, The Lancet, PNAS, and Nature Immunology. A former President of the International Complement Society, he continues to lead an active translational research program and mentor the next generation of immunologists.`,
  },
  {
    name: "Dr. Youssif Ali, Ph.D.",
    role: "Scientific Advisory Board Member",
    image: "/images/yusuf1.jpeg",

    shortBio:
      "Dr. Youssif Ali is a senior research scientist at the University of Cambridge with more than 20 years of experience in complement biology and immune regulation.",
    fullBio: `Dr. Youssif Ali is a senior research scientist at the University of Cambridge with more than 20 years of experience in complement biology, immune regulation, and translational biomarker development. His work has contributed to advancing mechanistic understanding of complement activation and inhibition across inflammatory and immune-mediated diseases.

Dr. Ali earned his Ph.D. in Immunology from the University of Leicester, followed by postdoctoral research and academic appointments in immunology prior to joining the University of Cambridge. His early research played an important role in validating MASP-2 as a therapeutic target, helping to establish the scientific foundation for lectin-pathway–directed drug development. His expertise spans functional assay development, protein biochemistry, pathway characterization, and biomarker validation.

Throughout his career, Dr. Ali has authored numerous peer-reviewed publications and contributed to translating fundamental complement discoveries into clinical and industrial applications. As a Scientific Advisory Board Member at Compvide, his scientific insight supports assay development, mechanistic validation, and the company's broader translational research strategy.`,
  },
];

function getInitials(name: string) {
  return name
    .replace(/[,]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

function BioAccordion({
  items,
  kind,
}: {
  items: Array<{
    name: string;
    role: string;
    image?: string;
    shortBio: string;
    fullBio: string;
  }>;
  kind: "leadership" | "advisory";
}) {
  const imageWidth = kind === "leadership" ? "sm:w-64" : "sm:w-52";
  const imageHeight = kind === "leadership" ? "h-64" : "h-56";
  const contentIndent =
    kind === "leadership" ? "sm:pl-[18rem]" : "sm:pl-[15rem]";

  return (
    <Accordion type="single" collapsible className="space-y-8">
      {items.map((member, index) => (
        <AccordionItem
          key={member.name}
          value={`${kind}-${index}`}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
        >
          <AccordionTrigger
            className={[
              "cursor-pointer select-none px-0 py-0 hover:no-underline data-[state=open]:bg-muted/30",
              // give the built-in chevron real breathing room + better size
              "[&>svg]:mr-6 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0",
            ].join(" ")}
          >
            <div className="flex w-full flex-col sm:flex-row">
              {/* Rectangular image / placeholder */}
              <div
                className={[
                  "relative w-full flex-shrink-0 bg-muted",
                  imageHeight,
                  imageWidth,
                ].join(" ")}
              >
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 260px"
                    priority={kind === "leadership" && index === 0}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-background/60 text-muted-foreground">
                    <span className="text-5xl font-serif font-bold opacity-25">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>

              {/* Header content */}
              <div className="flex flex-1 flex-col justify-center p-6 text-left sm:p-8">
                <h3 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                  {member.name}
                </h3>
                <p className="mt-2 text-lg font-semibold text-accent sm:text-xl">
                  {member.role}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {member.shortBio}
                </p>

                <div className="mt-5 inline-flex items-center text-sm font-semibold text-primary">
                  Read full bio <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent
            className={[
              "border-t border-border bg-muted/20 px-6 py-8 sm:px-8",
              contentIndent,
            ].join(" ")}
          >
            <div className="max-w-none text-muted-foreground">
              {member.fullBio.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-5 last:mb-0 leading-relaxed text-base sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function AboutPage() {
  const allMembers = [...leadershipTeam, ...advisoryBoard];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={[...schema.persons(allMembers), schema.breadcrumb([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} />
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                About Compvide
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
                Compvide is a biotechnology company focused on advancing
                complement system science through rigorous assay development,
                translational research, and diagnostic innovation.
              </p>
              <p className="mt-4 text-primary-foreground/75 sm:text-lg">
                Our work is centered on generating reliable, physiologically
                relevant complement data to support drug development, precision
                medicine, and next-generation diagnostic platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-18 sm:py-22 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Eye className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-serif text-2xl font-bold text-card-foreground">
                  Vision
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  To become a global leader in complement diagnostics, driving
                  precision medicine that improves patient outcomes, minimizes
                  treatment waste, and accelerates the development of
                  immune-targeted therapies.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Target className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-serif text-2xl font-bold text-card-foreground">
                  Mission
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  To advance personalized medicine by delivering accurate,
                  high-fidelity complement and immune diagnostics that empower
                  clinicians to evaluate drug response, optimize treatment
                  decisions, and reduce unnecessary healthcare spending.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-muted/30 py-18 sm:py-22 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Principles
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="flex gap-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Patient-Centered Impact
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    We design diagnostics that help clinicians personalize
                    therapy, prevent overtreatment, and improve quality of life
                    for patients worldwide.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Accountability & Ethics
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    We take responsibility for the integrity of our science, the
                    clarity of our communication, and the impact of our
                    technology on healthcare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-18 sm:py-22 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Leadership Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                Compvide is led by a multidisciplinary team with deep expertise
                in complement biology, translational research, diagnostics, and
                clinical development.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <BioAccordion items={leadershipTeam} kind="leadership" />
            </div>
          </div>
        </section>

        {/* Advisory Board */}
        <section className="bg-muted/30 py-18 sm:py-22 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Scientific Advisory Board
              </h2>
              <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                World-renowned experts guiding our scientific and translational
                strategy.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <BioAccordion items={advisoryBoard} kind="advisory" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                Connect with our team
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/85 sm:text-xl">
                Learn more about how Compvide can support your complement
                research programs.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact#collaborate">
                  <Button
                    size="lg"
                    className="bg-accent text-white hover:bg-accent/90"
                  >
                    Request Collaboration
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/platform">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Explore Our Platform
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
