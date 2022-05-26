import React, { useContext } from "react";
import { nanoid } from "nanoid";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/skills/laguesList/SkillsBoxsInteration.module.css";

function SkillsBoxsInteration({ iterationItem }) {
  const {
    languages: { lang },
  } = useContext(siteDataCtx);

  // console.log(<iterationItem.tool_1.Icon />);
  const langesListLoop = Object.entries(iterationItem).map(
    ({ 1: { Icon, id, itemName, persent } }) => {
      return (
        <li className={styles["LanguageBox"]} key={nanoid(6)}>
          <p className={styles["count"]}>{"0" + (id + 1)}</p>
          <div className={styles["icon"]}>
            {/* <img src={iconName} alt={"icon #" + id} /> */}
            <Icon />
          </div>
          <div
            style={
              lang === "ar"
                ? { justifyContent: "center" }
                : { justifyContent: "initial" }
            }
            className={styles["nameOverlay"]}
          >
            <h5 className={styles["LanguageName"]}>{itemName}</h5>
          </div>
          <div className={styles["skillProgress"]}>
            <span
              className={lang === "ar" ? styles["rtl-skillProgress"] : ""}
              style={{ width: persent }}
            >
              .
            </span>
          </div>
        </li>
      );
    }
  );

  return <ul className={styles["langList"]}>{langesListLoop}</ul>;
}

export default SkillsBoxsInteration;
