import React from "react";
import { nanoid } from "nanoid";

import styles from "../../scss/pages/skills/laguesList/SkillsBoxsInteration.module.css";

function SkillsBoxsInteration({ iterationItem }) {
  const langesListLoop = Object.entries(iterationItem).map(
    ({ 1: { iconName, id, itemName, persent } }) => {
      return (
        <li className={styles["LanguageBox"]} key={nanoid(6)}>
          <p className={styles["count"]}>{"0" + (id + 1)}</p>
          <img className={styles["icon"]} src={iconName} alt={"icon #" + id} />

          <div className={styles["nameOverlay"]}>
            <h5 className={styles["LanguageName"]}>{itemName}</h5>
          </div>
          <div className={styles["skillProgress"]}>
            <span style={{ width: persent }}>.</span>
          </div>
        </li>
      );
    }
  );

  return <ul className={styles["langList"]}>{langesListLoop}</ul>;
}

export default SkillsBoxsInteration;
