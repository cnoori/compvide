"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const RECEIVER_EMAIL = "info@compvide.com";
// IMPORTANT: With Resend, the 'from' email must be a domain you have verified in their dashboard.
// e.g., "onboarding@resend.dev" (for testing) or "notifications@yourdomain.com"
const SENDER_EMAIL = process.env.RESEND_SENDER_EMAIL || "info@compvide.com";

// ---------- CONTACT US FORM ----------

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  product: string;
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const { firstName, lastName, email, phone, company, product, message } =
      formData;

    const productLabels: Record<string, string> = {
      "cimed-platform": "CIMED Platform",
      "cimed-ap": "CIMED-AP (Alternative Pathway)",
      "cimed-cp": "CIMED-CP (Classical Pathway)",
      "cimed-lp": "CIMED-LP (Lectin Pathway)",
      "assay-development": "Custom Assay Development",
      "biological-samples": "Biological Samples",
      "clinical-studies": "Clinical Study Support",
      "biomarker-programs": "Biomarker Programs",
      "general-inquiry": "General Inquiry",
    };

    // Internal notification email
    const internalHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a2744; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
          New Contact Inquiry - Compvide Website
        </h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a2744; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
        </div>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a2744; margin-top: 0;">Inquiry Details</h3>
          <p><strong>Product Interest:</strong> ${productLabels[product] || product}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        <p style="color: #64748b; font-size: 12px;">This email was sent from the Compvide website contact form.</p>
      </div>
    `;

    // Confirmation email to the lead
    const leadHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a2744;">Thank You for Contacting Compvide</h2>
        <p>Dear ${firstName},</p>
        <p>Thank you for reaching out to us. We have received your inquiry regarding <strong>${productLabels[product] || product}</strong> and our team is reviewing it now.</p>
        <p>You can expect a response from us within <strong>2 business days</strong>.</p>
        <p>In the meantime, feel free to explore our website to learn more about our platform and services.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>The Compvide Team</strong></p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        <p style="color: #64748b; font-size: 12px;">Compvide Inc. | Complement Assay Development & Diagnostics</p>
      </div>
    `;

    if (!process.env.RESEND_API_KEY) {
      console.log(
        "[Compvide] Resend API Key missing. Logging contact form submission:",
      );
      console.log(
        "[Compvide] Contact Data:",
        JSON.stringify(formData, null, 2),
      );
      return { success: true };
    }

    // Send internal notification and lead confirmation in parallel
    await Promise.all([
      resend.emails.send({
        from: SENDER_EMAIL,
        to: RECEIVER_EMAIL,
        replyTo: email,
        subject: `New Contact Inquiry: ${productLabels[product] || product} - ${firstName} ${lastName}`,
        html: internalHtml,
      }),
      resend.emails.send({
        from: SENDER_EMAIL,
        to: email,
        subject: "Thank You for Contacting Compvide",
        html: leadHtml,
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error("[Compvide] Error sending contact email:", error);
    return {
      success: false,
      error: "Failed to send your message. Please try again.",
    };
  }
}

// ---------- CIMED ACCESS REQUEST FORM ----------

interface CimedRequestFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  product: string;
  useCase: string;
  message: string;
}

export async function sendCimedRequestEmail(formData: CimedRequestFormData) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      role,
      product,
      useCase,
      message,
    } = formData;

    const productLabels: Record<string, string> = {
      "cimed-cp": "CIMED-CP (Classical Pathway)",
      "cimed-lp": "CIMED-LP (Lectin Pathway)",
      "cimed-ap": "CIMED-AP (Alternative Pathway)",
      "full-suite": "Full CIMED Suite (All 3 Pathways)",
      custom: "Custom / Not Sure",
    };

    const useCaseLabels: Record<string, string> = {
      "clinical-trial": "Clinical Trial Support",
      "pd-monitoring": "PD Drug Monitoring",
      preclinical: "Preclinical Research",
      biomarker: "Biomarker Development",
      academic: "Academic Research",
      other: "Other",
    };

    // Internal notification
    const internalHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a2744; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
          New CIMED Platform Access Request
        </h2>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a2744; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Role/Title:</strong> ${role || "Not provided"}</p>
        </div>
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1a2744; margin-top: 0;">Request Details</h3>
          <p><strong>Product of Interest:</strong> ${productLabels[product] || product}</p>
          <p><strong>Intended Use Case:</strong> ${useCaseLabels[useCase] || useCase || "Not specified"}</p>
          <p><strong>Additional Details:</strong></p>
          <p style="white-space: pre-wrap;">${message || "None provided"}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        <p style="color: #64748b; font-size: 12px;">This email was sent from the Compvide CIMED access request form.</p>
      </div>
    `;

    // Confirmation email to the requester
    const leadHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a2744;">Thank You for Your CIMED Platform Access Request</h2>
        <p>Dear ${firstName},</p>
        <p>Thank you for your interest in the CIMED&trade; platform. We have received your access request for <strong>${productLabels[product] || product}</strong> and our team is reviewing it.</p>
        <p>You can expect a response from us within <strong>2 business days</strong>. A member of our scientific team will reach out to discuss your program requirements and next steps.</p>
        <p>In the meantime, feel free to explore our website to learn more about the CIMED platform capabilities.</p>
        <br />
        <p>Best regards,</p>
        <p><strong>The Compvide Team</strong></p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        <p style="color: #64748b; font-size: 12px;">Compvide Inc. | Complement Assay Development & Diagnostics</p>
      </div>
    `;

    if (!process.env.RESEND_API_KEY) {
      console.log(
        "[Compvide] Resend API Key missing. Logging CIMED access request:",
      );
      console.log(
        "[Compvide] CIMED Access Data:",
        JSON.stringify(formData, null, 2),
      );
      return { success: true };
    }

    // Send in parallel
    await Promise.all([
      resend.emails.send({
        from: SENDER_EMAIL,
        to: RECEIVER_EMAIL,
        replyTo: email,
        subject: `CIMED Access Request: ${productLabels[product] || product} - ${firstName} ${lastName}`,
        html: internalHtml,
      }),
      resend.emails.send({
        from: SENDER_EMAIL,
        to: email,
        subject: "Your CIMED Platform Access Request - Compvide",
        html: leadHtml,
      }),
    ]);

    return { success: true };
  } catch (error) {
    console.error("[Compvide] Error sending CIMED access email:", error);
    return {
      success: false,
      error: "Failed to send your request. Please try again.",
    };
  }
}
