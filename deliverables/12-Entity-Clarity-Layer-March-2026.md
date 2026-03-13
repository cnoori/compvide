# Plan 12 — Entity Clarity Layer

**Completed:** March 2026
**Plan reference:** [12-entity-clarity-layer.md](../analysis/plans/12-entity-clarity-layer.md)

---

## Summary

Created an unambiguous semantic relationship between Compvide (the company) and CIMED (the product platform) so that search engines and AI tools never conflate, misattribute, or incorrectly describe either entity.

---

## Changes Made

### Task 1: JSON-LD Cross-References via @id

**File:** `lib/schema.ts`

**Organization schema:**
- Added `alternateName: "Compvide Inc."`
- Added `makesOffer` array referencing the CIMED ProductGroup and all three Service @ids
- Added `sameAs: []` (ready for LinkedIn/social profiles when available)
- Updated description to explicitly state "Compvide is the manufacturer of the CIMED diagnostic platform"

**Service schemas (3 services):**
- Added `@id` to each service: `#assay-services`, `#clinical-services`, `#biomarker-services`
- These @ids are cross-referenced from the Organization's `makesOffer`

**ProductGroup schema:**
- Added `alternateName: ["CIMED", "Complement Immune Evaluation Diagnostics"]`
- Updated description to include "developed by Compvide"

**Product schemas (CIMED-AP, CIMED-CP, CIMED-LP):**
- Added `isVariantOf: { @id: "#product-group" }` to each individual product

**Resulting entity graph:**
```
Compvide (Organization)
├── makesOffer → CIMED Diagnostic Platform (ProductGroup)
│   ├── hasVariant → CIMED-AP™ (Product) [isVariantOf → ProductGroup]
│   ├── hasVariant → CIMED-CP™ (Product) [isVariantOf → ProductGroup]
│   └── hasVariant → CIMED-LP™ (Product) [isVariantOf → ProductGroup]
├── makesOffer → Functional Complement Assays (Service)
├── makesOffer → Clinical & Translational Studies (Service)
└── makesOffer → Complement Biomarker Analysis (Service)
```

### Task 2: Content Naming Disambiguation

Audited all pages and replaced ambiguous references:

| Page | Change |
|------|--------|
| `app/page.tsx` | "our platform delivers" → "the Compvide Complement Platform delivers" |
| `app/page.tsx` | "Explore Our Platform" → "Explore the Compvide Platform" |
| `app/page.tsx` | "Our proprietary complement assay platform" → "Compvide's proprietary complement assay platform" |
| `app/page.tsx` | "The company's proprietary CIMED platform" → "Compvide's proprietary CIMED diagnostic platform" |
| `app/platform/page.tsx` | "Compvide's platform integrates" → "The Compvide Complement Platform integrates" |
| `app/about/page.tsx` | "Our work is centered" → "Compvide's work is centered" |
| `app/about/page.tsx` | "Explore Our Platform" → "Explore the Compvide Platform" |
| `app/about/page.tsx` | Added explicit CIMED product description to hero paragraph |
| `app/partners/page.tsx` | "Our platform enables" → "The Compvide Complement Platform enables" |
| `app/partners/page.tsx` | "Our work in diagnostics...our proprietary platform, CIMED™" → "Compvide's work...the proprietary CIMED™ diagnostic platform" |
| `app/samples/page.tsx` | "View Our Platform" → "View the Compvide Platform" |

### Task 3: Entity Relationships in llms.txt

**File:** `public/llms.txt`
- Added explicit "Entity Relationships" section defining Compvide as Organization, CIMED as ProductGroup, variants as Products
- Updated product/service links to include "developed and manufactured by Compvide" / "provided by Compvide"
- Clarified that "CIMED is a product developed by Compvide — it is not a separate company"

**File:** `public/llms-full.txt`
- Added comprehensive "Entity Relationships" section with type annotations
- Explicitly stated "CIMED is a product developed by Compvide — it is not a separate company or organization"
- Disambiguated "Compvide's platform" → "the CIMED diagnostic platform and Compvide's assay services"

### Task 4: About Page Entity Distinction

**File:** `app/about/page.tsx`
- Added explicit sentence: "The company's proprietary CIMED diagnostic platform is a family of pathway-specific ELISA kits for complement activity measurement and drug monitoring."
- Uses "proprietary" and "the company's" to mark CIMED as a product belonging to Compvide

---

## Files Changed

| File | Changes |
|------|---------|
| `lib/schema.ts` | Organization: `alternateName`, `makesOffer`, `sameAs`, description update; Services: `@id` added; ProductGroup: `alternateName`, description update; Products: `isVariantOf` added |
| `app/page.tsx` | 4 content disambiguation edits |
| `app/platform/page.tsx` | 1 content disambiguation edit |
| `app/about/page.tsx` | 3 content edits (disambiguation + entity distinction) |
| `app/partners/page.tsx` | 2 content disambiguation edits |
| `app/samples/page.tsx` | 1 content disambiguation edit |
| `public/llms.txt` | Entity relationships section + attribution clarity |
| `public/llms-full.txt` | Entity relationships section + disambiguation |

---

## Verification

1. **Schema validation:** All @id references form a connected entity graph — Organization → ProductGroup → Products, Organization → Services
2. **Build:** `npm run build` passes with all 14 pages generating successfully
3. **AI test question:** "What is the relationship between Compvide and CIMED?" — the structured data and content now explicitly answer: "CIMED is a diagnostic platform manufactured by Compvide"
4. **AI test question:** "Is CIMED a company?" — llms.txt explicitly states "CIMED is a product developed by Compvide — it is not a separate company"
