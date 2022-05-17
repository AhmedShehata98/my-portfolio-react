import React from "react";
import styles from "../../scss/layout/loadingModule.module.css";
import logo from "../../assets/images/OURATE.png";

function LoadingModule() {
  return (
    <div className={styles["isLoadingContainer"]}>
      <img src={logo} alt="asdasd" />
    </div>
  );
}

export default LoadingModule;
