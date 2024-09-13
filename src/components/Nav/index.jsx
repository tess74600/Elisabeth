import React, { useState } from "react";
import styles from "./nav.module.scss";
import { NavLink } from "react-router-dom";
import Hamburger from "hamburger-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className={styles.nav}>
        <div
          className={
            isOpen ? `${styles.navLeft} ${styles.opened}` : styles.navLeft
          }
        >
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? `${styles.navActive}` : "")}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/About"
            className={(nav) => (nav.isActive ? `${styles.navActive}` : "")}
            onClick={() => setIsOpen(false)}
          >
            Qui suis-je?
          </NavLink>
          <NavLink
            to="/Presentation"
            className={(nav) => (nav.isActive ? `${styles.navActive}` : "")}
            onClick={() => setIsOpen(false)}
          >
            Pourquoi l'hypnose?
          </NavLink>
          <NavLink
            to="/Contact"
            className={(nav) => (nav.isActive ? `${styles.navActive}` : "")}
            onClick={() => setIsOpen(false)}
          >
            Informations pratiques
          </NavLink>
          <NavLink
            to="/Testimonies"
            className={(nav) => (nav.isActive ? `${styles.navActive}` : "")}
            onClick={() => setIsOpen(false)}
          >
            Témoignages
          </NavLink>
        </div>
        <div className={styles.hamburgerReact}>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            className={styles.burgerMenu}
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
