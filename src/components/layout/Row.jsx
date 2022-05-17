import React from "react";
import "../../scss/layout/grid-system.css";

const Row = ({ children, class_list }) => {
  let _class = "row";
  if (class_list !== undefined) {
    _class = _class + " " + class_list;
  } else {
    _class = _class;
  }

  return (
    <div className={_class} class_list={class_list}>
      {children}
    </div>
  );
};

export default Row;
