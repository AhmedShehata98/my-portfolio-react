import React, { Fragment, useContext, useState } from "react";
import styles from "../../scss/pages/contacts/Form/form.module.css";
import { siteDataCtx } from "../../contexts/dataContentContext";
import Col from "../layout/Col";
import Row from "../layout/Row";
import useForm from "../../hooks/useForm";
import useFetch from "../../hooks/useFetch";

function Form() {
  let [firstName, bindFirstName, resetFirstName] = useForm("");
  let [LastName, bindLastName, resetLastName] = useForm("");
  let [Subject, bindSubject, resetSubject] = useForm("");
  let [Message, bindMessage, resetMessage] = useForm("");
  let url = "https://submit-form.com/LlCsjZCe";
  let body = JSON.stringify({
    message: `Welcome - and I'am : ${firstName} ${LastName} , The subject is =>${
      Subject === undefined || Subject === ""
        ? "clinet isnt enterd subject its empty"
        : Subject
    } and my Message is ${
      Message === undefined || Message === ""
        ? "clinet isnt enterd message it's empty"
        : Message
    }`,
  });

  let { isLoading, startSend } = useFetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body,
  });

  function handleSubmit(e) {
    e.preventDefault();
    startSend();
  }

  const {
    languages: {
      contacts: {
        form: {
          form_fields: { firstField, secondField, thirdField, fourthField },
          buttons: { btn_1, btn_2 },
        },
      },
    },
  } = useContext(siteDataCtx);
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className={styles["form"]}
      action=""
    >
      <Row>
        <Col col_count="6">
          <label className="form-label"> {firstField}</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder={`${firstField}...`}
            {...bindFirstName}
          />
        </Col>
        <Col col_count="6">
          <label className="form-label"> {secondField}</label>
          <input
            className="form-control"
            type="text"
            name="LastName"
            placeholder={`${secondField}...`}
            {...bindLastName}
          />
        </Col>
        <Col col_count="12">
          <label htmlFor="subjectField" className="form-label mt-2">
            {" "}
            {thirdField}
          </label>
          <input
            className="form-control"
            type="search"
            name="subject"
            id="subjectField"
            {...bindSubject}
          />
        </Col>
      </Row>
      <Row>
        <Col col_count="12">
          <textarea
            className={`${styles["messageArea"]} form-control`}
            // type="text"
            placeholder={fourthField + "..."}
            {...bindMessage}
          ></textarea>
        </Col>
      </Row>
      <Row class_list="justify-content-around">
        {isLoading === true ? (
          <Fragment>
            <Col class_list="col-12 col-md-5">
              <button className={styles["sendButton"]} type="submit">
                {btn_1}
              </button>
            </Col>
            <Col class_list="col-12 col-md-5">
              <button
                className={styles["resetButton"]}
                type="reset"
                onClick={() => {
                  resetFirstName();
                  resetLastName();
                  resetSubject();
                  resetMessage();
                }}
              >
                {btn_2}
              </button>
            </Col>
          </Fragment>
        ) : (
          <div>Success !</div>
        )}
        {/* <Col class_list="col-12 col-md-5">
          <button className={styles["sendButton"]} type="submit">
            {btn_1}
          </button>
        </Col>
        <Col class_list="col-12 col-md-5">
          <button
            className={styles["resetButton"]}
            type="reset"
            onClick={() => {
              resetFirstName();
              resetLastName();
              resetSubject();
              resetMessage();
            }}
          >
            {btn_2}
          </button>
        </Col> */}
      </Row>
    </form>
  );
}

export default Form;
