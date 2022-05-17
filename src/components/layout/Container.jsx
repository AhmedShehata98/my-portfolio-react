import React from "react";
import styles from "../../scss/layout/container.module.css";

const Container = (props) => {
  return (
    <div
      className={
        props.container_type !== undefined
          ? styles["container-fluid"]
          : styles["container"]
      }
      container_type={props.container_type}
    >
      {props.children}
    </div>
  );
};

export default Container;
