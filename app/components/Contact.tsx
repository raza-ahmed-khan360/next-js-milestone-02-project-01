import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import style from "./contact.module.css"
const Contact = () => {
  return (
    <div id="Contact">
      <section className={style.section}>
      <div className={style.container}>
        <div className={style.textCenter}>
          <h1 className={style.title}>Contact Us</h1>
          <p className={style.subtitle}>
            Feel free to reach out to us for any questions or concerns.
          </p>
        </div>
        <div className={style.formContainer}>
          <form
            action="https://formspree.io/f/xldeneob"
            method="POST"
            className={style.form}
          >
            <div className={style.inputGroup}>
              <label htmlFor="name" className={style.inputLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={style.input}
                required
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="email" className={style.inputLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={style.input}
                required
              />
            </div>
            <div className={style.inputGroup}>
              <label htmlFor="message" className={style.inputLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={style.textarea}
                required
              />
            </div>
            <div className={style.submitButtonGroup}>
              <button type="submit" className={style.submitButton}>
                Send Message
              </button>
            </div>
            <div className={style.contactInfo}>
              <Link href="mailto:hafizrazaahmed42@gmail.com" className={style.email}>hafizrazaahmed42@email.com</Link>
              <p className={style.address}>
                Jhanda Chowk <br />
                Liaqautabad Block 2, Karachi
              </p>
              <span className={style.socialLinks}>
                <Link
                  href="https://www.facebook.com/profile.php?id=100008466768023"
                  target="_blank"
                  className={style.socialIcon}
                >
                  <BsFacebook />
                </Link>
                <Link
                  href="https://www.instagram.com/raza._.ahmed321/"
                  target="_blank"
                  className={style.socialIcon}
                >
                  <BsInstagram />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/raza-ahmed-a39886290/"
                  target="_blank"
                  className={style.socialIcon}
                >
                  <BsLinkedin />
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
