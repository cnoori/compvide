import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import CimedRequestForm from "@/components/cimed-request-form"
import { JsonLd } from "@/components/json-ld"
import { schema } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Request CIMED Platform Access",
  description:
    "Request access to the CIMED complement diagnostic platform. Fill out the form and our team will get back to you within 2 business days.",
  keywords: ["CIMED access", "complement diagnostic kit", "ELISA kit request"],
  openGraph: {
    title: "Request CIMED Platform Access",
    description:
      "Request access to the CIMED complement diagnostic platform for your research or clinical program.",
  },
  alternates: {
    canonical: "/cimed/request-access",
  },
}

export default function CimedRequestAccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <JsonLd data={schema.breadcrumb([{ name: "Home", path: "/" }, { name: "CIMED", path: "/cimed" }, { name: "Request Access", path: "/cimed/request-access" }])} />
      <Header />
      <main className="flex-1">
        <CimedRequestForm />
      </main>
      <Footer />
    </div>
  )
}
