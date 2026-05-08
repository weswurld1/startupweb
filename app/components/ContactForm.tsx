"use client"

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="contact-form-wrapper">
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="name">{t('form.name')}</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder={t('form.namePlaceholder')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">{t('form.email')}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t('form.emailPlaceholder')}
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">{t('form.service')}</label>
          <select id="service" name="service" value={form.service} onChange={handleChange}>
            <option value="">{t('form.servicePlaceholder')}</option>
            <option value="Starter">{t('pricing.starter.name')} — {t('pricing.starterDesc')}</option>
            <option value="Business">{t('pricing.business.name')} — {t('pricing.businessDesc')}</option>
            <option value="Custom">{t('pricing.custom.name')} — {t('pricing.customDesc')}</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="message">{t('form.message')}</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder={t('form.messagePlaceholder')}
          />
        </div>
        {status === 'success' && <p className="form-success">{t('form.success')}</p>}
        {status === 'error' && <p className="form-error">{t('form.error')}</p>}
        <div className="form-actions">
          <button
            className="button"
            onClick={handleSubmit}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? t('form.sending') : t('form.submit')}
          </button>
        </div>
      </div>
    </div>
  )
}