'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'

interface Question {
  id: number
  type: 'text' | 'textarea' | 'radio' | 'chips'
  label: string
  helper: string
  placeholder?: string
  options?: { value: string; label: string }[]
  required: boolean
  field: string
  maxLength?: number
}

const questions: Question[] = [
  {
    id: 1,
    type: 'text',
    label: '¿Qué tipo de negocio quiere iniciar o ya tiene?',
    helper: 'No se preocupe por ser muy específico, solo cuéntenos con sus palabras',
    placeholder: 'Ej: limpieza, bakery, electricidad, comida, etc.',
    required: true,
    field: 'businessType',
  },
  {
    id: 2,
    type: 'radio',
    label: '¿Qué vende principalmente su negocio?',
    helper: 'Esto nos ayuda a entender mejor cómo presentarlo.',
    options: [
      { value: 'services', label: 'Servicios' },
      { value: 'products', label: 'Productos' },
      { value: 'both', label: 'Ambos' },
    ],
    required: true,
    field: 'offerType',
  },
  {
    id: 3,
    type: 'text',
    label: '¿En qué ciudad o áreas trabaja o piensa trabajar?',
    helper: 'Esto nos ayuda a entender su mercado local',
    placeholder: 'Ej: Virginia, DMV, Washington, DC, etc.',
    required: true,
    field: 'serviceArea',
  },
  {
    id: 4,
    type: 'textarea',
    label: '¿Qué ofrece su negocio?',
    helper: 'Puede ser servicios, productos, o ambos.',
    placeholder: 'Ej: instalación eléctrica, venta de postres, limpieza residencial, venta de ropa…',
    required: true,
    field: 'services',
    maxLength: 500,
  },
  {
    id: 5,
    type: 'radio',
    label: '¿Ya tiene clientes actualmente?',
    helper: 'Esto nos ayuda a entender en qué etapa está',
    options: [
      { value: 'yes', label: 'Sí, ya tengo algunos' },
      { value: 'few', label: 'Muy pocos / apenas empezando' },
      { value: 'no', label: 'No, todavía no' },
    ],
    required: true,
    field: 'hasClients',
  },
  {
    id: 6,
    type: 'textarea',
    label: 'Hablemos de su cliente ideal: ¿a quién quiere venderle?',
    helper: 'Piense en la persona o negocio que usted quiere atender más seguido.',
    placeholder: 'Ej: dueños de casa, negocios pequeños, familias, constructores…',
    required: true,
    field: 'clientDescription',
    maxLength: 500,
  },
  {
    id: 7,
    type: 'chips',
    label: '¿Qué espera lograr con nuestro paquete Starter?',
    helper: 'Puede seleccionar más de una opción.',
    required: true,
    field: 'goals',
    options: [
      { value: 'start', label: 'Comenzar mi negocio' },
      { value: 'clients', label: 'Tener mis primeros clientes' },
      { value: 'showcase', label: 'Tener algo claro para mostrar y compartir' },
      { value: 'google', label: 'Que me puedan encontrar en Google' },
      { value: 'link', label: 'Tener un link sencillo para enviar' },
      { value: 'messages', label: 'Recibir mensajes o solicitudes fácilmente' },
      { value: 'professional', label: 'Verme profesional desde el inicio' },
      { value: 'other', label: 'Otro' },
    ],
  },
  {
    id: 8,
    type: 'textarea',
    label: '¿Hay algo más que quiera contarnos?',
    helper: 'Este campo es opcional, pero a veces aquí salen las mejores ideas',
    placeholder: 'Cualquier cosa que considere importante...',
    required: false,
    field: 'additionalInfo',
    maxLength: 500,
  },
]

// Datos personales (después de las preguntas del negocio)
const personalFields = [
  { id: 'name', label: 'Nombre', type: 'text', required: true, field: 'name' },
  { id: 'phone', label: 'Teléfono', type: 'tel', required: true, field: 'phone' },
  { id: 'email', label: 'Email (opcional)', type: 'email', required: false, field: 'email' },
]

const totalSteps = questions.length + personalFields.length

