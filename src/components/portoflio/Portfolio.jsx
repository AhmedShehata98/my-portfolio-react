import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/potfolio/Portflio/portfolio.module.css";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Col from "../layout/Col";
import ContentWrapper from "../layout/ContentWrapper";
import SectionHeader from "../layout/SectionHeader";
import PortfolioList from "./PortfolioList";

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
        <ContentWrapper>
          <Row>
            <Col class_list="col-12 ">
              <PortfolioList />
            </Col>
          </Row>
        </ContentWrapper>
      </Container>
    </div>
  );
};

export default Portfolio;
