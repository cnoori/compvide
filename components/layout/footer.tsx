"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  explore: [
    { name: "Platform", href: "/platform" },
    { name: "CIMED Diagnostic Platform", href: "/cimed" },
    { name: "Biological Samples", href: "/samples" },
    { name: "Partners", href: "/partners" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ],
  services: [
    { name: "Assay Development", href: "/platform#assays" },
    { name: "Clinical Studies", href: "/platform#services" },
    { name: "Biomarker Programs", href: "/platform#biomarkers" },
    { name: "Custom Assays", href: "/platform#custom" },
    { name: "Request CIMED Access", href: "/cimed/request-access" },
  ],
};

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by waiting for mount
  if (!mounted) {
    return null;
  }

  const logoSrc =
    resolvedTheme === "dark" ? "/images/logo-white.png" : "/images/logo5.png";

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src={logoSrc}
                alt="Compvide"
                width={130}
                height={38}
                className="h-9 w-auto"
                priority
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Advancing complement assay development, translational research,
              and diagnostic innovation.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Building reliable, physiologically relevant complement platforms
              to support drug development, precision medicine, and
              next-generation diagnostics.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Explore
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <Link
                  href="/cimed/request-access"
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80"
                >
                  Request CIMED Access
                  <span className="ml-1">→</span>
                </Link>
              </div>

              <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                <a
                  href="tel:2063506075"
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (206) 350-6075
                </a>

                <a
                  href="https://maps.google.com/?q=879+Rainier+Ave+N,+STE+A103,+Renton+WA+98057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-accent"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    879 Rainier Ave N, STE A103,
                    <br />
                    Renton WA 98057
                  </span>
                </a>

                <Link
                  href="mailto:info@compvide.com"
                  className="flex items-center gap-2 transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  info@compvide.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Compvide. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Terms of Use
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground sm:text-left">
            <strong>Regulatory Notice:</strong> All products and services are
            for in vitro research use only unless otherwise stated. Not for
            diagnostic or therapeutic use.
          </p>
        </div>
      </div>
    </footer>
  );
}
