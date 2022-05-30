import React, { useEffect, useState } from "react";
import styles from "../../scss/layout/loadingModule.module.css";
import LOGO_DARK_THEME from "../../assets/images/OURATE.png";
import LOGO_LIGHT_THEME from "../../assets/images/OURAT_2.png";

function LoadingModule() {
  const [Logo, setLogo] = useState(LOGO_DARK_THEME);
  const themeMode = getComputedStyle(document.documentElement).getPropertyValue(
    "--root-second-color"
  );
  const secondaryColorDark = "#041417";

  useEffect(() => {
    if (themeMode !== secondaryColorDark) {
      setLogo(LOGO_LIGHT_THEME);
    } else {
      setLogo(LOGO_DARK_THEME);
    }
  }, []);

  document.body.classList.add(styles["bodyNoScroll"]);
  useEffect(() => {
    document.body.classList.add(styles["bodyNoScroll"]);

    return () => {
      document.body.classList.remove(styles["bodyNoScroll"]);
    };
  });

  return (
    <div className={styles["isLoadingModule"]}>
      <div className={styles["hexagen-wrapper"]}>
        <span className={styles["hexagen-layer1"]}>
          <img src={Logo} alt="site logo" />
        </span>
        <span className={styles["hexagen-layer2"]}></span>
      </div>
    </div>
  );
}

export default LoadingModule;
