import React from "react";
import styles from "./globalContainer.module.scss";
const GlobalContainer = ({ children }) => {
  return <div className={styles.globalContainer}>{children}</div>;
};

export default GlobalContainer;
