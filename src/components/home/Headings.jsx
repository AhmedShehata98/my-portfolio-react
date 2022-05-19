import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/home/Headings/headings.module.css";
import HireButton from "./HireButton";

const Headings = () => {
  const siteData = useContext(siteDataCtx);
  let {
    languages: {
      home_page: { headding, sub_headding },
    },
  } = siteData;

  return (
    <div className={styles["heading-box"]}>
      <h3 className={`${styles["heading"]} `}>{headding}</h3>
      <h5 className={`${styles["sub-heading"]} display-6`}>{sub_headding}</h5>
      <HireButton />
    </div>
  );
};

export default Headings;
