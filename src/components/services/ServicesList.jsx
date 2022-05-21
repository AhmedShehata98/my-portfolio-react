import React from "react";
import { nanoid } from "nanoid";

const ServicesList = ({ services, styles }) => {
  return (
    <ul className={styles["servciesList-wrapper"]}>
      {services.map(({ serviceName, serviceIcon, serviceDescription }) => {
        return (
          <li className={styles["service"]} key={nanoid(6)}>
            <div className={styles.icon}>
              <span>
                <i className={serviceIcon}></i>
              </span>
            </div>
            <div className={styles["box-overlay"]}></div>
            <div className={styles["content-body"]}>
              <h3 className={styles["name"]}>{serviceName}</h3>
              <p className={styles["description"]}>{serviceDescription}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ServicesList;
