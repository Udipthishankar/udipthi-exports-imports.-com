import React, { useState } from 'react';
import './App.css';

// 1. LOCAL IMAGES IMPORTS: TURMERIC FINGERS
import turmericLocalFirst from './turmeric-fingers-1.jpeg';
import turmericLocalSecond from './turmeric-fingers-2.jpeg';
import turmericLocalThird from './turmeric-fingers-3.jpeg';
import turmericLocalFourth from './turmeric-fingers-4.jpg';
import turmericLocalFifth from './turmeric-fingers-5.jpeg';

// 2. LOCAL IMAGES IMPORTS: TURMERIC POWDER
import turmericPowderFirst from './turmeric-powder-1.jpeg';
import turmericPowderSecond from './turmeric-powder-2.jpeg';
import turmericPowderThird from './turmeric-powder-3.jpeg';
import turmericPowderFourth from './turmeric-powder-4.jpeg';
import turmericPowderFifth from './turmeric-powder-5.jpeg';

// 3. LOCAL IMAGES IMPORTS: RICE
import riceFirst from './rice-1.jpeg';
import riceSecond from './rice-2.jpeg';
import riceThird from './rice-3.jpeg';
import riceFourth from './rice-4.jpeg';
import riceFifth from './rice-5.jpeg';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [currentFingerSlide, setCurrentFingerSlide] = useState(0);
  const [currentPowderSlide, setCurrentPowderSlide] = useState(0);
  const [currentRiceSlide, setCurrentRiceSlide] = useState(0);

  const turmericSliderImages = [
    turmericLocalFirst,
    turmericLocalSecond,
    turmericLocalThird,
    turmericLocalFourth,
    turmericLocalFifth
  ];

  const turmericPowderSliderImages = [
    turmericPowderFirst,
    turmericPowderSecond,
    turmericPowderThird,
    turmericPowderFourth,
    turmericPowderFifth
  ];

  const riceSliderImages = [
    riceFirst,
    riceSecond,
    riceThird,
    riceFourth,
    riceFifth
  ];

  const nextFingerSlide = () => setCurrentFingerSlide((p) => (p === turmericSliderImages.length - 1 ? 0 : p + 1));
  const prevFingerSlide = () => setCurrentFingerSlide((p) => (p === 0 ? turmericSliderImages.length - 1 : p - 1));
  
  const nextPowderSlide = () => setCurrentPowderSlide((p) => (p === turmericPowderSliderImages.length - 1 ? 0 : p + 1));
  const prevPowderSlide = () => setCurrentPowderSlide((p) => (p === 0 ? turmericPowderSliderImages.length - 1 : p - 1));

  const nextRiceSlide = () => setCurrentRiceSlide((p) => (p === riceSliderImages.length - 1 ? 0 : p + 1));
  const prevRiceSlide = () => setCurrentRiceSlide((p) => (p === 0 ? riceSliderImages.length - 1 : p - 1));

  const handleDownloadSimulation = (certName) => {
    alert(`Verification Document Request:\n\nThe official ${certName} export verification registry entry is currently undergoing validation. Digitally signed copies can be obtained directly by contacting our compliance wing.`);
  };

  return (
    <div className="App">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo"><span className="logo-accent">◆</span> Export &amp; Import Co.</div>
        <ul className="nav-links">
          <li>
            <button className={activePage === 'home' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('home')}>
              Home
            </button>
          </li>
          <li>
            <button className={activePage === 'products' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('products')}>
              Products
            </button>
          </li>
          <li>
            <button className={activePage === 'certifications' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('certifications')}>
              Certifications
            </button>
          </li>
          <li>
            <button className={activePage === 'contact' ? 'nav-btn active' : 'nav-btn'} onClick={() => setActivePage('contact')}>
              Contact
            </button>
          </li>
        </ul>
      </nav>

      {/* DYNAMIC PAGE CONTENT */}
      <main className="page-content">
        
        {/* HOME PAGE */}
        {activePage === 'home' && (
          <div className="home-container">
            <div className="hero-banner">
              <div className="hero-overlay">
                <span className="hero-tag">🌿 Karnataka's Finest Agro Exports</span>
                <h1>Welcome to Our Premium Agro Exports</h1>
                <p>Bridging traditional organic farming with next-generation digital technology for global trade excellence.</p>
                <button className="hero-cta-btn" onClick={() => setActivePage('products')}>Explore Our Products →</button>
              </div>
            </div>
<section className="company-vision-section">
  <h2>Our Mission</h2>
  <p>
    To revolutionize the agricultural supply chain by integrating cutting-edge 
    digital ledgers and IoT-based quality monitoring. We strive to empower 
    small-scale farmers in Karnataka by providing them with a global 
    platform that ensures fair trade, transparent pricing, and efficient 
    international logistics.
  </p>
</section>
            <section className="home-details-section">
              <h2>Why Partner With Us?</h2>
              <p className="section-subtitle">We don't just export products; we maintain absolute transparency and standard quality control from farm to container.</p>
              
              <div className="features-grid">
                <div className="feature-card feature-card--orange">
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=90" alt="Smart Agriculture" className="feature-img" />
                  <div className="feature-card-body">
                    <span className="feature-label">🌱 Farm to Fork</span>
                    <h3>Smart Sourcing</h3>
                    <p>Our farming infrastructure incorporates modern IoT methods and real-time smart monitoring solutions to closely track crop health and ensure premium quality metrics before harvest.</p>
                  </div>
                </div>

                <div className="feature-card feature-card--green">
                  <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=90" alt="Processing" className="feature-img" />
                  <div className="feature-card-body">
                    <span className="feature-label">✨ Zero Contamination</span>
                    <h3>Hygienic Processing</h3>
                    <p>Every batch of Turmeric and Rice is processed in state-of-the-art facilities complying strictly with global export standards, retaining natural color, high curcumin levels, and deep rich aroma.</p>
                  </div>
                </div>

                <div className="feature-card feature-card--blue">
                  <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=90" alt="Global Shipping" className="feature-img" />
                  <div className="feature-card-body">
                    <span className="feature-label">🌍 Worldwide Reach</span>
                    <h3>Global Supply Chain</h3>
                    <p>Operating directly out of the technology hub of Bengaluru, Karnataka, we manage a streamlined international supply infrastructure ensuring swift and seamless customs transit.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="info-strip">
              <div className="stat-item">
                <div className="stat-icon">🌱</div>
                <strong>100%</strong>
                <span>Traceable Sourcing</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🏆</div>
                <strong>Premium</strong>
                <span>Curcumin Standard</span>
              </div>
              <div className="stat-item">
                <div className="stat-icon">🌍</div>
                <strong>Bengaluru HQ</strong>
                <span>Strategic Logistics Hub</span>
              </div>
            </div>

            <div className="harvest-banner">
              <div className="harvest-banner-overlay">
                <div className="harvest-banner-content">
                  <span className="harvest-tag">🌾 Karnataka's Golden Harvest</span>
                  <h2>Rooted in Tradition. Powered by Technology.</h2>
                  <p>For generations, Karnataka's rich volcanic soil has yielded the world's finest turmeric. We unite that heritage with modern precision to bring you export-grade purity.</p>
                  <button className="harvest-cta" onClick={() => setActivePage('certifications')}>View Our Certifications →</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTS PAGE */}
        {activePage === 'products' && (
          <div className="products-page-wrapper">

            <div className="products-page-hero">
              <div className="products-hero-overlay">
                <span className="products-hero-tag">🌿 Certified for Global Export</span>
                <h2>Our Premium Products</h2>
                <p>Sourced from Karnataka's finest farms — processed with care, packed with purity, certified for the world.</p>
              </div>
            </div>

            <div className="products-container">
              
              <div className="product-card">
                <div className="slider-wrapper">
                  <div className="slider-container">
                    <button className="slider-btn prev" onClick={prevFingerSlide}>&#10094;</button>
                    <img src={turmericSliderImages[currentFingerSlide]} alt="Turmeric Fingers" className="product-image" />
                    <button className="slider-btn next" onClick={nextFingerSlide}>&#10095;</button>
                  </div>
                  <div className="slider-dots">
                    {turmericSliderImages.map((_, i) => (
                      <span key={i} className={`dot${i === currentFingerSlide ? ' active' : ''}`} onClick={() => setCurrentFingerSlide(i)} />
                    ))}
                  </div>
                </div>
                <div className="product-details">
                  <h3 className="product-name">Turmeric Fingers</h3>
                  <p className="product-desc">Pure, crunchy, golden-yellow dried turmeric fingers featuring optimal curcumin content.</p>
                  <button className="btn" onClick={() => setActivePage('contact')}>Inquire Now →</button>
                </div>
              </div>

              <div className="product-card">
                <div className="slider-wrapper">
                  <div className="slider-container">
                    <button className="slider-btn prev" onClick={prevPowderSlide}>&#10094;</button>
                    <img src={turmericPowderSliderImages[currentPowderSlide]} alt="Turmeric Powder" className="product-image" />
                    <button className="slider-btn next" onClick={nextPowderSlide}>&#10095;</button>
                  </div>
                  <div className="slider-dots">
                    {turmericPowderSliderImages.map((_, i) => (
                      <span key={i} className={`dot${i === currentPowderSlide ? ' active' : ''}`} onClick={() => setCurrentPowderSlide(i)} />
                    ))}
                  </div>
                </div>
                <div className="product-details">
                  <h3 className="product-name">Turmeric Powder</h3>
                  <p className="product-desc">Finely ground, aromatic, and rich turmeric powder processed under strict hygienic conditions.</p>
                  <button className="btn" onClick={() => setActivePage('contact')}>Inquire Now →</button>
                </div>
              </div>

              <div className="product-card">
                <div className="slider-wrapper">
                  <div className="slider-container">
                    <button className="slider-btn prev" onClick={prevRiceSlide}>&#10094;</button>
                    <img src={riceSliderImages[currentRiceSlide]} alt="Premium Rice" className="product-image" />
                    <button className="slider-btn next" onClick={nextRiceSlide}>&#10095;</button>
                  </div>
                  <div className="slider-dots">
                    {riceSliderImages.map((_, i) => (
                      <span key={i} className={`dot${i === currentRiceSlide ? ' active' : ''}`} onClick={() => setCurrentRiceSlide(i)} />
                    ))}
                  </div>
                </div>
                <div className="product-details">
                  <h3 className="product-name">Premium Rice</h3>
                  <p className="product-desc">High-quality long-grain aromatic rice, cleaned and packed meticulously for export.</p>
                  <button className="btn" onClick={() => setActivePage('contact')}>Inquire Now →</button>
                </div>
              </div>

            </div>

            <section className="products-bottom-section">
              <h2>Our Standard Export Process</h2>
              <div className="process-steps">
                <div className="step-card">
                  <div className="step-number">01</div>
                  <h4>Quality Inspection</h4>
                  <p>Every single batch undergoes standard laboratory testing for purity, moisture controls, and active curcumin content levels.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">02</div>
                  <h4>Hygienic Packaging</h4>
                  <p>Customized, multi-layer protective packaging ensures natural freshness is locked in and products remain pristine during transit.</p>
                </div>
                <div className="step-card">
                  <div className="step-number">03</div>
                  <h4>Global Logistics</h4>
                  <p>Direct shipping protocols handled efficiently out of regional hubs, optimized for immediate international customs clearances.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* CERTIFICATIONS PAGE */}
        {activePage === 'certifications' && (
          <div className="certifications-page-wrapper">

            <div className="certs-hero">
              <div className="certs-hero-inner">
                <span className="badge-tag">🏅 Verified Compliance</span>
                <h2>International Quality Frameworks</h2>
                <p>We actively satisfy rigorous verification standards to deliver authenticated food products safely across global supply chains.</p>
              </div>
            </div>

            <div className="certs-body">
            <div className="certs-bg-shapes">
              <div className="shape bubble-left"></div>
              <div className="shape bubble-right"></div>
            </div>

            <div className="certs-grid">
              
              {/* Badge 1: APEDA */}
              <div className="cert-badge-card custom-apeda">
                <div className="cert-ribbon">Active Registration</div>
                <div className="cert-medal-box">
                  <div className="medal-outer">
                    <span className="medal-symbol">🛡️</span>
                  </div>
                </div>
                <h3>APEDA Registered</h3>
                <span className="cert-id-tag">ID: IN-AGR-99824</span>
                <p>Official clearing authorization enabling clean global routing of premium grain and root shipments out of Indian maritime hubs.</p>
                <button className="cert-action-btn" onClick={() => handleDownloadSimulation('APEDA Registration Certificate')}>
                  <span>Download Verification</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>

              {/* Badge 2: ISO */}
              <div className="cert-badge-card custom-iso">
                <div className="cert-ribbon">HACCP Compliant</div>
                <div className="cert-medal-box">
                  <div className="medal-outer">
                    <span className="medal-symbol">👑</span>
                  </div>
                </div>
                <h3>ISO 22000:2018</h3>
                <span className="cert-id-tag">Reg: 44-100-2601</span>
                <p>Certified implementation of specialized biological hazard analysis, tracking protocols, and critical kitchen processing safety safeguards.</p>
                <button className="cert-action-btn" onClick={() => handleDownloadSimulation('ISO 22000 System Certification')}>
                  <span>Download Verification</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>

              {/* Badge 3: FSSAI */}
              <div className="cert-badge-card custom-fssai">
                <div className="cert-ribbon">Standard Seal</div>
                <div className="cert-medal-box">
                  <div className="medal-outer">
                    <span className="medal-symbol">✨</span>
                  </div>
                </div>
                <h3>FSSAI Quality Seal</h3>
                <span className="cert-id-tag">Lic: 100240990001</span>
                <p>Baseline regulatory safety clearance validating secure, contamination-free handling, storage, and airtight multi-layer protective packaging.</p>
                <button className="cert-action-btn" onClick={() => handleDownloadSimulation('FSSAI Compliance Document')}>
                  <span>Download Verification</span>
                  <span className="arrow-icon">→</span>
                </button>
              </div>

            </div>

            <div className="certs-disclaimer-panel">
              <span className="pulse-dot"></span>
              <p>All compliance metrics are real-time integrated via international agricultural trade databases.</p>
            </div>
            </div>{/* /certs-body */}
          </div>
        )}

        {/* CONTACT PAGE */}
        {activePage === 'contact' && (
          <div className="contact-page-wrapper">

            {/* Hero Banner */}
            <div className="contact-hero">
              <div className="contact-hero-inner">
                <span className="contact-hero-tag">🌍 Global Partnerships</span>
                <h2>Let's Trade Together</h2>
                <p>Ready to source premium turmeric or rice for your market? Our export desk responds within 4 business hours.</p>
                <div className="contact-hero-badges">
                  <span className="hero-badge">⚡ Fast Response</span>
                  <span className="hero-badge">🔒 Secure Inquiries</span>
                  <span className="hero-badge">🌐 Global Shipping</span>
                </div>
              </div>
            </div>

            {/* Quick-stat strip */}
            <div className="contact-stat-strip">
              <div className="contact-stat">
                <strong>4 hrs</strong>
                <span>Avg. Response Time</span>
              </div>
              <div className="contact-stat">
                <strong>50+</strong>
                <span>Countries Served</span>
              </div>
              <div className="contact-stat">
                <strong>100%</strong>
                <span>Export Certified</span>
              </div>
              <div className="contact-stat">
                <strong>24/7</strong>
                <span>WhatsApp Support</span>
              </div>
            </div>

            {/* Main content */}
            <div className="contact-body">

              {/* Left — Info Cards */}
              <div className="contact-info-panel">
                <h3 className="info-panel-title">Reach Us Directly</h3>

                <div className="info-card info-card--orange">
                  <div className="info-card-icon">✉️</div>
                  <div className="info-card-text">
                    <label>Email Us</label>
                    <p>exports@gmail.com</p>
                    <span className="info-card-hint">For bulk inquiries & quotes</span>
                  </div>
                </div>

                <div className="info-card info-card--green">
                  <div className="info-card-icon">📞</div>
                  <div className="info-card-text">
                    <label>Call / WhatsApp</label>
                    <p>+91 63643 59105</p>
                    <span className="info-card-hint">Mon – Sat, 9 AM – 7 PM IST</span>
                  </div>
                </div>

                <div className="info-card info-card--blue">
                  <div className="info-card-icon">📍</div>
                  <div className="info-card-text">
                    <label>Headquarters</label>
                    <p>Bengaluru, Karnataka</p>
                    <span className="info-card-hint">India — Export Hub</span>
                  </div>
                </div>

                <div className="info-card info-card--purple">
                  <div className="info-card-icon">🕐</div>
                  <div className="info-card-text">
                    <label>Business Hours</label>
                    <p>Mon – Sat: 9 AM – 7 PM</p>
                    <span className="info-card-hint">IST (UTC +5:30)</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="contact-trust-row">
                  <span className="trust-badge">🛡️ APEDA</span>
                  <span className="trust-badge">✅ ISO 22000</span>
                  <span className="trust-badge">🏷️ FSSAI</span>
                </div>
              </div>

              {/* Right — Form */}
              <div className="contact-form-panel">
                {!formSubmitted ? (
                  <>
                    <div className="form-panel-header">
                      <h3>Send an Inquiry</h3>
                      <p>Fill in the details below and our export team will get back to you shortly.</p>
                    </div>
                    <form className="interactive-form" onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                      <div className="form-row-two">
                        <div className="input-group">
                          <label>Your Name</label>
                          <input type="text" placeholder="John Doe" required />
                        </div>
                        <div className="input-group">
                          <label>Corporate Email</label>
                          <input type="email" placeholder="john@company.com" required />
                        </div>
                      </div>

                      <div className="input-group">
                        <label>Target Country / Port of Destination</label>
                        <input type="text" placeholder="e.g. Rotterdam, Netherlands" required />
                      </div>

                      <div className="input-group">
                        <label>Product & Volume Required</label>
                        <input type="text" placeholder="e.g. 5 MT Turmeric Fingers" required />
                      </div>

                      <div className="input-group">
                        <label>Additional Message</label>
                        <textarea rows="3" placeholder="Packaging preference, certifications needed, delivery timeline..."></textarea>
                      </div>

                      <button type="submit" className="form-submit-btn">
                        <span>Send Inquiry</span>
                        <span className="btn-arrow">→</span>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="form-success-card">
                    <div className="success-animation">
                      <div className="success-ring"></div>
                      <div className="success-check-circle">✓</div>
                    </div>
                    <h3>Inquiry Sent!</h3>
                    <p>Thank you for reaching out. Our export team will contact you at your provided email within <strong>4 business hours</strong>.</p>
                    <div className="success-info-row">
                      <span>📧 exports@gmail.com</span>
                      <span>📞 +91 63643 59105</span>
                    </div>
                    <button className="reset-form-btn" onClick={() => setFormSubmitted(false)}>Submit Another Inquiry</button>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

      </main>

      {/* FIXED FOOTER SECTION */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Export & Import Co. All rights reserved.</p>
        <p>Your Trusted Partner in Global Trade | Bengaluru, Karnataka</p>
      </footer>
    </div>
  );
}

export default App;