import Image from "next/image";
import React from "react";
import Link from "next/link";
import style from "./about.module.css";
const About = () => {
  return (
    <div id="About">
      <section className={style.section}>
      <div className={style.container}>
        <div className={style.leftContainer}>
          <h1 className={style.title}>About Me</h1>
          <div className={style.divider}></div>
          <p className={style.description}>
            I am a dedicated UI/UX Designer, Web developer, and Graphic
            Designer with a passion for creating visually appealing and
            user-friendly digital experiences. With expertise in wireframing,
            prototyping, and responsive design.
            <br />
            <br />
            I focus on blending aesthetics with functionality. I stay current
            with industry trends to deliver innovative solutions that meet client
            goals and delight users. Whether collaborating with teams or working
            independently, I am committed to transforming ideas into impactful
            designs.
          </p>
          <div className={style.buttonContainer}>
            <Link href="/pictures-cv/cv.pdf" target="_blank">
              <button className={style.button}>View Resume</button>
            </Link>
          </div>
        </div>
        <div className={style.rightContainer}>
          <Image
            width={720}
            height={600}
            className={style.image}
            alt="hero"
            src="/pictures-cv/logo-profile.jpg"
          />
        </div>
      </div>
    </section>
    </div>
  );
};

export default About;
