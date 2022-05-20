import React, { useContext, useState } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/contacts/contactsBoxes/contactsBoxes.module.css";

function ContactsBoxes() {
  const {
    languages: { lang },
  } = useContext(siteDataCtx);
  const {
    languages: {
      contacts: { contactsBoxes },
    },
  } = useContext(siteDataCtx);

  let contacts = contactsBoxes.map(({ itemLabel, iconName }) => {
    return (
      <li className={styles["box-wrapper"]}>
        <span className={styles["icon"]}>
          <i className={iconName}></i>
        </span>
        <p className={styles["name"]}>{itemLabel}</p>
      </li>
    );
  });

  return <ul className={styles["contacts-wrapper"]}>{contacts}</ul>;
}

export default ContactsBoxes;
