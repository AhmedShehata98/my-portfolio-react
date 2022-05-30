import React from "react";
import styles from "../../scss/layout/photosLoad/photosLoad.module.css";
const PhotoLoadPlacholder = () => {
  return (
    <div className={styles["wrapper"]}>
      <span className={styles["circuit"]}></span>
      <div className={styles["rectangle-wrapper"]}>
        <span className={styles["rectangle"]}></span>
        <span className={styles["rectangle"]}></span>
      </div>
    </div>
  );
};

export default PhotoLoadPlacholder;
