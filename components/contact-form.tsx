"use client";

import React from "react";

import { useState } from "react";
import { CheckCircle2, Loader2, Send, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendContactEmail } from "@/app/actions/send-email";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^[\d\s\-+()]{7,20}$/.test(phone))
      newErrors.phone = "Please enter a valid phone number";
    if (!message.trim()) newErrors.message = "Please enter a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const result = await sendContactEmail({
        firstName,
        lastName,
        email,
        phone,
        company,
        product,
        message,
      });
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setError(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center sm:py-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 sm:h-20 sm:w-20">
          <CheckCircle2 className="h-8 w-8 text-accent sm:h-10 sm:w-10" />
        </div>
        <h2 className="mt-6 text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
          Thank You for Reaching Out!
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          We have received your message and our team will review it promptly.
          You can expect to hear back from us within{" "}
          <strong className="text-foreground">2 business days</strong>.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          A confirmation email has been sent to{" "}
          <strong className="text-foreground">{email}</strong>.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
          <Button
            variant="ghost"
            onClick={() => {
              setIsSubmitted(false);
              setFirstName("");
              setLastName("");
              setEmail("");
              setPhone("");
              setCompany("");
              setProduct("");
              setMessage("");
              setErrors({});
            }}
          >
            Send Another Message
          </Button>
        </div>
      </div>
    );
  }

  const fieldClass = "mt-1.5 bg-background dark:bg-secondary/50 border-border";

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-16">
      <div className="mb-8 text-center sm:mb-10">
        <h1 className="text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
          Contact Us
        </h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Have a question about our services, platform, or partnership
          opportunities? Fill out the form below and we will get back to you.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-border bg-muted/40 p-5 sm:p-8">
        <h2 className="text-base font-semibold text-foreground sm:text-lg">
          Contact Information
        </h2>
        <dl className="mt-4 space-y-3 text-sm text-muted-foreground">
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">Phone:</dt>
            <dd>
              <a href="tel:+12063506075" className="hover:text-accent">
                (206) 350-6075
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">Email:</dt>
            <dd>
              <a href="mailto:info@compvide.com" className="hover:text-accent">
                info@compvide.com
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-medium text-foreground">Address:</dt>
            <dd> 330 Yale Avenue North, Suite 520, Seattle, WA 98109</dd>
          </div>
        </dl>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
      >
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
          {/* First Name */}
          <div>
            <Label
              htmlFor="firstName"
              className="text-sm font-medium text-card-foreground"
            >
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              className={fieldClass}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs text-destructive">
                {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <Label
              htmlFor="lastName"
              className="text-sm font-medium text-card-foreground"
            >
              Last Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Smith"
              className={fieldClass}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs text-destructive">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <Label
              htmlFor="email"
              className="text-sm font-medium text-card-foreground"
            >
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@company.com"
              className={fieldClass}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-card-foreground"
            >
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (555) 123-4567"
              className={fieldClass}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Company */}
        <div className="mt-5 sm:mt-6">
          <Label
            htmlFor="company"
            className="text-sm font-medium text-card-foreground"
          >
            Company / Institution
          </Label>
          <Input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Acme Pharma Inc."
            className={fieldClass}
          />
        </div>

        {/* Product Interest */}
        <div className="mt-5 sm:mt-6">
          <Label className="text-sm font-medium text-card-foreground">
            Product / Service Interest
          </Label>
          <Select value={product} onValueChange={setProduct}>
            <SelectTrigger
              className={`mt-1.5 bg-background dark:bg-secondary/50 border-border`}
            >
              <SelectValue placeholder="What are you interested in?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cimed-platform">
                CIMED Diagnostic Platform
              </SelectItem>
              <SelectItem value="cimed-ap">
                CIMED-AP (Alternative Pathway)
              </SelectItem>
              <SelectItem value="cimed-cp">
                CIMED-CP (Classical Pathway)
              </SelectItem>
              <SelectItem value="cimed-lp">
                CIMED-LP (Lectin Pathway)
              </SelectItem>
              <SelectItem value="assay-development">
                Custom Assay Development
              </SelectItem>
              <SelectItem value="biological-samples">
                Biological Samples
              </SelectItem>
              <SelectItem value="clinical-studies">
                Clinical Study Support
              </SelectItem>
              <SelectItem value="biomarker-programs">
                Biomarker Programs
              </SelectItem>
              <SelectItem value="general-inquiry">General Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Message */}
        <div className="mt-5 sm:mt-6">
          <Label
            htmlFor="message"
            className="text-sm font-medium text-card-foreground"
          >
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us how we can help. Include any details about your project, timelines, or specific questions..."
            rows={5}
            className={fieldClass}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-destructive">{errors.message}</p>
          )}
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
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
