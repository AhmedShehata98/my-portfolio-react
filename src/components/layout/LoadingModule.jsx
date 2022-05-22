import React, { useState } from "react";
import styles from "../../scss/layout/loadingModule.module.css";
import logo from "../../assets/images/OURATE.png";

function LoadingModule() {
  const [bodyNoScroll, setBodyNoScrollt] = useState(true);
  bodyNoScroll
    ? document.body.classList.add(styles["bodyNoScroll"])
    : document.body.classList.remove(styles["bodyNoScroll"]);

  return (
    <div className={styles["isLoadingModule"]}>
      <div className={styles["hexagen-wrapper"]}>
        <span className={styles["hexagen-layer1"]}>
          <img src={logo} alt="site logo" />
        </span>
        <span className={styles["hexagen-layer2"]}></span>
      </div>
    </div>
  );
}

export default LoadingModule;
