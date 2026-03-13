import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { JsonLd } from "@/components/json-ld";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  /** Plain text answer used for JSON-LD schema */
  answer: string;
  /** Rich answer with links/formatting for visible content. Falls back to `answer` if omitted. */
  richAnswer?: ReactNode;
}

interface FaqSectionProps {
  items: FaqItem[];
  heading?: string;
  variant?: "default" | "muted";
}

export function FaqSection({
  items,
  heading = "Frequently Asked Questions",
  variant = "default",
}: FaqSectionProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <section className={cn("py-12 sm:py-20 lg:py-28", variant === "muted" && "bg-muted/40")}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
            {heading}
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.richAnswer ?? item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
