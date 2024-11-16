'use server'
import nodemailer from "nodemailer"
import { z } from 'zod'

const schema = z.object({
  subject: z.string().min(1, "Le sujet est requis"),
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(1, "Le message est requis"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    subject: formData.get('subject'),
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Il y a des erreurs dans le formulaire. Veuillez les corriger.',
    }
  }

  const { subject, name, email, message } = validatedFields.data

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",  // Replace with your SMTP host
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Nouveau message de contact: ${subject}`,
      text: `
        Nom: ${name}
        Email: ${email}
        Sujet: ${subject}
        Message: ${message}
      `,
    })

    return {
      message: 'Votre message a bien été envoyé',
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return {
      message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer plus tard.',
    }
  }
}