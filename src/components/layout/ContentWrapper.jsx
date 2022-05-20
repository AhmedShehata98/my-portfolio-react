import React from "react";
import styles from "../../scss/layout/contentWrapper/contentWrapper.module.css";

const ContentWrapper = ({ children, borderClr = true }) => {
  let varBorderColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--root-primary-color");

  return (
    <div
      className={styles["content-wrapper"]}
      style={
        borderClr
          ? { border: `4px solid ${varBorderColor}` }
          : { border: `initial` }
      }
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
