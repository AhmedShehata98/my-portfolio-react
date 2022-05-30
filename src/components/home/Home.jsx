import React, { Suspense } from "react";
// import styles
import styles from "../../scss/pages/home/home.module.css";
// import Componentes
import Headings from "./Headings";
import SocialMediaLinks from "./SocialMediaLinks";
// import PersonalIMG from "./PersonalIMG";
const PersonalIMG = React.lazy(() => import("./PersonalIMG"));

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
          <Suspense
            fallback={
              <div className={styles["placeholder-effect"]}>
                <span className="spinner-border text-success"></span>
              </div>
            }
          >
            <PersonalIMG />
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Home;
