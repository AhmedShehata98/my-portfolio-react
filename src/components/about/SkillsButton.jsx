import React, { Fragment, useContext } from "react";
import Col from "../layout/Col";
import { siteDataCtx } from "../../contexts/dataContentContext";

function SkillsButton({ styles }) {
  let {
    about: { button },
  } = useContext(siteDataCtx);
  return (
    <Fragment>
      <button className={styles.SkillsButton + " " + "btn"} type="button">
        {button}
      </button>
    </Fragment>
  );
}

export default SkillsButton;
