import React from "react";
import styles from "./button.module.scss";
import classNames from "classnames";
const Button = ({ children, width = "S", type = "button" }) => {
  return (
    <button type={type} className={classNames(styles.button, styles[width])}>
      {children}
    </button>
  );
};

export default Button;
