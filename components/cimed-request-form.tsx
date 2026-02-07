"use client"

import React from "react"

import { useState } from "react"
import { CheckCircle2, ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
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
import { sendCimedRequestEmail } from "@/app/actions/send-email"

export default function CimedRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [company, setCompany] = useState("")
  const [role, setRole] = useState("")
  const [product, setProduct] = useState("")
  const [useCase, setUseCase] = useState("")
  const [message, setMessage] = useState("")

  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const newErrors: Record<string, string> = {}
    if (!firstName.trim()) newErrors.firstName = "First name is required"
    if (!lastName.trim()) newErrors.lastName = "Last name is required"
    if (!email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email"
    if (!phone.trim()) newErrors.phone = "Phone number is required"
    else if (!/^[\d\s\-+()]{7,20}$/.test(phone))
      newErrors.phone = "Please enter a valid phone number"
    if (!product) newErrors.product = "Please select a product"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")
    if (!validate()) return

    setIsSubmitting(true)
    try {
      const result = await sendCimedRequestEmail({
        firstName,
        lastName,
        email,
        phone,
        company,
        role,
        product,
        useCase,
        message,
      })
      if (result.success) {
        setIsSubmitted(true)
      } else {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center sm:py-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 sm:h-20 sm:w-20">
          <CheckCircle2 className="h-8 w-8 text-accent sm:h-10 sm:w-10" />
        </div>
        <h2 className="mt-6 text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
          Thank You for Your Interest!
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Your request for CIMED platform access has been received. Our team will review your submission and get back to you within <strong className="text-foreground">2 business days</strong> with next steps.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          A confirmation email has been sent to <strong className="text-foreground">{email}</strong>.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/cimed">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to CIMED
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">Go to Homepage</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-16">
      <div className="mb-8 text-center sm:mb-10">
        <h1 className="text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
          Request CIMED Platform Access
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Complete the form below and our team will reach out to discuss your needs and how CIMED can support your program.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {/* First Name */}
          <div>
            <Label htmlFor="firstName" className="text-sm font-medium text-card-foreground">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className="mt-1.5 bg-background dark:bg-secondary/50 border-border"
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-destructive">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <Label htmlFor="lastName" className="text-sm font-medium text-card-foreground">
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Smith"
              className="mt-1.5 bg-background dark:bg-secondary/50 border-border"
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-destructive">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className="mt-1.5 bg-background dark:bg-secondary/50 border-border"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 123-4567"
              className="mt-1.5 bg-background dark:bg-secondary/50 border-border"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          {/* Company */}
          <div>
            <Label htmlFor="company" className="text-sm font-medium text-card-foreground">
              Company / Institution
            </Label>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Acme Pharma"
              className="mt-1.5 bg-background dark:bg-secondary/50 border-border"
            />
          </div>

          {/* Role */}
          <div>
            <Label htmlFor="role" className="text-sm font-medium text-card-foreground">
              Title / Role
            </Label>
            <Input
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Director of Research"
              className="mt-1.5 bg-background dark:bg-secondary/50 border-border"
            />
          </div>
        </div>

        {/* Product Interest */}
        <div className="mt-5 sm:mt-6">
          <Label className="text-sm font-medium text-card-foreground">
            Product of Interest <span className="text-destructive">*</span>
          </Label>
          <Select value={product} onValueChange={setProduct}>
            <SelectTrigger className="mt-1.5 bg-background dark:bg-secondary/50 border-border">
              <SelectValue placeholder="Select a CIMED product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cimed-cp">CIMED-CP (Classical Pathway)</SelectItem>
              <SelectItem value="cimed-lp">CIMED-LP (Lectin Pathway)</SelectItem>
              <SelectItem value="cimed-ap">CIMED-AP (Alternative Pathway)</SelectItem>
              <SelectItem value="full-suite">Full CIMED Suite (All 3 Pathways)</SelectItem>
              <SelectItem value="custom">Custom / Not Sure</SelectItem>
            </SelectContent>
          </Select>
          {errors.product && (
            <p className="mt-1 text-xs text-destructive">{errors.product}</p>
          )}
        </div>

        {/* Use Case */}
        <div className="mt-5 sm:mt-6">
          <Label className="text-sm font-medium text-card-foreground">
            Intended Use Case
          </Label>
          <Select value={useCase} onValueChange={setUseCase}>
            <SelectTrigger className="mt-1.5 bg-background dark:bg-secondary/50 border-border">
              <SelectValue placeholder="Select your primary use case" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="clinical-trial">Clinical Trial Support</SelectItem>
              <SelectItem value="pd-monitoring">PD Drug Monitoring</SelectItem>
              <SelectItem value="preclinical">Preclinical Research</SelectItem>
              <SelectItem value="biomarker">Biomarker Development</SelectItem>
              <SelectItem value="academic">Academic Research</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="mt-5 sm:mt-6">
          <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
            Additional Details
          </Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your project, timelines, or any specific questions..."
            rows={4}
            className="mt-1.5 bg-background dark:bg-secondary/50 border-border"
          />
        </div>

        {error && (
          <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">
            {error}
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full bg-accent font-semibold text-white hover:bg-accent/90 sm:mt-8"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Request"
          )}
        </Button>
      </form>
    </div>
  )
}
