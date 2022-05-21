import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import ServicesList from "./ServicesList";
import Container from "../layout/Container";
import Col from "../layout/Col";
import Row from "../layout/Row";
import ContentWrapper from "../layout/ContentWrapper";
import SectionHeader from "../layout/SectionHeader";
import styles from "../../scss/pages/services/services.module.css";

const Servcies = () => {
  const {
    languages: {
      services: {
        header: { title, subTitle, iconName },
        servicesList,
      },
    },
  } = useContext(siteDataCtx);

  return (
    <div className={styles["services"]} id="services">
      <Container>
        <Row>
          <Col col_count="12">
            <SectionHeader
              iconName={iconName}
              title={title}
              subTitle={subTitle}
            />
          </Col>
        </Row>
        <ContentWrapper borderClr={false}>
          <Row>
            <Col col_count="12">
              <ServicesList services={servicesList} styles={styles} />
            </Col>
          </Row>
        </ContentWrapper>
      </Container>
    </div>
  );
};

export default Servcies;
