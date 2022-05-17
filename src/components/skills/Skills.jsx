import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/skills/skills.module.css";
import Container from "../layout/Container";
import ContentBox from "./ContentBox";
import SectionHeader from "../layout/SectionHeader";

const Skills = () => {
  let {
    skills: {
      headdingBox: { section_title, sub_title, iconName },
      main_content: { titleTwo, titleThree },
    },
  } = useContext(siteDataCtx);

  return (
    <div className={styles["skills"]} id="Skills">
      <Container>
        <SectionHeader
          iconName={iconName}
          title={section_title}
          subTitle={sub_title}
        />
        <ContentBox headingTitle1={titleTwo} headingTitle2={titleThree} />
      </Container>
    </div>
  );
};

export default Skills;
