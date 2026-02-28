export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav" role="navigation" aria-label="Main navigation">
        <div className="container nav-inner">
          <a href="/" className="logo" aria-label="Studio home">STUDIO</a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="container fade-up">
          <h1>
            We design &amp; build<br />
            modern websites
          </h1>
          <p>
            High-performance web design for brands that want to stand out online.
          </p>
          <a href="#contact" className="button">Start a project</a>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" aria-labelledby="work-title">
        <div className="container">
          <h2 id="work-title" className="section-title fade-up">Selected Work</h2>
          <p className="section-subtitle fade-up delay-1">
            A few examples of websites and products we&apos;ve built.
          </p>
          <div className="grid" role="list">
            <article className="card fade-up delay-1" role="listitem">
              <h3>Project One</h3>
              <p>Landing page &amp; branding</p>
            </article>
            <article className="card fade-up delay-2" role="listitem">
              <h3>Project Two</h3>
              <p>Business website</p>
            </article>
            <article className="card fade-up delay-3" role="listitem">
              <h3>Project Three</h3>
              <p>Web app UI</p>
            </article>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" aria-labelledby="pricing-title">
        <div className="container">
          <h2 id="pricing-title" className="section-title fade-up">Pricing</h2>
          <p className="section-subtitle fade-up delay-1">
            Simple packages. Transparent pricing.
          </p>
          <div className="grid" role="list">
            <article className="card fade-up delay-1" role="listitem">
              <h3>Starter</h3>
              <div className="price" aria-label="Price: $499">$499</div>
              <p>Single-page website</p>
            </article>
            <article className="card fade-up delay-2" role="listitem">
              <h3>Business</h3>
              <div className="price" aria-label="Price: $999">$999</div>
              <p>Multi-page website</p>
            </article>
            <article className="card fade-up delay-3" role="listitem">
              <h3>Custom</h3>
              <div className="price" aria-label="Price: Contact us">Let&apos;s talk</div>
              <p>Tailored solution</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" aria-labelledby="contact-title">
        <div className="container fade-up">
          <h2 id="contact-title" className="section-title">Let&apos;s work together</h2>
          <p className="section-subtitle">
            Tell us about your project and we&apos;ll get back to you.
          </p>
          <a
            className="button"
            href="mailto:hello@yourstudio.com"
            aria-label="Send us an email to start your project"
          >
            Contact us
          </a>
        </div>
      </section>
    </>
  )
}
</section>
  <section className="tech-stack">
  <div className="container">
    <h2>Technologies we work with</h2>

    <div className="tech-grid">
      <div className="tech-card">
        ⚡
        <span>Vercel</span>
      </div>

      <div className="tech-card">
        🟢
        <span>Supabase</span>
      </div>

      <div className="tech-card">
        📄
        <span>HTML</span>
      </div>

      <div className="tech-card">
        ✨
        <span>JavaScript</span>
      </div>

      <div className="tech-card">
        🎨
        <span>CSS</span>
      </div>
    </div>
  </div>
</section>
