import React from "react";
import styles from "../../scss/layout/overlay.module.css";

function Overlay({ background_color }) {
  return (
    <div
      className={styles["overlay"]}
      style={{ background_color: background_color }}
      background={background_color}
    ></div>
  );
}

export default Overlay;
