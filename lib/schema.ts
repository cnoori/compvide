const BASE_URL = "https://www.compvide.com";
const ORG_ID = `${BASE_URL}/#organization`;

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Compvide",
  alternateName: "Compvide Inc.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description:
    "Compvide is a biotechnology company specializing in functional complement assays, biomarker programs, and clinical-study sample analysis for translational research and therapeutic development. Compvide is the manufacturer of the CIMED diagnostic platform.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "879 Rainier Ave N, STE A103",
    addressLocality: "Renton",
    addressRegion: "WA",
    postalCode: "98057",
    addressCountry: "US",
  },
  telephone: "+12063506075",
  email: "info@compvide.com",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+12063506075",
    contactType: "customer service",
    email: "info@compvide.com",
  },
  knowsAbout: [
    "complement system",
    "functional complement assays",
    "complement diagnostics",
    "CIMED diagnostic platform",
    "biomarker analysis",
    "translational research",
  ],
  makesOffer: [
    { "@id": `${BASE_URL}/cimed/#product-group` },
    { "@id": `${BASE_URL}/platform/#assay-services` },
    { "@id": `${BASE_URL}/platform/#clinical-services` },
    { "@id": `${BASE_URL}/platform/#biomarker-services` },
  ],
  sameAs: [],
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Compvide",
  url: BASE_URL,
  publisher: { "@id": ORG_ID },
};

const CIMED_MEDICAL_CONDITIONS = [
  {
    "@type": "MedicalCondition" as const,
    name: "Paroxysmal Nocturnal Hemoglobinuria",
    alternateName: "PNH",
    url: "https://www.ncbi.nlm.nih.gov/medgen/6543",
  },
  {
    "@type": "MedicalCondition" as const,
    name: "Atypical Hemolytic Uremic Syndrome",
    alternateName: "aHUS",
  },
  {
    "@type": "MedicalCondition" as const,
    name: "Generalized Myasthenia Gravis",
    alternateName: "gMG",
  },
  {
    "@type": "MedicalCondition" as const,
    name: "Systemic Lupus Erythematosus",
    alternateName: "SLE",
  },
  {
    "@type": "MedicalCondition" as const,
    name: "C3 Glomerulopathy",
    alternateName: "C3G",
  },
  {
    "@type": "MedicalCondition" as const,
    name: "Neuromyelitis Optica Spectrum Disorder",
    alternateName: "NMOSD",
  },
];

const PATHWAY_NAMES: Record<string, string> = {
  AP: "Alternative Pathway",
  CP: "Classical Pathway",
  LP: "Lectin Pathway",
};

function cimedProducts(
  products: { name: string; description: string }[],
) {
  return products.map((product) => {
    const pathwayCode = product.name.replace("CIMED-", "");
    const pathwayName = PATHWAY_NAMES[pathwayCode] ?? pathwayCode;

    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "@id": `${BASE_URL}/cimed/#cimed-${pathwayCode.toLowerCase()}`,
      name: `${product.name}™`,
      description: product.description,
      brand: { "@type": "Brand", name: "Compvide" },
      manufacturer: { "@id": ORG_ID },
      isVariantOf: { "@id": `${BASE_URL}/cimed/#product-group` },
      category: "In Vitro Diagnostic Kit",
      additionalType: "https://schema.org/MedicalDevice",
      image: `${BASE_URL}/images/cimed-products.png`,
      url: `${BASE_URL}/cimed`,
      isRelatedTo: CIMED_MEDICAL_CONDITIONS,
      audience: {
        "@type": "MedicalAudience",
        audienceType: "Clinician, Researcher, Clinical Trial Sponsor",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStoreOnly",
        url: `${BASE_URL}/cimed/request-access`,
        seller: { "@id": ORG_ID },
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Complement Pathway",
          value: pathwayName,
        },
        {
          "@type": "PropertyValue",
          name: "Assay Format",
          value: "ELISA (Enzyme-Linked Immunosorbent Assay)",
        },
        {
          "@type": "PropertyValue",
          name: "Regulatory Status",
          value: "Research Use Only (RUO)",
        },
        {
          "@type": "PropertyValue",
          name: "Application",
          value:
            "Complement activity measurement, pharmacodynamic drug monitoring, inhibition profiling",
        },
        {
          "@type": "PropertyValue",
          name: "Sample Type",
          value: "Human serum, Human plasma",
        },
        {
          "@type": "PropertyValue",
          name: "Detection Method",
          value: "Functional complement activation",
        },
      ],
    };
  });
}

const cimedProductGroup = {
  "@context": "https://schema.org",
  "@type": "ProductGroup",
  "@id": `${BASE_URL}/cimed/#product-group`,
  name: "CIMED Diagnostic Platform",
  alternateName: ["CIMED", "Complement Immune Evaluation Diagnostics"],
  description:
    "A proprietary complement diagnostic platform developed by Compvide, consisting of three pathway-specific functional ELISA kits for complement activity measurement, inhibition profiling, and pharmacodynamic drug monitoring.",
  brand: { "@type": "Brand", name: "Compvide" },
  manufacturer: { "@id": ORG_ID },
  hasVariant: [
    { "@id": `${BASE_URL}/cimed/#cimed-ap` },
    { "@id": `${BASE_URL}/cimed/#cimed-cp` },
    { "@id": `${BASE_URL}/cimed/#cimed-lp` },
  ],
  variesBy: "Complement Pathway",
};

function persons(
  members: { name: string; role: string; image: string; shortBio: string }[],
) {
  return members.map((m) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    worksFor: { "@id": ORG_ID },
    description: m.shortBio,
    image: `${BASE_URL}${m.image}`,
    knowsAbout: [
      "complement biology",
      "complement diagnostics",
      "translational research",
    ],
  }));
}

const services = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/platform/#assay-services`,
    name: "Functional Complement Assays",
    description:
      "Pathway-specific functional assay design and optimization for complement activation and inhibition assessment across all three complement pathways.",
    provider: { "@id": ORG_ID },
    serviceType: "Complement Assay Development",
    url: `${BASE_URL}/platform#assays`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/platform/#clinical-services`,
    name: "Clinical & Translational Studies",
    description:
      "Clinical study sample testing, pharmacodynamic support, and translational readouts connecting complement mechanism to therapeutic outcomes.",
    provider: { "@id": ORG_ID },
    serviceType: "Clinical Research Services",
    url: `${BASE_URL}/platform#services`,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/platform/#biomarker-services`,
    name: "Complement Biomarker Analysis",
    description:
      "Complement activation biomarker measurement using validated assays, supporting pharmacodynamic and mechanistic studies for drug development.",
    provider: { "@id": ORG_ID },
    serviceType: "Biomarker Analysis",
    url: `${BASE_URL}/platform#biomarkers`,
  },
];

const contactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Compvide",
  url: `${BASE_URL}/contact`,
  mainEntity: { "@id": ORG_ID },
};

export const schema = {
  breadcrumb,
  organization,
  webSite,
  cimedProducts,
  cimedProductGroup,
  persons,
  services,
  contactPage,
};
