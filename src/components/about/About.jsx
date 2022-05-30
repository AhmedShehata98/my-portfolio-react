import React, { useContext, lazy, Suspense } from "react";
import styles from "../../scss/pages/about/about.module.css";
import { siteDataCtx } from "../../contexts/dataContentContext";
import Row from "../layout/Row";
import Col from "../layout/Col";
// import PersonalImgAbout from "./PersonalImgAbout";
import Container from "../layout/Container";
import DetailsBox from "./DetailsBox";
import LoadPlaceholder from "../layout/LoadPlaceholder";
const PersonalImgAbout = lazy(() => import("./PersonalImgAbout"));

const About = () => {
  const {
    languages: {
      about: { name },
    },
  } = useContext(siteDataCtx);

  return (
    <div className={styles["about"]} id="About">
      <Container>
        <div className={styles["border"]}>
          <Row>
            <Col col_count={"12"} class_list={"col-lg-6"}>
              <Suspense fallback={<LoadPlaceholder />}>
                <PersonalImgAbout />
              </Suspense>
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
