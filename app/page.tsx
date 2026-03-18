"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const container = document.getElementById("bubblesContainer");
    if (!container) return;

    // Clear existing bubbles (in case of hot reload)
    container.innerHTML = "";

    for (let i = 0; i < 18; i++) {
      const b = document.createElement("div");
      b.className = "bubble-anim";
      const size = 8 + Math.random() * 40;
      b.style.cssText = `
        width:${size}px; height:${size}px;
        left:${Math.random() * 100}%;
        animation-duration:${8 + Math.random() * 14}s;
        animation-delay:${-Math.random() * 16}s;
      `;
      container.appendChild(b);
    }
  }, []);

  return (
    <>
      {/* NAV */}
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
      <section className="hero">
        <div className="bubbles-bg" id="bubblesContainer"></div>
        <div className="hero-inner">
          <div>
            <div className="hero-badge fade-up">
              <span className="dot"></span> Trusted by Law Firms &amp; Insurance Carriers
            </div>
            <h1 className="fade-up delay-1">
              Dive Deeper Into <em>Claim Intelligence</em>
            </h1>
            <p className="hero-sub fade-up delay-2">
              Fast, reliable investigative services for law firms and insurance carriers. We
              surface the information that moves your cases forward.
            </p>
            <div className="hero-btns fade-up delay-3">
              <a href="/contact" className="btn-primary">
                Place an Order
              </a>
              <a href="/#services" className="btn-ghost">
                View Our Services
              </a>
            </div>
            <div className="hero-stats fade-up delay-4">
              <div className="stat">
                <div className="stat-num">24hr</div>
                <div className="stat-label">Avg. Turnaround</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.15)" }}></div>
              <div className="stat">
                <div className="stat-num">7</div>
                <div className="stat-label">Core Services</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.15)" }}></div>
              <div className="stat">
                <div className="stat-num">CA</div>
                <div className="stat-label">Licensed Investigators</div>
              </div>
            </div>
          </div>
          <div className="hero-panel fade-up delay-2">
            <h3>🔍 Our Investigations</h3>
            <div>
              <span className="service-chip">
                <span className="chip-icon">🛡️</span> Insurance Investigations
              </span>
              <span className="service-chip">
                <span className="chip-icon">🏦</span> Asset Searches
              </span>
              <span className="service-chip">
                <span className="chip-icon">📋</span> Criminal Background
              </span>
              <span className="service-chip">
                <span className="chip-icon">⚖️</span> Civil Background
              </span>
              <span className="service-chip">
                <span className="chip-icon">📱</span> Social Media Searches
              </span>
              <span className="service-chip">
                <span className="chip-icon">📍</span> Skip Trace
              </span>
              <span className="service-chip">
                <span className="chip-icon">🚗</span> Accident Investigations
              </span>
            </div>
            <div className="turnaround">
              <span className="turnaround-icon">⚡</span>
              <div className="turnaround-text">
                <strong>Results in Hours, Not Days.</strong> Most orders delivered within 24–48
                hours.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-inner">
          <div className="trust-item">
            <span className="icon">✅</span>
            <span>
              <strong>Licensed Investigators</strong> on Staff
            </span>
          </div>
          <div className="trust-item">
            <span className="icon">⚡</span>
            <span>
              <strong>24–48 Hour</strong> Turnaround
            </span>
          </div>
          <div className="trust-item">
            <span className="icon">🔒</span>
            <span>
              <strong>Secure</strong> Data Handling
            </span>
          </div>
          <div className="trust-item">
            <span className="icon">📄</span>
            <span>
              <strong>Clear</strong> Actionable Reports
            </span>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ background: "var(--gray-50)" }}>
        <div className="section-inner">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title" id="services">
            Investigative Services Built
            <br />
            for Claims &amp; Litigation
          </h2>
          <p className="section-sub">
            At Claim Dive, we provide fast, reliable investigative and litigation support services
            for both plaintiff law firms and insurance organizations. From claim verification and
            SIU-focused insurance investigations to pre‑litigation and active case support, our team
            conducts targeted research and analysis to surface the facts that move files forward
            with confidence.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <div className="svc-icon">🛡️</div>
              <div className="svc-title">Insurance Investigations</div>
              <div className="svc-desc">
                Claim-level investigative support for carriers, TPAs, and defense teams — including
                coverage verification, prior claim and loss history, SIU-oriented red flag review,
                and policyholder background to help validate exposure and reserve decisions.
              </div>
            </div>
            <div className="service-card">
              <div className="svc-icon">🏦</div>
              <div className="svc-title">Asset Searches</div>
              <div className="svc-desc">
                Investigative research to identify assets, ownership interests, and financial
                exposure related to defendants, insureds, and other involved parties in both
                litigation and claims environments.
              </div>
            </div>
            <div className="service-card">
              <div className="svc-icon">📋</div>
              <div className="svc-title">Criminal Background</div>
              <div className="svc-desc">
                Thorough criminal history investigations providing litigation professionals with
                verified background information on relevant individuals.
              </div>
            </div>
            <div className="service-card">
              <div className="svc-icon">⚖️</div>
              <div className="svc-title">Civil Background</div>
              <div className="svc-desc">
                Civil litigation history research including prior lawsuits, judgments, and court
                involvement relevant to active cases and defendant evaluation.
              </div>
            </div>
            <div className="service-card">
              <div className="svc-icon">📱</div>
              <div className="svc-title">Social Media Searches</div>
              <div className="svc-desc">
                Documented social media investigations capturing publicly available activity that
                may be relevant to injury claims, liability, and case strategy.
              </div>
            </div>
            <div className="service-card">
              <div className="svc-icon">📍</div>
              <div className="svc-title">Skip Trace</div>
              <div className="svc-desc">
                Accurate locate investigations providing current address, phone, and contact
                information for individuals connected to active litigation matters.
              </div>
            </div>
            <div className="service-card">
              <div className="svc-icon">🚗</div>
              <div className="svc-title">Accident Investigations</div>
              <div className="svc-desc">
                Targeted fact development around incident circumstances, involved parties, vehicle
                ownership, and documentation to support both claim handling and litigation strategy
                in accident-related matters.
              </div>
            </div>
            <div
              className="service-card"
              style={{
                background: "linear-gradient(135deg,var(--navy),#0d2545)",
                borderColor: "transparent",
              }}
            >
              <div className="svc-icon" style={{ background: "rgba(255,255,255,0.1)" }}>
                ✨
              </div>
              <div className="svc-title" style={{ color: "white" }}>
                Custom Investigations
              </div>
              <div className="svc-desc" style={{ color: "rgba(255,255,255,0.65)" }}>
                Need something specific? Our investigators handle specialized research tailored to
                the unique needs of your case or firm.
              </div>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: 18,
                  color: "var(--bubble)",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Contact us →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-bg">
        <div className="section-inner">
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">Investigations Made Simple</h2>
          <p className="section-sub">
            From order submission to delivered report — a seamless process designed for the pace
            of active litigation.
          </p>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <div className="step-title">Submit Your Request</div>
              <div className="step-desc">
                Place your order online or send it via email. Provide subject details and the
                service needed.
              </div>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <div className="step-title">We Begin Investigating</div>
              <div className="step-desc">
                Our licensed investigators immediately begin targeted research using
                industry-leading tools.
              </div>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <div className="step-title">Report Delivered</div>
              <div className="step-desc">
                Receive a clear, actionable investigative report within 24–48 hours, delivered
                directly to you.
              </div>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <div className="step-title">Invoice Sent</div>
              <div className="step-desc">
                A clean invoice is automatically generated and sent upon delivery. Simple,
                transactional, no contracts.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <div className="section-inner">
          <div className="why-grid">
            <div>
              <span className="section-tag">Why Claim Dive</span>
              <h2 className="section-title" id="why">The Investigation Partner Law Firms Trust</h2>
              <p className="section-sub" style={{ marginBottom: 36 }}>
                We've built Claim Dive from the ground up for both plaintiff law firms and
                insurance professionals who need fast, reliable investigative intelligence across
                the life of a claim or case.
              </p>
              <div className="why-list">
                <div className="why-item">
                  <div className="why-icon">⚡</div>
                  <div>
                    <div className="why-title">Fastest Turnaround in the Industry</div>
                    <div className="why-desc">
                      Most investigations delivered within 24 hours. When your case moves fast, so
                      do we.
                    </div>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">🎯</div>
                  <div>
                    <div className="why-title">Built Exclusively for Legal Professionals</div>
                    <div className="why-desc">
                      Every report is formatted for litigation use. No fluff — just the actionable
                      intelligence your firm needs.
                    </div>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">🔒</div>
                  <div>
                    <div className="why-title">Licensed &amp; Compliant</div>
                    <div className="why-desc">
                      All investigations are conducted by licensed California investigators with
                      full regulatory compliance.
                    </div>
                  </div>
                </div>
                <div className="why-item">
                  <div className="why-icon">📋</div>
                  <div>
                    <div className="why-title">No Contracts. No Commitments.</div>
                    <div className="why-desc">
                      Fully transactional — order what you need, when you need it. Pay per report,
                      no monthly fees.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="why-visual">
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  marginBottom: 4,
                }}
              >
                At a Glance
              </div>
              <div className="metric-card">
                <div>
                  <div className="metric-label">Average Delivery</div>
                  <div className="metric-val">24 hrs</div>
                </div>
                <div className="metric-badge">Fast</div>
              </div>
              <div className="metric-card">
                <div>
                  <div className="metric-label">Services Offered</div>
                  <div className="metric-val">7+</div>
                </div>
                <div className="metric-badge">Full Suite</div>
              </div>
              <div className="metric-card">
                <div>
                  <div className="metric-label">Investigator License</div>
                  <div className="metric-val">CA Licensed</div>
                </div>
                <div className="metric-badge">Compliant</div>
              </div>
              <div className="metric-card">
                <div>
                  <div className="metric-label">Contracts Required</div>
                  <div className="metric-val">None</div>
                </div>
                <div className="metric-badge">Simple</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="cta-inner">
          <h2>Ready to Dive Deeper Into Your Case?</h2>
          <p>Submit your first investigation request today. Fast turnaround, clear reports, no commitments.</p>
          <div className="cta-btns">
            <a href="/contact" className="btn-white">
              Place an Order
            </a>
            <a
              href="/contact"
              className="btn-ghost"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 2,
                    marginRight: 4,
                  }}
                >
                  <span
                    style={{
                      display: "block",
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#4aacf5",
                      opacity: 0.5,
                    }}
                  ></span>
                  <span
                    style={{
                      display: "block",
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: "#4aacf5",
                      opacity: 0.75,
                    }}
                  ></span>
                  <span
                    style={{
                      display: "block",
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "#4aacf5",
                    }}
                  ></span>
                </div>
                <div className="footer-logo-text">
                  <span className="claim">CLAIM</span> <span className="dive">DIVE</span>
                </div>
              </div>
              <p>
                Fast, reliable investigative and litigation support services for law firms and
                insurance carriers. Investigations made simple.
              </p>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="/#services">Insurance Investigations</a>
              <a href="/#services">Asset Searches</a>
              <a href="/#services">Criminal Background</a>
              <a href="/#services">Civil Background</a>
              <a href="/#services">Social Media Searches</a>
              <a href="/#services">Skip Trace</a>
              <a href="/#services">Accident Investigations</a>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <a href="/about">About Us</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-col">
              <h4>Get Started</h4>
              <a href="/contact">Place an Order</a>
              <a href="/contact">Contact Us</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Claim Dive LLC. All rights reserved.</p>
            <p>Privacy Policy · Terms of Service</p>
          </div>
        </div>
      </footer>

      {/* GLOBAL STYLES FOR LANDING PAGE */}
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
          --accent: #0091ff;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "DM Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          color: var(--gray-800);
          background: var(--white);
          overflow-x: hidden;
        }

        /* NAV */
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

        /* HERO */
        .hero {
          min-height: 100vh;
          background: linear-gradient(145deg, var(--navy) 0%, #0d2545 55%, #0f3060 100%);
          display: flex;
          align-items: center;
          padding-top: 68px;
          position: relative;
          overflow: hidden;
        }

        .bubbles-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .bubble-anim {
          position: absolute;
          border-radius: 50%;
          background: rgba(74, 172, 245, 0.12);
          animation: rise linear infinite;
        }
        @keyframes rise {
          0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120px) scale(1.1);
            opacity: 0;
          }
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 80px 32px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 100px;
          padding: 6px 14px 6px 8px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 24px;
        }
        .hero-badge .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4aff9e;
        }
        .hero h1 {
          font-family: "Playfair Display", serif;
          font-size: clamp(38px, 4.5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          color: white;
          margin-bottom: 20px;
          letter-spacing: -1px;
        }
        .hero h1 em {
          color: var(--bubble);
          font-style: normal;
        }
        .hero-sub {
          font-size: 17px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.72);
          max-width: 460px;
          margin-bottom: 36px;
        }
        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .btn-primary {
          background: var(--blue);
          color: white;
          padding: 14px 28px;
          border-radius: 9px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(26, 111, 212, 0.4);
        }
        .btn-primary:hover {
          background: var(--blue-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(26, 111, 212, 0.5);
        }
        .btn-ghost {
          color: white;
          padding: 14px 28px;
          border-radius: 9px;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-ghost:hover {
          border-color: white;
          background: rgba(255, 255, 255, 0.08);
        }

        .hero-stats {
          display: flex;
          gap: 28px;
          margin-top: 44px;
          flex-wrap: wrap;
        }
        .stat-num {
          font-size: 28px;
          font-weight: 700;
          color: white;
          line-height: 1;
        }
        .stat-label {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.5);
          margin-top: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-panel {
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 20px;
          padding: 32px;
          backdrop-filter: blur(16px);
        }
        .hero-panel h3 {
          color: white;
          font-size: 17px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .service-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 10px 14px;
          color: white;
          font-size: 14px;
          margin: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: background 0.2s;
          cursor: default;
        }
        .service-chip:hover {
          background: rgba(74, 172, 245, 0.2);
        }
        .chip-icon {
          font-size: 16px;
        }

        .turnaround {
          margin-top: 20px;
          background: rgba(74, 172, 245, 0.15);
          border-radius: 10px;
          padding: 14px 16px;
          border: 1px solid rgba(74, 172, 245, 0.3);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .turnaround-icon {
          font-size: 20px;
        }
        .turnaround-text {
          color: rgba(255, 255, 255, 0.9);
          font-size: 13.5px;
        }
        .turnaround-text strong {
          color: white;
        }

        /* TRUST BAR */
        .trust-bar {
          background: var(--gray-50);
          border-bottom: 1px solid var(--gray-100);
          padding: 20px 32px;
        }
        .trust-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--gray-600);
        }
        .trust-item .icon {
          font-size: 20px;
        }
        .trust-item strong {
          color: var(--gray-800);
          font-weight: 600;
        }

        /* SECTION SHARED */
        section {
          padding: 96px 32px;
        }
        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
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
          font-size: clamp(28px, 3vw, 40px);
          font-weight: 700;
          line-height: 1.2;
          color: var(--navy);
          margin-bottom: 14px;
        }
        .section-sub {
          font-size: 16.5px;
          line-height: 1.7;
          color: var(--gray-600);
          max-width: 600px;
          margin-bottom: 56px;
        }

        /* SERVICES */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        .service-card {
          background: white;
          border: 1.5px solid var(--gray-100);
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--blue), var(--bubble));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s;
        }
        .service-card:hover {
          border-color: var(--blue);
          box-shadow: 0 8px 32px rgba(26, 111, 212, 0.12);
          transform: translateY(-3px);
        }
        .service-card:hover::before {
          transform: scaleX(1);
        }
        .svc-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--blue-pale);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin-bottom: 18px;
        }
        .svc-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .svc-desc {
          font-size: 14px;
          line-height: 1.65;
          color: var(--gray-600);
        }

        /* HOW IT WORKS */
        .how-bg {
          background: var(--navy);
        }
        .how-bg .section-title {
          color: white;
        }
        .how-bg .section-sub {
          color: rgba(255, 255, 255, 0.6);
        }
        .how-bg .section-tag {
          background: rgba(74, 172, 245, 0.2);
          color: var(--bubble);
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          position: relative;
        }
        .steps::before {
          content: "";
          position: absolute;
          top: 36px;
          left: 12%;
          right: 12%;
          height: 2px;
          background: linear-gradient(90deg, var(--blue) 0%, var(--bubble) 100%);
          opacity: 0.3;
        }
        .step {
          text-align: center;
          position: relative;
        }
        .step-num {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(26, 111, 212, 0.2);
          border: 2px solid rgba(26, 111, 212, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          color: var(--bubble);
          margin: 0 auto 20px;
          position: relative;
          z-index: 1;
        }
        .step-title {
          font-size: 15px;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }
        .step-desc {
          font-size: 13.5px;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.6;
        }

        /* WHY CHOOSE */
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .why-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .why-item {
          display: flex;
          gap: 16px;
        }
        .why-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--blue-pale);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .why-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 4px;
        }
        .why-desc {
          font-size: 14px;
          color: var(--gray-600);
          line-height: 1.6;
        }
        .why-visual {
          background: linear-gradient(135deg, var(--navy) 0%, #0d2545 100%);
          border-radius: 20px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .metric-card {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 12px;
          padding: 18px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .metric-label {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }
        .metric-val {
          font-size: 22px;
          font-weight: 700;
          color: white;
        }
        .metric-badge {
          font-size: 12px;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: 100px;
          background: rgba(74, 255, 158, 0.2);
          color: #4aff9e;
        }

        /* CTA BAND */
        .cta-band {
          background: linear-gradient(120deg, var(--blue) 0%, #0d60c5 100%);
          padding: 72px 32px;
        }
        .cta-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .cta-inner h2 {
          font-family: "Playfair Display", serif;
          font-size: clamp(28px, 3.5vw, 44px);
          color: white;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .cta-inner p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 17px;
          margin-bottom: 36px;
        }
        .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn-white {
          background: white;
          color: var(--blue);
          padding: 14px 32px;
          border-radius: 9px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: transform 0.15s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .btn-white:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        }

        /* FOOTER */
        footer {
          background: var(--navy);
          padding: 64px 32px 32px;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-brand p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.7;
          margin-top: 14px;
          max-width: 280px;
        }
        .footer-col h4 {
          color: white;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .footer-col a {
          display: block;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 10px;
          transition: color 0.2s;
        }
        .footer-col a:hover {
          color: white;
        }
        .footer-bottom {
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-bottom p {
          color: rgba(255, 255, 255, 0.35);
          font-size: 13px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-logo-text {
          font-size: 18px;
          font-weight: 700;
        }
        .footer-logo-text .claim {
          color: white;
        }
        .footer-logo-text .dive {
          color: var(--bubble);
        }

        /* ANIMATIONS */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-up {
          animation: fadeUp 0.7s ease both;
        }
        .delay-1 {
          animation-delay: 0.1s;
        }
        .delay-2 {
          animation-delay: 0.2s;
        }
        .delay-3 {
          animation-delay: 0.3s;
        }
        .delay-4 {
          animation-delay: 0.45s;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .why-grid {
            grid-template-columns: 1fr;
          }
          .footer-top {
            grid-template-columns: 1fr 1fr;
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
          .hero-inner {
            padding: 72px 20px 40px;
            grid-template-columns: 1fr;
            gap: 32px;
          }
          section {
            padding: 56px 20px;
          }
          .cta-band {
            padding: 56px 20px;
          }
          footer {
            padding: 48px 20px 24px;
          }
          .steps {
            grid-template-columns: 1fr 1fr;
          }
          .steps::before {
            display: none;
          }
          .footer-top {
            grid-template-columns: 1fr;
          }
          /* Simplify mobile: hide some secondary visuals */
          .hero-panel {
            margin-top: 8px;
          }
          .hero-stats,
          .trust-bar,
          .why-visual {
            display: none;
          }
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
