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
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description:
    "Compvide is a biotechnology company specializing in functional complement assays, biomarker programs, and clinical-study sample analysis for translational research and therapeutic development.",
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
};

const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Compvide",
  url: BASE_URL,
  publisher: { "@id": ORG_ID },
};

function cimedProducts(
  products: { name: string; description: string }[],
) {
  return products.map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name}™`,
    description: product.description,
    brand: { "@type": "Brand", name: "Compvide" },
    manufacturer: { "@id": ORG_ID },
    category: "Medical Diagnostic Kit",
    image: `${BASE_URL}/images/cimed-products.png`,
    url: `${BASE_URL}/cimed`,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Complement Pathway",
        value: product.name.replace("CIMED-", ""),
      },
      { "@type": "PropertyValue", name: "Format", value: "ELISA" },
      { "@type": "PropertyValue", name: "Use", value: "Research Use Only" },
    ],
  }));
}

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
  persons,
  services,
  contactPage,
};
