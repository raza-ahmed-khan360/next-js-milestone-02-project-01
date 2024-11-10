"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import  style  from "./hero.module.css";

const HeroSection = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.imageContainer}>
          <Image
            alt="hero"
            src="/pictures-cv/profile.png"
            width={300}
            height={300}
            priority
            className={style.heroImage}
          />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.title}>
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "UI/UX Designer", "Graphic Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className={style.divider}></div>
          <p className={style.description}>
            As a versatile designer and developer, I specialize in Graphic
            Design, Web Development, and UI/UX Design. Let’s create visually
            captivating, user-centered, and responsive solutions that make an
            impact.
          </p>
          <div className={style.buttonContainer}>
            <Link href="#Contact" passHref>
              <button className={style.contactButton}>Contact</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;



