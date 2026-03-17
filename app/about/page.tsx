"use client";

export default function AboutPage() {
  return (
    <>
      {/* NAV (match main site) */}
      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">
            <div className="logo-bubbles">
              <span style={{ width: 6, height: 6, opacity: 0.5 }}></span>
              <span style={{ width: 9, height: 9, opacity: 0.75 }}></span>
              <span style={{ width: 7, height: 7 }}></span>
              <span style={{ width: 5, height: 5, opacity: 0.6 }}></span>
            </div>
            <div className="logo-text">
              <span className="claim">CLAIM</span> <span className="dive">DIVE</span>
            </div>
          </a>
          <div className="nav-links">
            <div className="nav-item">
              Our Services <span className="caret"></span>
              <div className="dropdown">
                <a href="/#services">Insurance Investigations</a>
                <a href="/#services">Asset Searches</a>
                <a href="/#services">Criminal Background</a>
                <a href="/#services">Civil Background</a>
                <a href="/#services">Social Media Searches</a>
                <a href="/#services">Skip Trace</a>
                <a href="/#services">Accident Investigations</a>
              </div>
            </div>
            <a href="/about" className="nav-item">
              About
            </a>
            <a href="/contact" className="nav-item" style={{ textDecoration: "none" }}>
              Contact
            </a>
            <a href="/contact" className="nav-cta">
              Place Order →
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="section-tag">About Us</span>
          <h1 className="section-title">Built for Claims &amp; Litigation Teams</h1>
          <p className="section-sub">
            Claim Dive is a California-based insurance investigations and litigation support firm
            built for personal injury law firms and insurance carriers who need answers — fast,
            defensible, and ready for the real-world pace of claims and cases.
          </p>
        </div>
      </section>

      {/* ABOUT BODY */}
      <section>
        <div className="section-inner about-grid">
          <div className="about-copy">
            <h2>Who We Are</h2>
            <p>
              Our team brings deep experience supporting some of the nation&apos;s largest law firms
              and insurance carriers. We have a thorough understanding of the legal and litigation
              support industries, and we know what it takes to produce investigation results that
              hold up — from claims history research and asset searches to coverage discovery and
              corporate ownership analysis.
            </p>
            <p>
              We don&apos;t just pull data. We build original, attorney-ready reports that give your
              team the intelligence it needs to move cases and claims forward with confidence.
            </p>
            <p>
              Claim Dive operates with a lean, compliance-first approach — fully licensed,
              rigorously sourced, and focused entirely on delivering results that matter to
              litigation and claim outcomes.
            </p>
          </div>
          <aside className="about-side">
            <div className="about-card">
              <div className="about-card-label">What We Stand For</div>
              <ul>
                <li>
                  <strong>Defensible Results</strong>
                  <span>
                    Reporting built to withstand scrutiny from opposing counsel, carriers, and
                    courts.
                  </span>
                </li>
                <li>
                  <strong>Speed with Substance</strong>
                  <span>
                    Fast turnaround grounded in disciplined research, not generic data dumps.
                  </span>
                </li>
                <li>
                  <strong>Compliance-First</strong>
                  <span>
                    California-licensed investigations with a sourcing approach aligned to how
                    claims and litigation actually work.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* FOOTER STRIP (simple) */}
      <footer>
        <div className="footer-strip">
          <p>© 2025 Claim Dive LLC. All rights reserved.</p>
          <p>
            <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a>
          </p>
        </div>
      </footer>

      <style jsx global>{`
        :root {
          --navy: #0a1628;
          --blue: #1a6fd4;
          --blue-light: #2d8aee;
          --blue-pale: #e8f2fc;
          --bubble: #4aacf5;
          --white: #ffffff;
          --gray-50: #f7f9fc;
          --gray-100: #eef1f6;
          --gray-400: #8896ae;
          --gray-600: #4a5568;
          --gray-800: #1e2a3a;
        }

        body {
          font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          color: var(--gray-800);
          background: var(--white);
          overflow-x: hidden;
        }

        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.97);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--gray-100);
          height: 102px;
          display: flex;
          align-items: center;
        }
        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .logo-bubbles {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          margin-bottom: 2px;
        }
        .logo-bubbles span {
          display: block;
          border-radius: 50%;
          background: var(--bubble);
          opacity: 0.85;
        }
        .logo-text {
          font-size: 26px;
          font-weight: 700;
          letter-spacing: -0.3px;
        }
        .logo-text .claim {
          color: var(--navy);
        }
        .logo-text .dive {
          color: var(--blue);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-item {
          position: relative;
          padding: 12px 20px;
          font-size: 16px;
          font-weight: 500;
          color: var(--gray-600);
          cursor: pointer;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
        }
        .nav-item:hover {
          color: var(--blue);
          background: var(--blue-pale);
        }
        .nav-item .caret {
          width: 10px;
          height: 10px;
          border-right: 2px solid currentColor;
          border-bottom: 2px solid currentColor;
          transform: rotate(45deg) translate(-1px, -2px);
          display: inline-block;
        }
        .dropdown {
          display: none;
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          background: white;
          border: 1px solid var(--gray-100);
          border-radius: 12px;
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
          padding: 8px;
          min-width: 220px;
          z-index: 200;
        }
        .nav-item:hover .dropdown {
          display: block;
        }
        .dropdown a {
          display: block;
          padding: 10px 14px;
          font-size: 14px;
          color: var(--gray-600);
          text-decoration: none;
          border-radius: 8px;
          transition: background 0.15s, color 0.15s;
        }
        .dropdown a:hover {
          background: var(--blue-pale);
          color: var(--blue);
        }
        .nav-cta {
          background: var(--blue);
          color: white !important;
          padding: 10px 22px !important;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14.5px;
          transition: background 0.2s, transform 0.15s;
          text-decoration: none;
          margin-left: 8px;
        }
        .nav-cta:hover {
          background: var(--blue-light);
          transform: translateY(-1px);
        }

        .about-hero {
          padding-top: 102px;
          background: linear-gradient(145deg, var(--navy) 0%, #0d2545 55%, #0f3060 100%);
        }
        .about-hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 32px 56px;
        }
        .section-tag {
          display: inline-block;
          background: var(--blue-pale);
          color: var(--blue);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 14px;
        }
        .section-title {
          font-family: "Playfair Display", serif;
          font-size: clamp(32px, 3.5vw, 46px);
          font-weight: 700;
          line-height: 1.2;
          color: white;
          margin-bottom: 14px;
        }
        .section-sub {
          font-size: 16.5px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.72);
          max-width: 640px;
          margin-bottom: 0;
        }

        section {
          padding: 72px 32px;
        }
        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .about-grid {
          display: grid;
          grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
          gap: 56px;
          align-items: flex-start;
        }
        .about-copy h2 {
          font-family: "Playfair Display", serif;
          font-size: 26px;
          color: var(--navy);
          margin-bottom: 16px;
        }
        .about-copy p {
          font-size: 16px;
          line-height: 1.7;
          color: var(--gray-600);
          margin-bottom: 16px;
        }
        .about-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .about-card {
          background: var(--gray-50);
          border-radius: 16px;
          border: 1px solid var(--gray-100);
          padding: 28px 24px;
        }
        .about-card-label {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gray-400);
          font-weight: 700;
          margin-bottom: 18px;
        }
        .about-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .about-card li strong {
          display: block;
          font-size: 14px;
          color: var(--navy);
          margin-bottom: 2px;
        }
        .about-card li span {
          font-size: 14px;
          color: var(--gray-600);
          line-height: 1.6;
        }

        footer {
          background: var(--white);
          border-top: 1px solid var(--gray-100);
        }
        .footer-strip {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 32px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          font-size: 13px;
          color: var(--gray-400);
        }
        .footer-strip a {
          color: var(--blue);
          text-decoration: none;
        }
        .footer-strip a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 700px) {
          nav {
            height: auto;
          }
          .nav-inner {
            padding: 12px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .about-hero-inner {
            padding: 72px 20px 44px;
          }
          section {
            padding: 56px 20px;
          }
        }
      `}</style>
    </>
  );
}

