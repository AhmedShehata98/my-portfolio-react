import React, { Fragment, useContext } from "react";

import { siteDataCtx } from "../../contexts/dataContentContext";

function SkillsButton({ styles }) {
  let {
    languages: {
      about: { button },
    },
  } = useContext(siteDataCtx);
  return (
    <Fragment>
      <button className={`${styles.SkillsButton} btn`} type="button">
        {button}
      </button>
    </Fragment>
  );
}

export default SkillsButton;
