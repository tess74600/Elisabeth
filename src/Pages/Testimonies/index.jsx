import React from "react";
import styles from "./testimonies.module.scss";
import TestimonieCard from "../../components/Testimonie";
import { NavLink } from "react-router-dom";
import { cards } from "./cardData";
const Testimonies = () => {
  return (
    <>
      <div className={styles.testimoniesContainer}>
        <div className={styles.testimoniesTitle}>
          <h2>Témoignages</h2>
          <NavLink to="/Partage">
            <button>Partager votre témoignage</button>
          </NavLink>
        </div>
        <div className={styles.testimonies}>
          <ul>
            {cards
              .sort((a, b) => b.id - a.id)
              .map((card) => (
                <TestimonieCard key={card.id} card={card} />
              ))}
          </ul>
        </div>
      </div>
      <h2 className={styles.googleTitle}>Témoignages Google</h2>
      <div
        className={styles.googleTestimonies}
        data-trustmary-widget="OBFfZmpgF"
      ></div>
    </>
  );
};

export default Testimonies;
