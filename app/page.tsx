"use client";
import Image from 'next/image'
import FadeUp from '@/app/components/FadeUp'
import ContactForm from "@/app/components/ContactForm";
import { useState } from "react";
import "@/i18n";
import { useTranslation } from "react-i18next";
import TechGrid from '@/app/components/TechGrid'
export default function Home() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <a href="#main-content" className="skip-link">
        {t("skip")}
      </a>
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          <a
            href="/"
            className="logo"
            aria-label="ByteClub Dev home"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <img
              src="/logo.png"
              alt="ByteClub Dev"
              style={{ height: "36px", width: "auto" }}
            />
            ByteClub Dev
          </a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
            <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
            <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
          </button>

          <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <button
              onClick={() =>
                i18n.changeLanguage(
                  i18n.resolvedLanguage === "en" ? "es" : "en",
                )
              }
              style={{
                background: "none",
                border: "1px solid var(--color-border)",
                color: "var(--color-text-muted)",
                borderRadius: "6px",
                padding: "4px 10px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              {i18n.resolvedLanguage === "en" ? "ES" : "EN"}
            </button>
            <a href="#work" onClick={() => setMenuOpen(false)}>
              {t("nav.work")}
            </a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>
              {t("nav.pricing")}
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {t("nav.contact")}
            </a>
          </div>
        </div>
      </nav>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container FadeUp">
            <h1 id="hero-title">
              {t("hero.title")}
              <br />
              <em>{t("hero.emphasis")}</em> {t("hero.title2")}
            </h1>
            <p>{t("hero.subtitle")}</p>
            <a href="#contact" className="button">
              {t("hero.cta")}
            </a>
          </div>
        </section>

        {/* ── SERVICES SECTION ── */}
        <section className="services" aria-labelledby="services-title">
          <div className="container">
            <span className="section-label FadeUp">{t("services.label")}</span>
            <div className="services-layout">
              <div className="services-intro FadeUp">
                <h2 id="services-title" className="section-title">
                  {t("services.title")}
                </h2>
                <p className="section-subtitle" style={{ marginBottom: 0 }}>
                  {t("services.subtitle")}
                </p>
              </div>
              <div className="services-grid" role="list">
                <article className="service-card FadeUp delay-1" role="listitem">
                  <div className="service-card-top">
                    <span className="service-number">01</span>
                    <div className="service-icon-wrap" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="service-name">{t("services.web.name")}</h3>
                  <p className="service-desc">{t("services.web.desc")}</p>
                </article>

                <article className="service-card FadeUp delay-2" role="listitem">
                  <div className="service-card-top">
                    <span className="service-number">02</span>
                    <div className="service-icon-wrap" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="service-name">{t("services.branding.name")}</h3>
                  <p className="service-desc">{t("services.branding.desc")}</p>
                </article>

                <article className="service-card FadeUp delay-3" role="listitem">
                  <div className="service-card-top">
                    <span className="service-number">03</span>
                    <div className="service-icon-wrap" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="service-name">{t("services.marketing.name")}</h3>
                  <p className="service-desc">{t("services.marketing.desc")}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="work" aria-labelledby="work-title">
          <div className="container">
            <span className="section-label FadeUp">{t("work.label")}</span>
            <h2 id="work-title" className="section-title FadeUp">
              {t("work.title")}
            </h2>
            <p className="section-subtitle FadeUp delay-1">
              {t("work.subtitle")}
            </p>
            <div className="grid" role="list">
              <article className="card FadeUp delay-1" role="listitem">
                <Image
                  src="https://api.microlink.io/?url=https://solercrc.com&screenshot=true&meta=false&embed=screenshot.url"
                  alt="Soler CRC website screenshot"
                  className="card-screenshot"
                  width={600}
                  height={180}
                  loading="lazy"
                  unoptimized
                />
                <h3>Soler CRC</h3>
                <p>{t("work.soler")}</p>
                <a
                  href="https://solercrc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  {t("work.viewProject")}
                </a>
              </article>

              <article className="card FadeUp delay-2" role="listitem">
                <Image
                  src="https://api.microlink.io/?url=https://awkwardself-consciousness.com&screenshot=true&meta=false&embed=screenshot.url"
                  alt="Awkward Self Consciousness website screenshot"
                  className="card-screenshot"
                  width={600}
                  height={180}
                  loading="lazy"
                  unoptimized
                />
                <h3>Awkward Self Consciousness</h3>
                <p>{t("work.awkward")}</p>
                <a
                  href="https://awkwardself-consciousness.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  {t("work.viewProject")}
                </a>
              </article>

              <article className="card FadeUp delay-3" role="listitem">
                <Image
                  src="https://api.microlink.io/?url=https://vitalcarecr.com&screenshot=true&meta=false&embed=screenshot.url"
                  alt="VitalCare CR website screenshot"
                  className="card-screenshot"
                  width={600}
                  height={180}
                  loading="lazy"
                  unoptimized
                />
                <h3>VitalCare CR</h3>
                <p>{t("work.vitalcare")}</p>
                <a
                  href="https://vitalcarecr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  {t("work.viewProject")}
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="pricing" aria-labelledby="pricing-title">
          <div className="container">
            <span className="section-label FadeUp">{t("pricing.label")}</span>
            <h2 id="pricing-title" className="section-title FadeUp">
              {t("pricing.title")}
            </h2>
            <p className="section-subtitle FadeUp delay-1">
              {t("pricing.subtitle")}
            </p>
            <div className="grid" role="list">
              <article className="card FadeUp delay-1" role="listitem">
                <h3>{t("pricing.starter.name")}</h3>
                <div className="price">$300</div>
                <p>{t("pricing.starterDesc")}</p>
              </article>
              <article className="card FadeUp delay-2" role="listitem">
                <h3>{t("pricing.business.name")}</h3>
                <div className="price">$850</div>
                <p>{t("pricing.businessDesc")}</p>
              </article>
              <article className="card FadeUp delay-3" role="listitem">
                <h3>{t("pricing.custom.name")}</h3>
                <div className="price">{t("pricing.customPrice")}</div>
                <p>{t("pricing.customDesc")}</p>
              </article>
            </div>
          </div>
        </section>

          {/* TECH STACK */}
        <section className="tech-stack" aria-labelledby="tech-title">
          <div className="container">
            <FadeUp><h2 id="tech-title">{t("tech.title")}</h2></FadeUp>
            <FadeUp delay={150}><TechGrid /></FadeUp>
          </div>
        </section>
      </main>

      <footer id="contact" aria-labelledby="contact-title">
        <div className="container FadeUp">
          <span className="section-label">{t("contact.label")}</span>
          <h2 id="contact-title" className="section-title">
            {t("contact.title")}
          </h2>
          <p className="section-subtitle">{t("contact.subtitle")}</p>
          <ContactForm />
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} ByteClub Dev. {t("contact.copy")}
          </p>
        </div>
      </footer>
    </>
  );
}
