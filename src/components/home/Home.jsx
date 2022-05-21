import React from "react";

// import styles
import styles from "../../scss/pages/home/home.module.css";
// import Componentes
import Headings from "./Headings";
import SocialMediaLinks from "./SocialMediaLinks";
import PersonalIMG from "./PersonalIMG";

const Home = () => {
  // const varSecondaryClrProp = "--root-second-color";
  // let secondaryClr = getComputedStyle(
  //   document.documentElement
  // ).getPropertyPriority(varSecondaryClrProp);

  // window.addEventListener("load", () => {
  //   document.documentElement.style.setProperty("--bs-body-bg", secondaryClr);
  // });

  return (
    <main className={`${styles.home}`} id="Home">
      {/* <div className={styles["background"]}>
        <img
          src={innerWidth <= 768 ? backgroundIMG_sm : backgroundIMG_lg}
          alt="background"
        />
      </div> */}
      <div className={styles["overlay"]}></div>
      <section className={`${styles.HomeContainer} container`}>
        <SocialMediaLinks />
        <div className={styles["homeItems-wrapper"]}>
          <Headings />
          <div className={styles.ScrollDown_Wrapper}>
            <span className={styles.ScrollDown_Icon}>
              <i className="bi bi-mouse-fill"></i>
            </span>
          </div>
          <PersonalIMG />
        </div>
      </section>
    </main>
  );
};

export default Home;
