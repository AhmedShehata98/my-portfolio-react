import React from "react";
import styles from "../../scss/pages/home/socialMediaLinks/socialMediaLinks.module.css";

const SocialMediaLinks = () => {
  return (
    <aside className={`${styles["social-media"]} ms-5`}>
      <span className={styles["first-line"]}></span>
      <div className={styles["social-media-icons"]}>
        <span className={styles["gitub"]}>
          <a
            href="https://github.com/AhmedShehata98"
            target={"_blank"}
            title="Github"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </span>
        <span className={styles["facebook"]}>
          <a
            href="https://www.facebook.com/MidoEsquire"
            target={"_blank"}
            title="facebook"
            rel="noreferrer"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </span>
        <span className={styles["linkedIn"]}>
          <a
            href="https://www.linkedin.com/in/ahmed-shehata-b63001225/"
            target={"_blank"}
            title="linked In"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </span>
      </div>
      <span className={styles["last-line"]}></span>
    </aside>
  );
};

export default SocialMediaLinks;
