import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/skills/skills.module.css";
import SectionHeader from "../layout/SectionHeader";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Col from "../layout/Col";
import ContentWrapper from "../layout/ContentWrapper";
import SkillsBoxsInteration from "./SkillsBoxsInteration";
import Topic from "./Topic";

const Skills = () => {
  let {
    languages: {
      skills: {
        headdingBox: { section_title, sub_title, iconName },
        main_content: {
          titleTwo,
          titleThree,
          framework_and_Langlist,
          toolsList,
        },
      },
    },
  } = useContext(siteDataCtx);

  return (
    <div className={styles["skills"]} id="Skills">
      <Container>
        <Row>
          <Col col_count="12">
            <SectionHeader
              iconName={iconName}
              title={section_title}
              subTitle={sub_title}
            />
          </Col>
        </Row>
        <Row>
          <Col col_count="12">
            <ContentWrapper borderClr={false}>
              <Topic title={titleTwo} />
              <SkillsBoxsInteration iterationItem={framework_and_Langlist} />
              <Topic title={titleThree} />
              <SkillsBoxsInteration iterationItem={toolsList} />
            </ContentWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
