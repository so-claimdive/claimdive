"use client";

import { useState } from "react";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleInquiryChange = (value: string) => {
    setInquiryType(value);
    setErrors({});
    setSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};

    if (!inquiryType) {
      newErrors.inquiry = true;
    } else if (inquiryType === "order") {
      ["ord_name", "ord_email", "service_type", "bar_number", "request_info"].forEach((id) => {
        const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
        if (!el || !el.value.trim()) {
          newErrors[id] = true;
        }
      });
      const certify = document.getElementById("certify") as HTMLInputElement | null;
      if (!certify?.checked) {
        newErrors.certify = true;
      }
    } else {
      ["name", "email", "message"].forEach((id) => {
        const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null;
        if (!el || !el.value.trim()) {
          newErrors[id] = true;
        }
      });
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const showStandard = inquiryType && inquiryType !== "order";
  const showOrder = inquiryType === "order";

  return (
    <>
      {/* NAV (shared with home) */}
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
      <section className="page-hero">
        <div className="hero-bubbles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="hero-content">
          <div className="hero-eyebrow">Get in Touch</div>
          <h1 className="hero-title">
            Let&apos;s Talk About
            <br />
            <em>Your Investigation</em>
          </h1>
          <p className="hero-subtitle">
            Have a question, need a quote, or ready to place an order? Fill out the form and our
            team will get back to you within one business day.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <div className="main-wrap">
        <div className="form-card">
          {!submitted && (
            <>
              <h2 className="form-card-title">Send Us a Message</h2>
              <p className="form-card-sub">
                All fields marked with <span style={{ color: "var(--blue)", fontWeight: 700 }}>*</span>{" "}
                are required.
              </p>

              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                {/* Inquiry Type */}
                <div className="form-group">
                  <label htmlFor="inquiry">
                    Inquiry Type <span className="req">*</span>
                  </label>
                  <div className="select-wrap">
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={inquiryType}
                      onChange={(e) => handleInquiryChange(e.target.value)}
                      className={errors.inquiry ? "field-error" : ""}
                    >
                      <option value="" disabled>
                        Select a category…
                      </option>
                      <option value="general">General Question</option>
                      <option value="billing">Billing</option>
                      <option value="order">Order Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Standard fields */}
                <div
                  id="standardFields"
                  className={`field-section ${showStandard ? "visible" : "hidden"}`}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Jane Smith"
                        className={errors.name ? "field-error" : ""}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="jane@example.com"
                        className={errors.email ? "field-error" : ""}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your question…"
                      className={errors.message ? "field-error" : ""}
                    ></textarea>
                  </div>
                </div>

                {/* Order fields */}
                <div
                  id="orderFields"
                  className={`field-section ${showOrder ? "visible" : "hidden"}`}
                >
                  <div className="order-banner">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Please complete all fields below. Your request will be reviewed by our team
                    before processing.
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="ord_name">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="ord_name"
                        name="ord_name"
                        placeholder="Jane Smith"
                        className={errors.ord_name ? "field-error" : ""}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="ord_email">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="ord_email"
                        name="ord_email"
                        placeholder="jane@example.com"
                        className={errors.ord_email ? "field-error" : ""}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="service_type">
                        Service Type <span className="req">*</span>
                      </label>
                      <div className="select-wrap">
                        <select
                          id="service_type"
                          name="service_type"
                          className={errors.service_type ? "field-error" : ""}
                        >
                          <option value="" disabled>
                            Select a service…
                          </option>
                          <option value="insurance">Insurance Investigations</option>
                          <option value="asset">Asset Searches</option>
                          <option value="criminal_bg">Criminal Background</option>
                          <option value="civil_bg">Civil Background</option>
                          <option value="social_media">Social Media Searches</option>
                          <option value="skip_trace">Skip Trace</option>
                          <option value="accident">Accident Investigations</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="bar_number">
                        Law Firm / Bar Number <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="bar_number"
                        name="bar_number"
                        placeholder="e.g. Smith & Assoc. / Bar #123456"
                        className={errors.bar_number ? "field-error" : ""}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="request_info">
                      Request Information <span className="req">*</span>
                    </label>
                    <textarea
                      id="request_info"
                      name="request_info"
                      style={{ minHeight: 160, lineHeight: 1.6 }}
                      placeholder="Provide all relevant details — subject information, relevant dates, jurisdiction, and any specifics that will help us complete your order accurately…"
                      className={errors.request_info ? "field-error" : ""}
                    ></textarea>
                  </div>

                  <div className={`cert-wrap ${errors.certify ? "cert-error" : ""}`} id="certWrap">
                    <label className="cert-label" htmlFor="certify">
                      <input type="checkbox" id="certify" name="certify" />
                      <span className="cert-box"></span>
                      <span className="cert-text">
                        By submitting this request, I certify that I am an attorney, law firm
                        employee, insurance professional, or other authorized party with a lawful
                        permissible purpose to obtain the requested information, and that I will not
                        use it for any unlawful purpose. <span className="req">*</span>
                      </span>
                    </label>
                  </div>
                </div>

                {inquiryType && (
                  <button type="submit" className="submit-btn" id="submitBtn">
                    {inquiryType === "order" ? "Submit Order Request" : "Send Message"}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                )}
              </form>
            </>
          )}

          {submitted && (
            <div className="success-msg" id="successMsg" style={{ display: "block" }}>
              <div className="check-circle">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Message Received!</h3>
              <p>
                Thanks for reaching out. A member of the Claim Dive team will follow up with you
                within one business day.
              </p>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="info-card">
            <div className="info-card-title">Contact Details</div>
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="info-label">Billing</div>
                <div className="info-value">
                  <a
                    href="mailto:billing@claimdive.com"
                    style={{ color: "var(--blue)", textDecoration: "none" }}
                  >
                    billing@claimdive.com
                  </a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="info-label">General</div>
                <div className="info-value">
                  <a
                    href="mailto:info@claimdive.com"
                    style={{ color: "var(--blue)", textDecoration: "none" }}
                  >
                    info@claimdive.com
                  </a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="info-label">Orders</div>
                <div className="info-value">
                  <a
                    href="mailto:order@claimdive.com"
                    style={{ color: "var(--blue)", textDecoration: "none" }}
                  >
                    order@claimdive.com
                  </a>
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="info-label">Response Time</div>
                <div className="info-value">Within 1 business day</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="info-label">Based In</div>
                <div className="info-value">California</div>
              </div>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-card-title">What We Investigate</div>
            <p>
              From insurance fraud to background checks — our team handles a wide range of claim
              types with speed and accuracy.
            </p>
            <div className="highlight-pills">
              <span className="pill">Insurance Claims</span>
              <span className="pill">Asset Searches</span>
              <span className="pill">Civil Background</span>
              <span className="pill">Criminal Background</span>
              <span className="pill">Skip Tracing</span>
            </div>
          </div>
        </aside>
      </div>

      <footer>
        <div className="footer-strip">
          <p>© 2025 Claim Dive. All rights reserved.</p>
          <p>
            <a href="/privacy">Privacy Policy</a> &middot; <a href="/terms">Terms of Service</a>
          </p>
        </div>
      </footer>

      {/* PAGE-SPECIFIC STYLES */}
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

        /* REUSE NAV FROM HOME */
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

        /* HERO */
        .page-hero {
          padding-top: 102px;
          background: linear-gradient(160deg, var(--navy) 0%, #0d2045 55%, #0f2d5e 100%);
          position: relative;
          overflow: hidden;
        }
        .page-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 70% 60% at 80% 40%,
            rgba(74, 172, 245, 0.13) 0%,
            transparent 70%
          );
          pointer-events: none;
        }
        .hero-bubbles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }
        .hero-bubbles span {
          position: absolute;
          border-radius: 50%;
          background: var(--bubble);
          opacity: 0.07;
          animation: floatBubble 8s ease-in-out infinite;
        }
        .hero-bubbles span:nth-child(1) {
          width: 220px;
          height: 220px;
          top: -60px;
          right: 12%;
          animation-delay: 0s;
        }
        .hero-bubbles span:nth-child(2) {
          width: 130px;
          height: 130px;
          top: 30%;
          right: 5%;
          animation-delay: 1.5s;
        }
        .hero-bubbles span:nth-child(3) {
          width: 80px;
          height: 80px;
          top: 60%;
          right: 20%;
          animation-delay: 3s;
        }
        .hero-bubbles span:nth-child(4) {
          width: 55px;
          height: 55px;
          top: 10%;
          left: 5%;
          animation-delay: 2s;
        }
        @keyframes floatBubble {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        .hero-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 40px 80px;
          position: relative;
          z-index: 1;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(74, 172, 245, 0.15);
          border: 1px solid rgba(74, 172, 245, 0.3);
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.06em;
          color: var(--bubble);
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .hero-eyebrow::before {
          content: "";
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--bubble);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.7);
          }
        }
        .hero-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(38px, 5vw, 58px);
          font-weight: 800;
          color: var(--white);
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin-bottom: 18px;
        }
        .hero-title em {
          font-style: normal;
          color: var(--bubble);
        }
        .hero-subtitle {
          font-size: 18px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
          max-width: 520px;
          line-height: 1.65;
        }

        /* MAIN LAYOUT */
        .main-wrap {
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 40px 100px;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 64px;
          align-items: flex-start;
        }

        /* FORM CARD */
        .form-card {
          background: var(--white);
          border: 1px solid var(--gray-100);
          border-radius: 20px;
          padding: 48px;
          box-shadow: 0 4px 40px rgba(10, 22, 40, 0.07);
        }
        .form-card-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 8px;
        }
        .form-card-sub {
          font-size: 15px;
          color: var(--gray-400);
          margin-bottom: 36px;
          line-height: 1.5;
        }
        .form-group {
          margin-bottom: 24px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-600);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        label .req {
          color: var(--blue);
          margin-left: 2px;
        }
        input[type="text"],
        input[type="email"],
        select,
        textarea {
          width: 100%;
          padding: 14px 18px;
          font-family: "DM Sans", sans-serif;
          font-size: 15px;
          color: var(--gray-800);
          background: var(--gray-50);
          border: 1.5px solid var(--gray-100);
          border-radius: 10px;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          -webkit-appearance: none;
          appearance: none;
        }
        input[type="text"]:focus,
        input[type="email"]:focus,
        select:focus,
        textarea:focus {
          border-color: var(--blue);
          background: var(--white);
          box-shadow: 0 0 0 4px rgba(26, 111, 212, 0.1);
        }
        input::placeholder,
        textarea::placeholder {
          color: var(--gray-400);
        }
        .select-wrap {
          position: relative;
        }
        .select-wrap::after {
          content: "";
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 6px solid var(--gray-400);
          pointer-events: none;
        }
        textarea {
          resize: vertical;
          min-height: 130px;
          line-height: 1.6;
        }

        .field-section {
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
        }
        .field-section.hidden {
          max-height: 0;
          opacity: 0;
          pointer-events: none;
        }
        .field-section.visible {
          max-height: 2000px;
          opacity: 1;
          pointer-events: auto;
        }

        .order-banner {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--blue-pale);
          border: 1px solid rgba(26, 111, 212, 0.2);
          border-radius: 12px;
          padding: 14px 18px;
          margin-bottom: 24px;
          font-size: 14px;
          color: var(--blue);
          font-weight: 500;
          line-height: 1.5;
        }
        .order-banner svg {
          flex-shrink: 0;
        }

        .cert-wrap {
          background: var(--gray-50);
          border: 1.5px solid var(--gray-100);
          border-radius: 12px;
          padding: 18px 20px;
          margin-bottom: 24px;
          transition: border-color 0.2s;
        }
        .cert-label {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          cursor: pointer;
          text-transform: none;
          font-size: 14px;
          font-weight: 400;
          color: var(--gray-600);
          letter-spacing: 0;
          margin-bottom: 0;
        }
        .cert-label input[type="checkbox"] {
          position: absolute;
          opacity: 0;
          width: 0;
          height: 0;
        }
        .cert-box {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border: 2px solid var(--gray-400);
          border-radius: 5px;
          background: var(--white);
          margin-top: 1px;
          transition: border-color 0.2s, background 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cert-label input[type="checkbox"]:checked ~ .cert-box {
          background: var(--blue);
          border-color: var(--blue);
        }
        .cert-label input[type="checkbox"]:checked ~ .cert-box::after {
          content: "";
          display: block;
          width: 5px;
          height: 9px;
          border: 2px solid white;
          border-top: none;
          border-left: none;
          transform: rotate(45deg) translate(-1px, -1px);
        }
        .cert-text {
          line-height: 1.6;
        }
        .cert-text .req {
          color: var(--blue);
          font-weight: 700;
        }

        .field-error {
          border-color: #e53e3e !important;
        }
        .cert-error {
          border-color: #e53e3e !important;
        }

        .submit-btn {
          width: 100%;
          padding: 16px 32px;
          background: var(--blue);
          color: var(--white);
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
          margin-top: 8px;
          letter-spacing: 0.01em;
        }
        .submit-btn:hover {
          background: var(--blue-light);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(26, 111, 212, 0.28);
        }
        .submit-btn:active {
          transform: translateY(0);
        }

        .success-msg {
          text-align: center;
          padding: 40px 20px;
        }
        .success-msg .check-circle {
          width: 64px;
          height: 64px;
          background: var(--blue-pale);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .success-msg h3 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--navy);
          margin-bottom: 10px;
        }
        .success-msg p {
          font-size: 15px;
          color: var(--gray-400);
          line-height: 1.6;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .info-card {
          background: var(--gray-50);
          border: 1px solid var(--gray-100);
          border-radius: 16px;
          padding: 32px;
        }
        .info-card-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 20px;
        }
        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }
        .info-item:last-child {
          margin-bottom: 0;
        }
        .info-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          background: var(--blue-pale);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info-label {
          font-size: 13px;
          font-weight: 600;
          color: var(--gray-400);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }
        .info-value {
          font-size: 15px;
          font-weight: 500;
          color: var(--gray-800);
        }
        .highlight-card {
          background: linear-gradient(135deg, var(--navy) 0%, #0d2045 100%);
          border-radius: 16px;
          padding: 32px;
          position: relative;
          overflow: hidden;
        }
        .highlight-card::before {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: rgba(74, 172, 245, 0.1);
        }
        .highlight-card-title {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        .highlight-card p {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.6;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }
        .highlight-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        .pill {
          padding: 6px 14px;
          background: rgba(74, 172, 245, 0.18);
          border: 1px solid rgba(74, 172, 245, 0.3);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          color: var(--bubble);
          letter-spacing: 0.03em;
        }

        .footer-strip {
          border-top: 1px solid var(--gray-100);
          padding: 28px 40px;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-strip p {
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
          .main-wrap {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 48px 24px 80px;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .form-card {
            padding: 32px 24px;
          }
          .nav-inner {
            padding: 12px 20px;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .hero-content {
            padding: 48px 24px 56px;
          }
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </>
  );
}

