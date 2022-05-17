import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/home/hireButton/hireButton.module.css";

const HireButton = () => {
  const siteData = useContext(siteDataCtx);
  const {
    home_page: { hire_Button },
  } = siteData;

  return (
    <button className={`${styles["hire-button"]} btn`} type="button">
      {hire_Button}
    </button>
  );
};

export default HireButton;
