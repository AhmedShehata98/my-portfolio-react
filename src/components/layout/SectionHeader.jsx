import React from "react";
import styles from "../../scss/layout/sectionHeader/sectionHeader.module.css";

const SectionHeader = ({ iconName, title, subTitle }) => {
  return (
    <div className={styles["headingBox"]}>
      <div className={styles["headingTitle"]}>
        <span className={styles["icon"]}>
          <i className={iconName}></i>
        </span>
        <h3>{title}</h3>
      </div>
      <div className={styles["headingSubTitle"]}>{subTitle}</div>
    </div>
  );
};
export default SectionHeader;
