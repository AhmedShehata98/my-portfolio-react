import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/contacts/contactsBoxes/contactsBoxes.module.css";

function ContactsBoxes() {
  const {
    contacts: {
      contactsBoxes: { email, phonesNumbers, linkedIN, facebook, address },
    },
  } = useContext(siteDataCtx);
  return (
    <ul className={styles["contacts-wrapper"]}>
      <li className={styles["box-wrapper"]}>
        <span className={styles["icon"]}>
          <i className="bi bi-envelope-check-fill"></i>
        </span>
        <p className={styles["name"]}>{email}</p>
      </li>

      <li className={styles["box-wrapper"]}>
        <span className={styles["icon"]}>
          <i className="bi bi-whatsapp"></i>
        </span>
        <p className={styles["name"]}>{phonesNumbers[0]}</p>
        <span className={styles["icon"]}>
          <i className="bi bi-telephone-forward-fill"></i>
        </span>
        <p className={styles["name"]}>{phonesNumbers[1]}</p>
      </li>

      <li className={styles["box-wrapper"]}>
        <span className={styles["icon"]}>
          <i className="bi bi-linkedin"></i>
        </span>
        <p className={styles["name"]}>{linkedIN}</p>
      </li>

      <li className={styles["box-wrapper"]}>
        <span className={styles["icon"]}>
          <i className="bi bi-facebook"></i>
        </span>
        <p className={styles["name"]}>{facebook}</p>
      </li>

      <li className={styles["box-wrapper"]}>
        <span className={styles["icon"]}>
          <i className="bi bi-compass-fill"></i>
        </span>
        <p className={styles["name"]}>{address}</p>
      </li>
    </ul>
  );
}

export default ContactsBoxes;
