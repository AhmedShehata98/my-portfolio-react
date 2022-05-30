import React from "react";
import styles from "../../scss/layout/loadPlaceholder/loadPlaceholder.module.css";

const LoadPlaceholder = () => {
  return (
    <div className={styles["load_wrapper"]}>
      <div className={styles["avatar-wrapper"]}>
        <span className={styles["avatar-head"]}></span>
        <span className={styles["avatar-body"]}></span>
      </div>
    </div>
  );
};

export default LoadPlaceholder;
