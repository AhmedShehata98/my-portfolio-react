import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import { nanoid } from "nanoid";
import styles from "../../scss/pages/contacts/contactsBoxes/contactsBoxes.module.css";

function ContactsBoxes() {
  const {
    languages: {
      contacts: { contactsBoxes },
    },
  } = useContext(siteDataCtx);

  let contacts = contactsBoxes.map(({ itemLabel, iconName }) => {
    return (
      <li className={styles["box-wrapper"]} key={nanoid(6)}>
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
