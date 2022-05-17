import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/potfolio/Portflio/portfolio.module.css";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Col from "../layout/Col";
import Content_Wrapper from "../layout/Content_Wrapper";
import SectionHeader from "../layout/SectionHeader";
import PorojectPreview from "./PorojectPreview";
import ProjectsDetails from "./ProjectsDetails";

const Portfolio = () => {
  const {
    portfolio: {
      header: { title, subTitle, iconName },
    },
  } = useContext(siteDataCtx);
  return (
    <div className={styles["portfolio"]} id="Portfolio">
      <Container>
        <SectionHeader title={title} subTitle={subTitle} iconName={iconName} />
        <Content_Wrapper>
          <Row>
            <Col class_list="col-12 ">
              <PorojectPreview />
            </Col>
          </Row>
        </Content_Wrapper>
      </Container>
    </div>
  );
};

export default Portfolio;
