import React, { useContext } from "react";
import styles from "../../scss/pages/potfolio/portfolioList/PortfolioList.module.css";
import { siteDataCtx } from "../../contexts/dataContentContext";
import { nanoid } from "nanoid";

export const PortfolioList = () => {
  const {
    languages: {
      portfolio: { projects },
    },
  } = useContext(siteDataCtx);

  let projectsList = projects.map(
    ({ projectIMG, name, discription, sourceLink, demoLink }, index) => {
      return (
        <li className={styles.projectBox} key={nanoid(6)}>
          <img src={projectIMG} alt={`project-perview-image #${index}`} />
          <div className={styles.DescriptionWrapper}>
            <div className={styles.projectDescription}>
              <h4 className={styles.projectName}>{name}</h4>
              <p className={styles.projectSubName}>{discription}</p>
            </div>
          </div>
          <div className={styles.links}>
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
            <a href={sourceLink} target="_blank" rel="noopener noreferrer">
              <i className="bi bi-git"></i>
            </a>
          </div>
        </li>
      );
    }
  );

  return <ul className={styles.stylesList_wrapper}>{projectsList}</ul>;
};
export default PortfolioList;
