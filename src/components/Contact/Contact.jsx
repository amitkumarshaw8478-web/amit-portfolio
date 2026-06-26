import './Contact.css';

function Contact() {
  const phoneNumber = '8478023460';
  const whatsappLink = `https://wa.me/91${phoneNumber}`; // Assuming Indian country code +91
  const callLink = `tel:${phoneNumber}`;

  return (
    // id="contact" so the Navbar link scrolls here
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        
        <div className="contact-content">
          {/* Left Side: Contact Information & Direct Actions */}
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p className="contact-description">
              Whether you have a web development project in mind or need expert LIC advisory services, 
              feel free to drop a message or reach out directly.
            </p>
            
            <div className="contact-actions">
              <a href={callLink} className="action-btn call-btn">
                📞 Call Me: {phoneNumber}
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="action-btn whatsapp-btn">
                💬 WhatsApp Me
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required className="form-input" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required className="form-input"></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
