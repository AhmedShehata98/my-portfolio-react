import React from "react";
import styles from "../../scss/layout/contentWrapper/contentWrapper.module.css";

const Content_Wrapper = ({ children }) => {
  return <div className={styles["content-wrapper"]}>{children}</div>;
};

export default Content_Wrapper;
