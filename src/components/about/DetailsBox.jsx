import React, { useContext } from "react";
import { nanoid } from "nanoid";
import { siteDataCtx } from "../../contexts/dataContentContext";
import SkillsButton from "./SkillsButton";
import styles from "../../scss/pages/about/detailsBox/detalisBox.module.css";

function DetailsBox() {
  let {
    languages: {
      about: { section_heading, details, programingLang },
    },
  } = useContext(siteDataCtx);
  return (
    <div className={styles["details-box"]}>
      <h3 className={styles["title"]}>{section_heading}</h3>
      <h6 className={styles["subtitle"]}>{details}</h6>
      <ul className={styles["programingLanges"]}>
        {programingLang.map((Icon, i) => {
          return (
            <li key={nanoid(6)} style={styles["programingLang"]}>
              <Icon />
            </li>
          );
        })}
      </ul>
      <SkillsButton styles={styles} />
    </div>
  );
}

export default DetailsBox;
