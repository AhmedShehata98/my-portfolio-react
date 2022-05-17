import React from "react";
import styles from "../../scss/layout/contentWrapper/contentWrapper.module.css";

const ContentWrapper = ({ children }) => {
  return <div className={styles["content-wrapper"]}>{children}</div>;
};

export default ContentWrapper;
