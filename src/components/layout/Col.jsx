import React from "react";
import "../../scss/layout/grid-system.css";

const Col = ({ children, class_list, col_count }) => {
  let _class = [`col${col_count !== undefined && "-" + col_count}`];
  if (class_list !== undefined) {
    _class.unshift(class_list);
  }

  return (
    <div
      className={_class.join(" ")}
      class_list={class_list}
      col_count={col_count}
    >
      {children}
    </div>
  );
};

export default Col;
