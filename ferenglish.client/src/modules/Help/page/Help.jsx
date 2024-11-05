import React from "react";
import "../styles/help.scss";

function HelpPage() {
  return (
    <div className="help-page">
      {/* Header */}
      <header className="help-header">
        <h1 className="help-header__title">Help Center</h1>
        <p className="help-header__subtitle">
          Get answers and explore guidelines
        </p>
        <nav className="help-header__nav">
          <ul className="help-header__nav-list">
            <li className="help-header__nav-item">
              <a href="#guidelines">Guidelines</a>
            </li>
            <li className="help-header__nav-item">
              <a href="#rules">Rules</a>
            </li>
            <li className="help-header__nav-item">
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li className="help-header__nav-item">
              <a href="#faq">FAQ</a>
            </li>
            <li className="help-header__nav-item">
              <a href="#contact">Contact Support</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Guidelines Section */}
      <section id="guidelines" className="section guidelines">
        <h2 className="section__title">Community Guidelines</h2>
        <p className="section__content">
          Our platform is built on respect and inclusion. To ensure a positive
          experience for everyone, we encourage users to:
        </p>
        <ul className="guidelines__list">
          <li>Be respectful in all interactions</li>
          <li>Avoid sharing or promoting harmful content</li>
          <li>Respect privacy and avoid sharing personal information</li>
          <li>Follow all intellectual property laws</li>
        </ul>
      </section>

      {/* Rules Section */}
      <section id="rules" className="section rules">
        <h2 className="section__title">Platform Rules</h2>
        <p className="section__content">
          These rules ensure a safe and productive environment for everyone:
        </p>
        <ul className="rules__list">
          <li>No hate speech, harassment, or discrimination</li>
          <li>No spamming, scamming, or misleading information</li>
          <li>No explicit content, unless appropriately labeled</li>
          <li>Follow all platform age restrictions</li>
        </ul>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="section privacy">
        <h2 className="section__title">Privacy Policy</h2>
        <p className="section__content">
          Your privacy is important to us. We adhere to industry-standard
          practices to protect your personal information. Learn more about:
        </p>
        <ul className="privacy__list">
          <li>How we collect and use data</li>
          <li>How we store and protect your information</li>
          <li>Your rights regarding data access and deletion</li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section faq">
        <h2 className="section__title">Frequently Asked Questions (FAQ)</h2>
        <div className="faq__item">
          <h3>How do I reset my password?</h3>
          <p>
            To reset your password, go to the login page and select "Forgot
            Password." Follow the instructions to reset it securely.
          </p>
        </div>
        <div className="faq__item">
          <h3>How do I report inappropriate content?</h3>
          <p>
            To report content, select the report option on the post or profile.
            Our team will review the report and take appropriate action.
          </p>
        </div>
        <div className="faq__item">
          <h3>What should I do if my account is hacked?</h3>
          <p>
            If you suspect your account has been compromised, please contact
            support immediately for assistance in securing it.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="section__title">Contact Us</h2>
        <p className="section__content">Address: 123 ABC Street, XYZ City</p>
        <p className="section__content">Phone: (0123) 456-789</p>
        <p className="section__content">Email: contact@englishcenterabc.com</p>
        <form className="contact__form">
          <input
            type="text"
            placeholder="Full Name"
            className="contact__input"
          />
          <input type="email" placeholder="Email" className="contact__input" />
          <textarea
            placeholder="Your Message"
            className="contact__textarea"
          ></textarea>
          <button type="submit" className="contact__button">
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 English Center ABC. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HelpPage;
