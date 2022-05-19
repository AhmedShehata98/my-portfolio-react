import React, { useState, useEffect } from "react";

// import styles
import styles from "../../scss/pages/home/home.module.css";
// import Componentes
import Headings from "./Headings";
import SocialMediaLinks from "./SocialMediaLinks";
import PersonalIMG from "./PersonalIMG";
import backgroundIMG_lg from "../../assets/images/backgrond.jpg";
import backgroundIMG_sm from "../../assets/images/backgrond_mobile.jpg";

const Home = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, [innerWidth]);

  const handleMediaScreen = (innerWidth) => {
    let mediaScreenStyles = {};
    if (innerWidth >= 992) {
      mediaScreenStyles = {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "95vh",
      };
    }
    if (innerWidth <= 991) {
      mediaScreenStyles = {
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: "95vh",
        // padding: "0.5rem 0 0.5rem 4rem",
      };
    }
    return mediaScreenStyles;
  };

  return (
    <main className={`${styles.home}`} id="Home">
      <div className={styles["background"]}>
        <img
          src={innerWidth <= 768 ? backgroundIMG_sm : backgroundIMG_lg}
          alt="background"
        />
      </div>
      <div className={styles["overlay"]}></div>
      <section className={`${styles.HomeContainer} container`}>
        <SocialMediaLinks />
        {/* style={{ ...handleMediaScreen(innerWidth) } */}
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
