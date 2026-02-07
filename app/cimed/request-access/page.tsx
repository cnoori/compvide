import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import CimedRequestForm from "@/components/cimed-request-form"

export const metadata: Metadata = {
  title: "Request CIMED Platform Access",
  description:
    "Request access to the CIMED complement diagnostic platform. Fill out the form and our team will get back to you within 2 business days.",
}

export default function CimedRequestAccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <CimedRequestForm />
      </main>
      <Footer />
    </div>
  )
}
