"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { sendContactEmail } from "@/app/actions/send-contact-email"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    projectType: "",
    species: "",
    pathway: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const result = await sendContactEmail(formData)
      
      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const inputClassName = "bg-card dark:bg-secondary/50 border-border"
  const selectTriggerClassName = "w-full bg-card dark:bg-secondary/50 border-border"

  return (
    <section className="py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">Get in Touch</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
              Have questions about our platform, services, or how we can support
              your research? We are here to help.
            </p>

            <div className="mt-6 space-y-6 sm:mt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <Link
                    href="mailto:info@compvide.com"
                    className="text-sm text-accent hover:text-accent/80"
                  >
                    info@compvide.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-border bg-card p-4 sm:mt-12 sm:p-6">
              <p className="text-sm font-medium text-foreground">
                Response Time
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Our scientific team typically responds within 2 business days.
              </p>
            </div>
          </div>

          {/* Collaboration Form */}
          <div id="collaborate" className="scroll-mt-20 lg:col-span-2">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8 lg:p-10">
              <h2 className="text-lg font-bold text-card-foreground sm:text-xl">
                Request a Scientific Collaboration
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                Compvide works with pharma, biotech, diagnostics, and research
                partners on complement-focused programs spanning assay
                development, translational studies, and diagnostic innovation.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Use this form to tell us about your project. Our scientific team
                will review your request and follow up to discuss scope,
                feasibility, and next steps.
              </p>

              {submitted ? (
                <div className="mt-8 rounded-xl border border-accent/20 bg-accent/5 p-6 text-center sm:p-10">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent sm:h-16 sm:w-16">
                    <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground sm:mt-6 sm:text-xl">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
                    We have received your collaboration request. Our scientific team will review your submission and get back to you within <span className="font-medium text-foreground">2 business days</span>.
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    We look forward to exploring how Compvide can support your research.
                  </p>
                  <Button
                    className="mt-6 bg-transparent sm:mt-8"
                    variant="outline"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({
                        name: "",
                        organization: "",
                        email: "",
                        projectType: "",
                        species: "",
                        pathway: "",
                        description: "",
                      })
                    }}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
                  {error && (
                    <div className="rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
                      {error}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Your name"
                        className={inputClassName}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization *</Label>
                      <Input
                        id="organization"
                        required
                        value={formData.organization}
                        onChange={(e) =>
                          handleChange("organization", e.target.value)
                        }
                        placeholder="Company or institution"
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="your.email@organization.com"
                      className={inputClassName}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          handleChange("projectType", value)
                        }
                        required
                      >
                        <SelectTrigger className={selectTriggerClassName}>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assay-development">
                            Assay Development
                          </SelectItem>
                          <SelectItem value="biomarker-pd">
                            Biomarker / PD Study
                          </SelectItem>
                          <SelectItem value="clinical-sample">
                            Clinical Sample Analysis
                          </SelectItem>
                          <SelectItem value="diagnostic-cimed">
                            Diagnostic Collaboration (CIMED)
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="species">Species</Label>
                      <Input
                        id="species"
                        value={formData.species}
                        onChange={(e) => handleChange("species", e.target.value)}
                        placeholder="e.g., Human, Mouse, NHP"
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pathway">
                      Complement Pathway of Interest
                    </Label>
                    <Select
                      value={formData.pathway}
                      onValueChange={(value) => handleChange("pathway", value)}
                    >
                      <SelectTrigger className={selectTriggerClassName}>
                        <SelectValue placeholder="Select pathway" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="classical">
                          Classical Pathway (CP)
                        </SelectItem>
                        <SelectItem value="alternative">
                          Alternative Pathway (AP)
                        </SelectItem>
                        <SelectItem value="lectin">
                          Lectin Pathway (LP)
                        </SelectItem>
                        <SelectItem value="multiple">
                          Multiple Pathways
                        </SelectItem>
                        <SelectItem value="not-sure">
                          Not Sure / Need Guidance
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) =>
                        handleChange("description", e.target.value)
                      }
                      placeholder="Please describe your project, research goals, and any specific requirements..."
                      className={inputClassName}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white hover:bg-accent/90"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Submit Collaboration Request
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
