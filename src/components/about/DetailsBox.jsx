import React, { Fragment, useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import SkillsButton from "./SkillsButton";
import styles from "../../scss/pages/about/detailsBox/detalisBox.module.css";

function DetailsBox() {
  let {
    about: { section_heading, details },
  } = useContext(siteDataCtx);
  return (
    <div className={styles["details-box"]}>
      <h3 className={styles["title"]}>{section_heading}</h3>
      <h6 className={styles["subtitle"]}>{details}</h6>
      <SkillsButton styles={styles} />
    </div>
  );
}

export default DetailsBox;