export default function Apply() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [formData, setFormData] = useState<Record<string, string | string[]>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOtherTextarea, setShowOtherTextarea] = useState(false)
  const [formStartTime] = useState(Date.now())
  const [honeypotValue, setHoneypotValue] = useState('')

  const isPersonalDataStep = currentQuestion >= questions.length
  const currentStep = currentQuestion + 1
  const progress = (currentStep / totalSteps) * 100

  // Manejar el estado de "Otro" cuando se cambia a la pregunta 7 (chips)
  useEffect(() => {
    if (currentQuestion === 6) {
      const goals = formData['goals'] as string[]
      setShowOtherTextarea(goals?.includes('other') || false)
    } else {
      setShowOtherTextarea(false)
    }
  }, [currentQuestion, formData])

  const handleInputChange = (value: string) => {
    if (isPersonalDataStep) {
      const field = personalFields[currentQuestion - questions.length]
      setFormData(prev => ({
        ...prev,
        [field.field]: value,
      }))
    } else {
      const question = questions[currentQuestion]
      setFormData(prev => ({
        ...prev,
        [question.field]: value,
      }))
    }
  }

  const handleRadioSelect = (value: string) => {
    handleInputChange(value)
  }

  const handleChipToggle = (value: string) => {
    const currentValues = (formData['goals'] as string[]) || []
    const isSelected = currentValues.includes(value)
    
    let newValues: string[]
    if (value === 'other') {
      // Si selecciona "Otro", mostrar textarea
      if (!isSelected) {
        newValues = [...currentValues, value]
        setShowOtherTextarea(true)
      } else {
        newValues = currentValues.filter(v => v !== value)
        setShowOtherTextarea(false)
        // Limpiar el texto de "otro" si se deselecciona
        setFormData(prev => {
          const updated = { ...prev }
          delete updated['goalsOther']
          return updated
        })
      }
    } else {
      // Para otras opciones, toggle normal
      if (isSelected) {
        newValues = currentValues.filter(v => v !== value)
      } else {
        newValues = [...currentValues, value]
      }
    }
    
    setFormData(prev => ({
      ...prev,
      goals: newValues,
    }))
  }

  const validateCurrentQuestion = (): boolean => {
    if (isPersonalDataStep) {
      const field = personalFields[currentQuestion - questions.length]
      const value = formData[field.field] as string
      
      if (field.required && (!value || value.trim() === '')) {
        alert(`Por favor complete el campo ${field.label.toLowerCase()}`)
        return false
      }
      
      // Validar teléfono (mínimo 10 dígitos)
      if (field.type === 'tel' && value) {
        const digitsOnly = value.replace(/\D/g, '')
        if (digitsOnly.length < 10) {
          alert('Por favor ingrese un teléfono válido (mínimo 10 dígitos)')
          return false
        }
      }
      
      // Validar email (solo si está presente, es opcional)
      if (field.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value)) {
          alert('Por favor ingrese un email válido')
          return false
        }
      }
      
      return true
    } else {
      const question = questions[currentQuestion]
      
      if (question.type === 'chips') {
        const values = formData[question.field] as string[]
        if (question.required && (!values || values.length === 0)) {
          alert('Por favor seleccione al menos una opción')
          return false
        }
        // Si tiene "other" seleccionado, validar que tenga texto
        if (values?.includes('other')) {
          const otherText = formData['goalsOther'] as string
          if (!otherText || otherText.trim() === '') {
            alert('Por favor complete qué espera lograr')
            return false
          }
        }
      } else {
        const value = formData[question.field] as string
        if (question.required && (!value || value.trim() === '')) {
          alert('Por favor complete este campo')
          return false
        }
      }
    }

    return true
  }

  const nextQuestion = () => {
    if (!validateCurrentQuestion()) return

    if (currentQuestion === totalSteps - 1) {
      submitForm()
    } else {
      setCurrentQuestion(prev => prev + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const submitForm = async () => {
    // Anti-bot: Time-trap check (menos de 4 segundos = probable bot)
    const formDuration = (Date.now() - formStartTime) / 1000
    if (formDuration < 4) {
      console.warn('Bot detected: form completed too quickly')
      // En producción, aquí se rechazaría el envío
      // Por ahora solo logueamos para no afectar UX durante desarrollo
    }

    setIsSubmitting(true)

    try {
      // Prepare submission data with honeypot
      const submissionData = {
        ...formData,
        company_website: honeypotValue, // Include honeypot in submission
        formDuration,
        timestamp: new Date().toISOString(),
      }

      // Send to API endpoint
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al enviar la solicitud')
      }

      // Success - show confirmation
      setSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Hubo un problema enviando la solicitud. Intente de nuevo.')
      setIsSubmitting(false)
    }
  }

  const renderInput = (question: Question) => {
    if (question.type === 'chips' && question.options) {
      const selectedValues = (formData[question.field] as string[]) || []
      const hasOther = selectedValues.includes('other')
      
      return (
        <>
          <div className={styles.chipsContainer}>
            {question.options.map((option, idx) => {
              const isSelected = selectedValues.includes(option.value)
              return (
                <button
                  key={idx}
                  type="button"
                  className={`${styles.chip} ${isSelected ? styles.chipSelected : ''}`}
                  onClick={() => handleChipToggle(option.value)}
                >
                  {option.label}
                </button>
              )
            })}
          </div>
          {hasOther && (
            <div className={styles.otherTextarea}>
              <textarea
                className={styles.textarea}
                value={(formData['goalsOther'] as string) || ''}
                onChange={(e) => setFormData(prev => ({ ...prev, goalsOther: e.target.value }))}
                placeholder="Cuéntenos qué espera lograr..."
                maxLength={300}
              />
              <div className={styles.charCounter}>
                <span>{((formData['goalsOther'] as string) || '').length}</span> / 300
              </div>
            </div>
          )}
        </>
      )
    }

    const value = (formData[question.field] as string) || ''

    if (question.type === 'text') {
      return (
        <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={question.placeholder}
          required={question.required}
        />
      )
    }

    if (question.type === 'textarea') {
      return (
        <>
          <textarea
            className={styles.textarea}
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={question.placeholder}
            required={question.required}
            maxLength={question.maxLength || 500}
          />
          {question.maxLength && (
            <div className={styles.charCounter}>
              <span>{value.length}</span> / {question.maxLength}
            </div>
          )}
        </>
      )
    }

    if (question.type === 'radio' && question.options) {
      return (
        <div className={styles.radioOptions}>
          {question.options.map((option, idx) => (
            <div
              key={idx}
              className={`${styles.radioOption} ${(formData[question.field] as string) === option.value ? styles.selected : ''}`}
              onClick={() => handleRadioSelect(option.value)}
            >
              <input
                type="radio"
                id={`radio-${question.id}-${idx}`}
                name={`radio-${question.id}`}
                value={option.value}
                checked={(formData[question.field] as string) === option.value}
                onChange={() => handleRadioSelect(option.value)}
                required={question.required}
              />
              <label htmlFor={`radio-${question.id}-${idx}`}>{option.label}</label>
            </div>
          ))}
        </div>
      )
    }

    return null
  }

  const renderPersonalField = () => {
    const field = personalFields[currentQuestion - questions.length]
    const value = (formData[field.field] as string) || ''
    
    return (
      <input
        type={field.type}
        className={styles.input}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder={field.type === 'email' ? 'ejemplo@email.com' : field.type === 'tel' ? 'Ej: +1 704 555 1234' : ''}
        required={field.required}
      />
    )
  }

  if (submitted) {
    return (
      <>
        <Navigation />
        <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
          <section className={styles.confirmation}>
            <div className={styles.confirmationCard}>
              <div className={styles.confirmationIcon}>✓</div>
              <h2>Gracias</h2>
              <p>Revisamos su solicitud y le respondemos pronto.</p>
            </div>
          </section>
        </main>
      </>
    )
  }

  const currentQ = isPersonalDataStep ? null : questions[currentQuestion]
  const currentPersonalField = isPersonalDataStep ? personalFields[currentQuestion - questions.length] : null

  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        <div className={styles.applyLayout}>
          {/* Hero Section */}
          <section className={styles.hero}>
            <div>
              <h1>Hablemos con calma</h1>
              <p>Solo necesitamos entender su negocio para saber si este paquete realmente le puede ayudar.</p>
              <span className={styles.heroTime}>⏱️ Toma 2–3 minutos</span>
            </div>
          </section>

          {/* Progress Bar */}
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className={styles.progressText}>
              {isPersonalDataStep ? 'Datos de contacto' : `Pregunta ${currentStep} de ${totalSteps}`}
            </p>
          </div>

          {/* Form Container */}
          <div className={styles.formContainer}>
            <div className={`${styles.questionCard} ${styles.active}`}>
              <div className={styles.questionContent}>
                {isPersonalDataStep ? (
                  <>
                    <div className={styles.questionNumber}>{currentStep}</div>
                    <div className={styles.questionLabel}>{currentPersonalField?.label}</div>
                    {currentQuestion === questions.length && (
                      <div className={styles.personalDataIntro}>
                        <p>Usamos esta información solo para responderle. No spam.</p>
                      </div>
                    )}
                    {renderPersonalField()}
                  </>
                ) : (
                  <>
                    <div className={styles.questionNumber}>{currentQ?.id}</div>
                    <div className={styles.questionLabel}>{currentQ?.label}</div>
                    <div className={styles.questionHelper}>{currentQ?.helper}</div>
                    {currentQ && renderInput(currentQ)}
                  </>
                )}
                {/* Honeypot field - invisible to users */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  className={styles.honeypot}
                  value={honeypotValue}
                  onChange={(e) => setHoneypotValue(e.target.value)}
                />
              </div>
              <div className={styles.buttonGroup}>
                {currentQuestion > 0 && (
                  <button
                    type="button"
                    className={styles.btnSecondary}
                    onClick={previousQuestion}
                  >
                    ← Anterior
                  </button>
                )}
                <button
                  type="button"
                  className={styles.btnPrimary}
                  onClick={nextQuestion}
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? 'Enviando...'
                    : currentQuestion === totalSteps - 1
                    ? 'Enviar solicitud'
                    : 'Siguiente →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
