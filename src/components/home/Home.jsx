import React, { useState, useEffect, useContext } from "react";
import { colorsMode } from "../../contexts/NightMode";
// import styles
import styles from "../../scss/pages/home/home.module.css";
// import Componentes
import Headings from "./Headings";
import SocialMediaLinks from "./SocialMediaLinks";
import PersonalIMG from "./PersonalIMG";
import backgroundIMG_lg from "../../assets/images/backgrond.jpg";
import backgroundIMG_sm from "../../assets/images/backgrond.jpg";

const Home = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const {
    mode: { id },
  } = useContext(colorsMode);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setInnerWidth(window.innerWidth);
    });
  }, [innerWidth]);

  // startTranslation(ParticlesBg);
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
        position: "absolute",
        flexDirection: "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        height: "95vh",
        padding: "0.5rem 0 0.5rem 4rem",
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
        <div style={{ ...handleMediaScreen(innerWidth) }}>
          <Headings />
          <PersonalIMG />
        </div>
      </section>
    </main>
  );
};

export default Home;
