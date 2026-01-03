import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface FormData {
  businessType?: string
  offerType?: string
  serviceArea?: string
  services?: string
  hasClients?: string
  clientDescription?: string
  goals?: string[]
  goalsOther?: string
  additionalInfo?: string
  name?: string
  phone?: string
  email?: string
  company_website?: string
  formDuration?: number
  timestamp?: string
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json()

    // Anti-bot: Honeypot check
    if (formData.company_website && formData.company_website.trim() !== '') {
      // Bot detected - return success without sending email
      return NextResponse.json({ success: true }, { status: 200 })
    }

    // Validate required fields
    if (!formData.name || !formData.phone) {
      return NextResponse.json(
        { error: 'Nombre y teléfono son requeridos' },
        { status: 400 }
      )
    }

    // Get SMTP configuration from environment variables
    const smtpPort = parseInt(process.env.SMTP_PORT || '465')
    const smtpConfig = {
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpPort === 465, // true for SSL (465), false for TLS (587)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    }

    // Validate SMTP config
    if (!smtpConfig.host || !smtpConfig.auth.user || !smtpConfig.auth.pass) {
      console.error('SMTP configuration missing')
      return NextResponse.json(
        { error: 'Error de configuración del servidor' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport(smtpConfig)

    // Format goals array
    const goalsLabels: Record<string, string> = {
      start: 'Comenzar mi negocio',
      clients: 'Tener mis primeros clientes',
      showcase: 'Tener algo claro para mostrar y compartir',
      google: 'Que me puedan encontrar en Google',
      link: 'Tener un link sencillo para enviar',
      messages: 'Recibir mensajes o solicitudes fácilmente',
      professional: 'Verme profesional desde el inicio',
      other: 'Otro',
    }

    const goalsText = formData.goals
      ? formData.goals.map((g) => goalsLabels[g] || g).join(', ')
      : 'No especificado'

    // Format hasClients
    const hasClientsLabels: Record<string, string> = {
      yes: 'Sí, ya tengo algunos',
      few: 'Muy pocos / apenas empezando',
      no: 'No, todavía no',
    }
    const hasClientsText = formData.hasClients
      ? hasClientsLabels[formData.hasClients] || formData.hasClients
      : 'No especificado'

    // Format offerType
    const offerTypeLabels: Record<string, string> = {
      services: 'Servicios',
      products: 'Productos',
      both: 'Ambos',
    }
    const offerTypeText = formData.offerType
      ? offerTypeLabels[formData.offerType] || formData.offerType
      : 'No especificado'

    // Create HTML email
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .section { margin-bottom: 25px; }
    .section-title { font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 12px; border-bottom: 2px solid #06b6d4; padding-bottom: 8px; }
    .field { margin-bottom: 12px; }
    .label { font-weight: 600; color: #475569; font-size: 14px; }
    .value { color: #1e293b; margin-top: 4px; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #06b6d4; }
    .footer { background: #f1f5f9; padding: 15px; text-align: center; font-size: 12px; color: #64748b; border-radius: 0 0 8px 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">Nueva solicitud – Paquete Starter</h1>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">📞 DATOS DE CONTACTO</div>
        <div class="field">
          <div class="label">Nombre:</div>
          <div class="value">${formData.name || 'No especificado'}</div>
        </div>
        <div class="field">
          <div class="label">Teléfono:</div>
          <div class="value">${formData.phone || 'No especificado'}</div>
        </div>
        <div class="field">
          <div class="label">Email:</div>
          <div class="value">${formData.email || 'No proporcionado'}</div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">💼 NEGOCIO</div>
        <div class="field">
          <div class="label">Tipo de negocio:</div>
          <div class="value">${formData.businessType || 'No especificado'}</div>
        </div>
        <div class="field">
          <div class="label">Qué vende:</div>
          <div class="value">${offerTypeText}</div>
        </div>
        <div class="field">
          <div class="label">Área/ciudad:</div>
          <div class="value">${formData.serviceArea || 'No especificado'}</div>
        </div>
        <div class="field">
          <div class="label">Qué ofrece:</div>
          <div class="value">${formData.services || 'No especificado'}</div>
        </div>
        <div class="field">
          <div class="label">Cliente ideal:</div>
          <div class="value">${formData.clientDescription || 'No especificado'}</div>
        </div>
        <div class="field">
          <div class="label">Ya tiene clientes:</div>
          <div class="value">${hasClientsText}</div>
        </div>
        <div class="field">
          <div class="label">Objetivos:</div>
          <div class="value">${goalsText}${formData.goalsOther ? `<br><br><strong>Otro:</strong> ${formData.goalsOther}` : ''}</div>
        </div>
        ${formData.additionalInfo ? `
        <div class="field">
          <div class="label">Notas adicionales:</div>
          <div class="value">${formData.additionalInfo}</div>
        </div>
        ` : ''}
      </div>
    </div>
    <div class="footer">
      <p>Enviado el ${new Date().toLocaleString('es-ES', { dateStyle: 'long', timeStyle: 'short' })}</p>
    </div>
  </div>
</body>
</html>
    `

    // Send email
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      subject: 'Nueva solicitud – Paquete Starter',
      html: htmlContent,
      text: `
Nueva solicitud – Paquete Starter

DATOS DE CONTACTO:
- Nombre: ${formData.name}
- Teléfono: ${formData.phone}
- Email: ${formData.email || 'No proporcionado'}

NEGOCIO:
- Tipo de negocio: ${formData.businessType || 'No especificado'}
- Qué vende: ${offerTypeText}
- Área/ciudad: ${formData.serviceArea || 'No especificado'}
- Qué ofrece: ${formData.services || 'No especificado'}
- Cliente ideal: ${formData.clientDescription || 'No especificado'}
- Ya tiene clientes: ${hasClientsText}
- Objetivos: ${goalsText}${formData.goalsOther ? `\n  Otro: ${formData.goalsOther}` : ''}
${formData.additionalInfo ? `- Notas adicionales: ${formData.additionalInfo}` : ''}
      `.trim(),
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Error al enviar la solicitud. Por favor intente de nuevo.' },
      { status: 500 }
    )
  }
}

