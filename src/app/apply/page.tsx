'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import styles from './page.module.css'

interface Question {
  id: number
  type: 'text' | 'textarea' | 'radio'
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
    placeholder: 'Ej: limpieza, plomería, electricidad, comida, etc.',
    required: true,
    field: 'businessType',
  },
  {
    id: 2,
    type: 'text',
    label: '¿En qué ciudad o áreas trabaja o piensa trabajar?',
    helper: 'Esto nos ayuda a entender su mercado local',
    placeholder: 'Ej: Charlotte y alrededores',
    required: true,
    field: 'serviceArea',
  },
  {
    id: 3,
    type: 'textarea',
    label: '¿Qué servicios ofrece o piensa ofrecer?',
    helper: 'No tiene que ser perfecto, solo explíquelo con sus palabras',
    placeholder: 'Describa los servicios principales...',
    required: true,
    field: 'services',
    maxLength: 500,
  },
  {
    id: 4,
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
    id: 5,
    type: 'textarea',
    label: '¿Cómo son las personas a las que quiere atender?',
    helper: 'Piense en quiénes serían sus clientes ideales',
    placeholder: 'Ej: familias, dueños de casa, negocios, personas mayores...',
    required: true,
    field: 'clientDescription',
    maxLength: 500,
  },
  {
    id: 6,
    type: 'textarea',
    label: '¿Qué espera lograr con este paquete?',
    helper: 'Sea honesto, no hay respuesta incorrecta',
    placeholder: 'Ej: verme profesional, aparecer en Google, tener algo claro para compartir...',
    required: true,
    field: 'goals',
    maxLength: 500,
  },
  {
    id: 7,
    type: 'textarea',
    label: '¿Hay algo más que quiera contarnos?',
    helper: 'Este campo es opcional, pero a veces aquí salen las mejores ideas',
    placeholder: 'Cualquier cosa que considere importante...',
    required: false,
    field: 'additionalInfo',
    maxLength: 500,
  },
]

export default function Apply() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleInputChange = (value: string) => {
    const question = questions[currentQuestion]
    setFormData(prev => ({
      ...prev,
      [question.field]: value,
    }))
  }

  const handleRadioSelect = (value: string) => {
    handleInputChange(value)
  }

  const validateCurrentQuestion = (): boolean => {
    const question = questions[currentQuestion]
    const value = formData[question.field]

    if (question.required && (!value || value.trim() === '')) {
      alert('Por favor complete este campo')
      return false
    }

    return true
  }

  const nextQuestion = () => {
    if (!validateCurrentQuestion()) return

    if (currentQuestion === questions.length - 1) {
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
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('Form Data:', formData)
    setIsSubmitting(false)
    setSubmitted(true)
  }

  const renderInput = (question: Question) => {
    const value = formData[question.field] || ''

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
              className={`${styles.radioOption} ${formData[question.field] === option.value ? styles.selected : ''}`}
              onClick={() => handleRadioSelect(option.value)}
            >
              <input
                type="radio"
                id={`radio-${question.id}-${idx}`}
                name={`radio-${question.id}`}
                value={option.value}
                checked={formData[question.field] === option.value}
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

  const currentQ = questions[currentQuestion]

  return (
    <>
      <Navigation />
      <main style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div>
            <h1>Apliquemos con calma</h1>
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
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        {/* Form Container */}
        <div className={styles.formContainer}>
          <div className={`${styles.questionCard} ${styles.active}`}>
            <div className={styles.questionNumber}>{currentQ.id}</div>
            <div className={styles.questionLabel}>{currentQ.label}</div>
            <div className={styles.questionHelper}>{currentQ.helper}</div>
            {renderInput(currentQ)}
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
                  : currentQuestion === questions.length - 1
                  ? 'Enviar solicitud'
                  : 'Siguiente →'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
