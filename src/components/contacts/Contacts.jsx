import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/contacts/contacts/contacts.module.css";
import Container from "../layout/Container";
import SectionHeader from "../layout/SectionHeader";
import ContentWrapper from "../layout/ContentWrapper";
import Row from "../layout/Row";
import Col from "../layout/Col";
import Form from "../contacts/Form";
import ContactsBoxes from "../contacts/ContactsBoxes";

function Contacts() {
  const {
    languages: {
      contacts: {
        header: { iconName, title, subTitle },
      },
    },
  } = useContext(siteDataCtx);

  return (
    <div className={styles.contacts} id="contacts">
      <Container>
        <SectionHeader iconName={iconName} title={title} subTitle={subTitle} />
        <ContentWrapper borderClr={false}>
          <Row>
            <Col class_list="col-12 col-md-6">
              <Form />
            </Col>
            <Col class_list="col-12 col-md-5">
              <ContactsBoxes />
            </Col>
          </Row>
        </ContentWrapper>
      </Container>
    </div>
  );
}

export default Contacts;
