import React, { useContext } from "react";
import { siteDataCtx } from "../../contexts/dataContentContext";
import styles from "../../scss/pages/home/Headings/headings.module.css";
import HireButton from "./HireButton";
import GitHubButton from "react-github-btn";

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
      <div className={`${styles["buttons-wrapper"]}`}>
        <HireButton />

        <div className={styles["github-btn-wrapper"]}>
          <GitHubButton
            href="https://github.com/ahmedshehata98/my-portfolio-react"
            data-color-scheme="no-preference: dark_dimmed; light: light; dark: dark_dimmed;"
            data-size="large"
            data-show-count="true"
            aria-label="Star ahmedshehata98/my-portfolio-react on GitHub"
          >
            Star
          </GitHubButton>

          <GitHubButton
            href="https://github.com/ahmedshehata98"
            data-color-scheme="no-preference: dark_dimmed; light: light; dark: dark_dimmed;"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @ahmedshehata98 on GitHub"
          >
            Follow @ahmedshehata98
          </GitHubButton>
          <GitHubButton
            href="https://github.com/ahmedshehata98/my-portfolio-react/issues"
            data-color-scheme="no-preference: dark_dimmed; light: light; dark: dark_dimmed;"
            data-size="large"
            data-show-count="true"
            aria-label="Issue ahmedshehata98/my-portfolio-react on GitHub"
          >
            Issue
          </GitHubButton>
        </div>
      </div>
    </div>
  );
};

export default Headings;
