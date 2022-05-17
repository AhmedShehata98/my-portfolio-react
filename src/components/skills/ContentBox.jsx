import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";

import styles from "../../scss/pages/skills/ContentBox/contentBox.module.css";
import SkillsBoxsInteration from "./SkillsBoxsInteration";

const ContentBox = ({ headingTitle1, headingTitle2 }) => {
  let {
    skills: {
      main_content: { framework_and_Langlist, toolsList },
    },
  } = useContext(siteDataCtx);

  return (
    <div className={styles.ContentBoxWraper}>
      <div className={styles["topic_title_Container"]}>
        <span className={styles["line1"]}></span>
        <div className={styles["heading_text"]}>
          <h6>{headingTitle1}</h6>
        </div>
        <span className={styles["line2"]}></span>
      </div>
      <SkillsBoxsInteration iterationItem={framework_and_Langlist} />
      <div className={styles["topic_title_Container"]}>
        <span className={styles["line1"]}></span>
        <div className={styles["heading_text"]}>
          <h6>{headingTitle2}</h6>
        </div>
        <span className={styles["line2"]}></span>
      </div>
      <SkillsBoxsInteration iterationItem={toolsList} />
    </div>
  );
};

export default ContentBox;
