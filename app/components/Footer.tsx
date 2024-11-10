import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <footer className={style.footer}>
        <div className={style.innerContainer}>
          <a href="/" className={style.logoContainer}>
            <Image
              alt="profile"
              width={70}
              height={70}
              src="/pictures-cv/logo-profile.jpg"
              className={style.logoImage}
            />
            <span className={style.logoText}>Raza Ahmed</span>
          </a>
          <p className={style.copyright}>© 2024 Raza Ahmed</p>
          <span className={style.socialLinks}>
            <Link
              href="https://www.facebook.com/profile.php?id=100008466768023"
              target="_blank"
              className={style.socialLink}
            >
              <BsFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/raza._.ahmed321/"
              target="_blank"
              className={style.socialLink}
            >
              <BsInstagram />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raza-ahmed-a39886290/"
              target="_blank"
              className={style.socialLink}
            >
              <BsLinkedin />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
