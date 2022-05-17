import React, { useContext } from "react";
import styles from "../../scss/pages/about/about.module.css";
import { siteDataCtx } from "../../contexts/dataContentContext";
import Row from "../layout/Row";
import Col from "../layout/Col";
import PersonalImgAbout from "./PersonalImgAbout";
import Container from "../layout/Container";
import DetailsBox from "./DetailsBox";

const About = () => {
  const {
    about: { name },
  } = useContext(siteDataCtx);
  // getComputedStyle(document.documentElement).getPropertyValue('--root-black-color')
  return (
    <div className={styles["about"]} id="About">
      <Container>
        <div className={styles["border"]}>
          <Row>
            <Col col_count={"12"} class_list={"col-lg-6"}>
              <PersonalImgAbout />
              <h3 className={styles["name"]}>{name}</h3>
            </Col>
            <Col col_count={"12"} class_list={"col-lg-6"}>
              <DetailsBox />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;
