"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  organization: string
  email: string
  projectType: string
  species: string
  pathway: string
  description: string
}

// Initialize the transporter outside the function to reuse connections (optional but good practice)
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: "SSLv3",
    // This helps prevent errors in some dev environments, but careful in production
    // rejectUnauthorized: false, 
  },
})

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { name, organization, email, projectType, species, pathway, description } = formData

    const projectTypeLabels: Record<string, string> = {
      "assay-development": "Assay Development",
      "biomarker-pd": "Biomarker / PD Study",
      "clinical-sample": "Clinical Sample Analysis",
      "diagnostic-cimed": "Diagnostic Collaboration (CIMED)",
      other: "Other",
    }

    const pathwayLabels: Record<string, string> = {
      "classical": "Classical Pathway (CP)",
      "alternative": "Alternative Pathway (AP)",
      "lectin": "Lectin Pathway (LP)",
      multiple: "Multiple Pathways",
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

    // Verify connection configuration before sending (optional debug step)
    // await transporter.verify()

    const info = await transporter.sendMail({
      from: `"Compvide Website" <${process.env.SMTP_USER}>`, // Valid sender address
      to: "cnoori@npact.com", 
      replyTo: email, // Set the user's email as the Reply-To
      subject: `New Collaboration Request: ${projectTypeLabels[projectType] || projectType} - ${organization}`,
      html: emailHtml,
    })

    console.log("[v0] Email sent successfully:", info.messageId)
    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, error: "An unexpected error occurred. Please try again." }
  }
}