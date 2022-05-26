import React from "react";
import styles from "../../scss/pages/skills/ContentBox/contentBox.module.css";

const Topic = ({ title }) => {
  return (
    <div className={styles["topic_title_Container"]}>
      <span className={styles["line1"]}></span>
      <div className={styles["heading_text"]}>
        <h6>{title}</h6>
      </div>
      <span className={styles["line2"]}></span>
    </div>
  );
};

export default Topic;
