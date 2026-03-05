/**
 * Open Graph Image Generator
 *
 * Generates static 1200×630 PNG images used for social sharing previews
 * (LinkedIn, Twitter/X, Facebook, Slack, etc.) across the Compvide site.
 *
 * Pipeline: satori (JSX-like objects → SVG) → sharp (SVG → PNG)
 *
 * Output: public/og/{default,cimed,platform,about}.png
 * These are referenced by openGraph.images in each page's metadata export.
 *
 * Prerequisites:
 *   npm install --save-dev satori @fontsource/inter
 *   (sharp is already bundled with Next.js)
 *
 * Usage:
 *   node compvide/scripts/generate-og-images.mjs
 *
 * When to re-run:
 *   - Brand colors or logo change (update BRAND object below)
 *   - New pages need a dedicated OG image (add entry to `pages` array)
 *   - Titles/descriptions change for SEO reasons
 *
 * Design tokens match the site theme defined in globals.css and tailwind config:
 *   Navy:   #1a2744  (--color-brand-navy / dark background)
 *   Orange: #F97316  (--color-brand-orange / accent)
 *   Slate:  #94a3b8  (subtitle text)
 */

import satori from "satori";
import sharp from "sharp";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/og");
mkdirSync(outDir, { recursive: true });

const interBold = new Uint8Array(readFileSync(
  join(__dirname, "../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff")
)).buffer;
const interRegular = new Uint8Array(readFileSync(
  join(__dirname, "../node_modules/@fontsource/inter/files/inter-latin-400-normal.woff")
)).buffer;

const WIDTH = 1200;
const HEIGHT = 630;

const BRAND = {
  navy: "#1a2744",
  orange: "#F97316",
  white: "#ffffff",
};

function Card({ title, subtitle, accent }) {
  return {
    type: "div",
    props: {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: BRAND.navy,
        padding: "60px 80px",
        fontFamily: "Inter",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: WIDTH,
              height: 8,
              backgroundColor: BRAND.orange,
            },
          },
        },
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              marginBottom: 40,
              gap: 12,
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: 48,
                    height: 48,
                    backgroundColor: BRAND.orange,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: BRAND.white,
                    fontSize: 24,
                    fontWeight: 700,
                  },
                  children: "C",
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: 28,
                    color: BRAND.white,
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  },
                  children: "COMPVIDE",
                },
              },
            ],
          },
        },
        {
          type: "div",
          props: {
            style: {
              fontSize: 52,
              fontWeight: 700,
              color: BRAND.white,
              lineHeight: 1.2,
              marginBottom: 20,
              maxWidth: 900,
            },
            children: title,
          },
        },
        {
          type: "div",
          props: {
            style: {
              fontSize: 24,
              color: "#94a3b8",
              lineHeight: 1.5,
              maxWidth: 800,
            },
            children: subtitle,
          },
        },
        accent
          ? {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  bottom: 60,
                  right: 80,
                  fontSize: 18,
                  color: BRAND.orange,
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                },
                children: accent,
              },
            }
          : null,
      ].filter(Boolean),
    },
  };
}

const pages = [
  {
    name: "default",
    title: "Complement Assay Development & Diagnostic Innovation",
    subtitle: "Advancing translational research and precision medicine through functional complement assays.",
    accent: "compvide.com",
  },
  {
    name: "cimed",
    title: "CIMED Diagnostic Platform",
    subtitle: "Pathway-specific functional ELISA kits for complement analysis and drug monitoring.",
    accent: "CIMED-AP · CIMED-CP · CIMED-LP",
  },
  {
    name: "platform",
    title: "The Compvide Complement Platform",
    subtitle: "Functional assays, clinical study support, biomarker programs, and custom assay development.",
    accent: "ASSAYS · SERVICES · INNOVATION",
  },
  {
    name: "about",
    title: "Leadership in Complement Biology",
    subtitle: "World-class team of complement biologists, clinical researchers, and diagnostics innovators.",
    accent: "ABOUT COMPVIDE",
  },
];

const fonts = [
  { name: "Inter", data: interRegular, weight: 400, style: "normal" },
  { name: "Inter", data: interBold, weight: 700, style: "normal" },
];

for (const page of pages) {
  const svg = await satori(Card(page), { width: WIDTH, height: HEIGHT, fonts });
  const png = await sharp(Buffer.from(svg)).png({ quality: 90 }).toBuffer();
  const outPath = join(outDir, `${page.name}.png`);
  writeFileSync(outPath, png);
  console.log(`✓ ${page.name}.png`);
}

console.log("\nDone! OG images generated in public/og/");
