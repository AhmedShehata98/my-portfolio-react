import React from "react";
// import styles
import styles from "../../scss/pages/home/home.module.css";
// import Componentes
import Headings from "./Headings";
import SocialMediaLinks from "./SocialMediaLinks";
import PersonalIMG from "./PersonalIMG";

const Home = () => {
  return (
    <main className={`${styles.home}`} id="Home">
      <div className={styles["pattern-1"]}></div>
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
