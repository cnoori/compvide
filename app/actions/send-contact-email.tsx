"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  organization: string
  email: string
  projectType: string
  species: string
  pathway: string
  description: string
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { name, organization, email, projectType, species, pathway, description } = formData

    const projectTypeLabels: Record<string, string> = {
      "assay-development": "Assay Development",
      "biomarker-pd": "Biomarker / PD Study",
      "clinical-sample": "Clinical Sample Analysis",
      "diagnostic-cimed": "Diagnostic Collaboration (CIMED)",
      "other": "Other",
    }

    const pathwayLabels: Record<string, string> = {
      "classical": "Classical Pathway (CP)",
      "alternative": "Alternative Pathway (AP)",
      "lectin": "Lectin Pathway (LP)",
      "multiple": "Multiple Pathways",
      "not-sure": "Not Sure / Need Guidance",
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a2744; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
          New Collaboration Request from Compvide Website
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a2744; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Organization:</strong> ${organization}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a2744; margin-top: 0;">Project Details</h3>
          <p><strong>Project Type:</strong> ${projectTypeLabels[projectType] || projectType}</p>
          <p><strong>Species:</strong> ${species || "Not specified"}</p>
          <p><strong>Complement Pathway:</strong> ${pathwayLabels[pathway] || pathway || "Not specified"}</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a2744; margin-top: 0;">Project Description</h3>
          <p style="white-space: pre-wrap;">${description}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        
        <p style="color: #64748b; font-size: 12px;">
          This email was sent from the Compvide website contact form.
        </p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: "Compvide Website <onboarding@resend.dev>",
      to: ["cnoori@npact.com"],
      replyTo: email,
      subject: `New Collaboration Request: ${projectTypeLabels[projectType] || projectType} - ${organization}`,
      html: emailHtml,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return { success: false, error: "Failed to send email. Please try again." }
    }

    console.log("[v0] Email sent successfully:", data)
    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}
