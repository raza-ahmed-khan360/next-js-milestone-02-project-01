import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./project.module.css";

const Projects = () => {
  return (
    <div id="Project">
       <section className={style.textBrandText}>
      <div className={style.container}>
        <div className={style.textCenter}>
          <h1 className={style.smText3xl}>Projects</h1>
          <p className={style.lgW2_3}>
            Here’s a collection of my work across Graphic Design, Web Development, and UI/UX Design...
          </p>
        </div>
        <div className={style.flexWrap}>
          {/* Project 1 */}
          <div className={`${style.transitionTransform} ${style.hoverScale110} ${style.lgW1_2} ${style.smW1_2} ${style.p6}`}>
            <div className={style.relative}>
              <Image
                width={600}
                height={360}
                alt="gallery"
                className={`${style.absolute} ${style.wFull} ${style.hFull} ${style.objectCover} ${style.objectCenter}`}
                src="/pictures-cv/static-resume.png"
              />
              <div className={`${style.px8} ${style.py10} ${style.relative} ${style.z10} ${style.border4} ${style.borderGray200} ${style.bgWhite} ${style.opacity0} ${style.hoverOpacity100}`}>
                <h2 className={style.trackingWidest}>Static Resume Builder</h2>
                <h1 className={style.textLg}>RESUME</h1>
                <p className={style.leadingRelaxed}>
                  A Static Resume Builder that helps you create a resume in minutes.
                </p>
                <Link href="https://raza-ahmeds-static-responsive-resume.vercel.app" target="_blank">
                  <p className={style.viewProject}>View Project..</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className={`${style.transitionTransform} ${style.hoverScale110} ${style.lgW1_2} ${style.smW1_2} ${style.p6}`}>
            <div className={style.relative}>
              <Image
                width={600}
                height={360}
                alt="gallery"
                className={`${style.absolute} ${style.wFull} ${style.hFull} ${style.objectCover} ${style.objectCenter}`}
                src="/pictures-cv/dynamic-resume.png"
              />
              <div className={`${style.px8} ${style.py10} ${style.relative} ${style.z10} ${style.border4} ${style.borderGray200} ${style.bgWhite} ${style.opacity0} ${style.hoverOpacity100}`}>
                <h2 className={style.trackingWidest}>Dynamic Resume Builder</h2>
                <h1 className={style.textLg}>RESUME BUILDER</h1>
                <p className={style.leadingRelaxed}>
                  A Dynamic Resume Builder that helps you create a resume in minutes.
                </p>
                <Link href="https://resume-builder-editable-downloadable.vercel.app" target="_blank">
                  <p className={style.viewProject}>View Project..</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className={`${style.transitionTransform} ${style.hoverScale110} ${style.lgW1_2} ${style.smW1_2} ${style.p6}`}>
            <div className={style.relative}>
              <Image
                width={600}
                height={360}
                alt="gallery"
                className={`${style.absolute} ${style.wFull} ${style.hFull} ${style.objectCover} ${style.objectCenter}`}
                src="/pictures-cv/figma-file.png"
              />
              <div className={`${style.px8} ${style.py10} ${style.relative} ${style.z10} ${style.border4} ${style.borderGray200} ${style.bgWhite} ${style.opacity0} ${style.hoverOpacity100}`}>
                <h2 className={style.trackingWidest}>DashSlack Hero Section</h2>
                <h1 className={style.textLg}>DASHSLACK DESIGN</h1>
                <p className={style.leadingRelaxed}>
                  DashSlack Design is a Hero Section perfect for inspiration for newbies.
                </p>
                <Link href="https://dribbble.com/shots/24833207-SaaS-Product-Design-Landing-Home-Page" target="_blank">
                  <p className={style.viewProject}>View Project..</p>
                </Link>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className={`${style.transitionTransform} ${style.hoverScale110} ${style.lgW1_2} ${style.smW1_2} ${style.p6}`}>
            <div className={style.relative}>
              <Image
                width={600}
                height={360}
                alt="gallery"
                className={`${style.absolute} ${style.wFull} ${style.hFull} ${style.objectCover} ${style.objectCenter}`}
                src="/pictures-cv/Home-Page.jpg"
              />
              <div className={`${style.px8} ${style.py10} ${style.relative} ${style.z10} ${style.border4} ${style.borderGray200} ${style.bgWhite} ${style.opacity0} ${style.hoverOpacity100}`}>
                <h2 className={style.trackingWidest}>Full Page UI Saas Design Idea</h2>
                <h1 className={style.textLg}>SaaS DESIGN</h1>
                <p className={style.leadingRelaxed}>
                  A quick idea to inspire beginners in SaaS UI design.
                </p>
                <Link href="https://dribbble.com/shots/25153273-Full-Page-Cloudify-UI-UX-SaaS-Design-Idea" target="_blank">
                  <p className={style.viewProject}>View Project..</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Projects;
