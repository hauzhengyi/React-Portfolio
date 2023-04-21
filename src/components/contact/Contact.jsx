import './contact.css';
import React, { useRef, useState } from 'react';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { ImPhone } from 'react-icons/im';
import emailjs from 'emailjs-com';

function Contact() {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setButtonDisabled(true);

    emailjs
      .sendForm(
        'service_hzy26',
        'template_hzy26',
        form.current,
        'xsiM1ymKktGkkWCXC'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent. Thank you!');
        },
        (error) => {
          console.log(error.text);
          alert('Error: ' + error.text);
        }
      )
      .finally(() => {
        e.target.reset();
        setButtonDisabled(false);
      });
  };

  return (
    <section id="contact">
      <h5>Don't Hesitate To</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
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
            <IoLogoWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=60166731588"
              className="contact__whatsapp"
              target="blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <ImPhone className="contact__option-icon" />
            <h4>Phone</h4>
            <a href="tel:+60166731588" className="contact__phone">
              +60166731588
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="text"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-cta contact__form-submit"
            disabled={buttonDisabled}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
