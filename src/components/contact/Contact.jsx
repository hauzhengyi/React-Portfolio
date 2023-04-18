import './contact.css';
import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h5>Don't Hesitate To</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <h4>Email</h4>
            <a
              href="mailto:hauzhengyi@hotmail.com"
              className="contact__email"
              target="blank"
            >
              hauzhengyi@hotmail.com
            </a>
          </article>
          <article className="contact__option">
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=60166731588"
              className="contact__whatsapp"
              target="blank"
            >
              WhatsApp
            </a>
          </article>
          <article className="contact__option">
            <h4>Phone</h4>
            <a
              href="tel:+60166731588"
              className="contact__phone"
              target="blank"
            >
              +60166731588
            </a>
          </article>
        </div>
        <form action="">
          <input type="name" name="name" placeholder="Your Name" required />
          <input type="email" name="name" placeholder="Your Email" required />
          <textarea
            type="email"
            name="name"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-cta">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
