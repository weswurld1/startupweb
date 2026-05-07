"use client"


import '@/i18n'
import { useTranslation } from 'react-i18next'
import { SiVercel, SiSupabase, SiHtml5, SiJavascript, SiCss, SiPython } from "react-icons/si"

export default function Home() {
  const { t, i18n } = useTranslation()

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t('skip')}
      </a>

      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          <a href="/" className="logo" aria-label="ByteClub Dev home" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img src="/logo.png" alt="ByteClub Dev" style={{ height: "36px", width: "auto" }} />
            ByteClub Dev
          </a>
          <div className="nav-links">
            <button
              onClick={() => i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'es' : 'en')}
              style={{
                background: 'none',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)',
                borderRadius: '6px',
                padding: '4px 10px',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.04em',
              }}
            >
              {i18n.resolvedLanguage === 'en' ? 'ES' : 'EN'}
            </button>
            <a href="#work">{t('nav.work')}</a>
            <a href="#pricing">{t('nav.pricing')}</a>
            <a href="#contact">{t('nav.contact')}</a>
          </div>
        </div>
      </nav>

      <main id="main-content">

        <section className="hero" aria-labelledby="hero-title">
          <div className="container fade-up">
            <h1 id="hero-title">
              {t('hero.title')}<br />
              <em>{t('hero.emphasis')}</em> {t('hero.title2')}
            </h1>
            <p>{t('hero.subtitle')}</p>
            <a href="#contact" className="button">
              {t('hero.cta')}
            </a>
          </div>
        </section>

        <section className="tech-stack" aria-labelledby="tech-title">
          <div className="container">
            <h2 id="tech-title">{t('tech.title')}</h2>
            <div className="tech-grid" role="list">
              <article className="tech-card" role="listitem">
                <SiVercel aria-hidden="true" className="tech-icon" />
                <span>Vercel</span>
              </article>
              <article className="tech-card" role="listitem">
                <SiSupabase aria-hidden="true" className="tech-icon" style={{ color: "#3ECF8E" }} />
                <span>Supabase</span>
              </article>
              <article className="tech-card" role="listitem">
                <SiHtml5 aria-hidden="true" className="tech-icon" style={{ color: "#E34F26" }} />
                <span>HTML</span>
              </article>
              <article className="tech-card" role="listitem">
                <SiJavascript aria-hidden="true" className="tech-icon" style={{ color: "#F7DF1E" }} />
                <span>JavaScript</span>
              </article>
              <article className="tech-card" role="listitem">
                <SiCss aria-hidden="true" className="tech-icon" style={{ color: "#1572B6" }} />
                <span>CSS</span>
              </article>
              <article className="tech-card" role="listitem">
                <SiPython aria-hidden="true" className="tech-icon" style={{ color: "#3776AB" }} />
                <span>Python</span>
              </article>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title">
          <div className="container">
            <span className="section-label fade-up">{t('work.label')}</span>
            <h2 id="work-title" className="section-title fade-up">{t('work.title')}</h2>
            <p className="section-subtitle fade-up delay-1">{t('work.subtitle')}</p>
            <div className="grid" role="list">
              <article className="card fade-up delay-1" role="listitem">
                <img
                  src="https://api.microlink.io/?url=https://solercrc.com&screenshot=true&meta=false&embed=screenshot.url"
                  alt="Soler CRC website screenshot"
                  className="card-screenshot"
                />
                <h3>Soler CRC</h3>
                <p>{t('work.soler')}</p>
                <a href="https://solercrc.com" target="_blank" rel="noopener noreferrer" className="card-link">
                  {t('work.viewProject')}
                </a>
              </article>
              <article className="card fade-up delay-2" role="listitem">
                <img
                  src="https://api.microlink.io/?url=https://awkwardselfconciousness.com&screenshot=true&meta=false&embed=screenshot.url"
                  alt="Awkward Self Consciousness website screenshot"
                  className="card-screenshot"
                />
                <h3>Awkward Self Consciousness</h3>
                <p>{t('work.awkward')}</p>
                <a href="https://awkwardselfconciousness.com" target="_blank" rel="noopener noreferrer" className="card-link">
                  {t('work.viewProject')}
                </a>
              </article>
              <article className="card fade-up delay-3" role="listitem">
                <img
                  src="https://api.microlink.io/?url=https://vitalcarecr.com&screenshot=true&meta=false&embed=screenshot.url"
                  alt="VitalCare CR website screenshot"
                  className="card-screenshot"
                />
                <h3>VitalCare CR</h3>
                <p>{t('work.vitalcare')}</p>
                <a href="https://vitalcarecr.com" target="_blank" rel="noopener noreferrer" className="card-link">
                  {t('work.viewProject')}
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" aria-labelledby="pricing-title">
          <div className="container">
            <span className="section-label fade-up">{t('pricing.label')}</span>
            <h2 id="pricing-title" className="section-title fade-up">{t('pricing.title')}</h2>
            <p className="section-subtitle fade-up delay-1">{t('pricing.subtitle')}</p>
            <div className="grid" role="list">
              <article className="card fade-up delay-1" role="listitem">
                <h3>{t('pricing.starter.name')}</h3>
                <div className="price">$300</div>
                <p>{t('pricing.starterDesc')}</p>
              </article>
              <article className="card fade-up delay-2" role="listitem">
                <h3>{t('pricing.business.name')}</h3>
                <div className="price">$850</div>
                <p>{t('pricing.businessDesc')}</p>
              </article>
              <article className="card fade-up delay-3" role="listitem">
                <h3>{t('pricing.custom.name')}</h3>
                <div className="price">{t('pricing.customPrice')}</div>
                <p>{t('pricing.customDesc')}</p>
              </article>
            </div>
          </div>
        </section>

      </main>

      <footer id="contact" aria-labelledby="contact-title">
        <div className="container fade-up">
          <span className="section-label">{t('contact.label')}</span>
          <h2 id="contact-title" className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
          <a className="button" href="mailto:hello@yourstudio.com">
            {t('contact.cta')}
          </a>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} ByteClub Dev. {t('contact.copy')}
          </p>
        </div>
      </footer>
    </>
  )
}