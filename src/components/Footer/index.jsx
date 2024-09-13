import React from "react";
import styles from "./footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.copyright}>&copy; 2024 Tess Bazin</h4>
      <NavLink to="/Mentions">Mentions Légales</NavLink>
    </footer>
  );
};

export default Footer;
//
