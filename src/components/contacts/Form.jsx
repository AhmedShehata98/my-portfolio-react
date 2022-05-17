import React, { useContext } from "react";
import styles from "../../scss/pages/contacts/Form/form.module.css";
import { siteDataCtx } from "../../contexts/dataContentContext";
import Col from "../layout/Col";
import Row from "../layout/Row";

function Form() {
  const {
    contacts: {
      form: {
        form_fields: { firstField, secondField, thirdField, fourthField },
        buttons: { btn_1, btn_2 },
      },
    },
  } = useContext(siteDataCtx);
  return (
    <form className={styles["form"]} action="">
      <Row>
        <Col col_count="6">
          <label className="form-label"> {firstField}</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder={`${firstField}...`}
          />
        </Col>
        <Col col_count="6">
          <label className="form-label"> {secondField}</label>
          <input
            className="form-control"
            type="text"
            name="LastName"
            placeholder={`${secondField}...`}
          />
        </Col>
        <Col col_count="12">
          <label className="form-label mt-2"> {thirdField}</label>
          <input className="form-control" type="search" name="" id="" />
        </Col>
      </Row>
      <Row>
        <Col col_count="12">
          <textarea
            className={`${styles["messageArea"]} form-control`}
            // type="text"
            placeholder={fourthField + "..."}
          ></textarea>
        </Col>
      </Row>
      <Row class_list="justify-content-around">
        <Col class_list="col-12 col-md-5">
          <button className={styles["sendButton"]} type="button">
            {btn_1}
          </button>
        </Col>
        <Col class_list="col-12 col-md-5">
          <button className={styles["resetButton"]} type="reset">
            {btn_2}
          </button>
        </Col>
      </Row>
    </form>
  );
}

export default Form;
