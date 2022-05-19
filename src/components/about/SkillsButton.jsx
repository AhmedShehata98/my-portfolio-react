import React, { useContext } from "react";

import { siteDataCtx } from "../../contexts/dataContentContext";

function SkillsButton({ styles }) {
  let {
    languages: {
      about: { button },
    },
  } = useContext(siteDataCtx);
  return (
    <a href="#Skills">
      <button className={`${styles.SkillsButton} btn`} type="button">
        {button}
      </button>
    </a>
  );
}

export default SkillsButton;
