import React from "react";
import styles from "./testimonies.module.scss";
// import axios from "axios";
import TestimonieCard from "../../components/Testimonie";
import { NavLink } from "react-router-dom";
const Testimonies = () => {
  const cards = [
    {
      id: 1,
      author: "Didier Arrufat",
      date: "septembre 2024",
      message:
        "Intéressé par le principe de l'hypnose, j'ai eu l'occasion de l'expérimenter avec cette praticienne qui prend le temps d'expliquer et de mettre en confiance avec des résultats très intéressants au final. Je recommande vivement!",
    },
    {
      id: 2,
      author: "Maud B",
      date: "septembre 2024",
      message:
        "Elizabeth sait mettre à l'aise et se pose délicatement à sa juste place pour nous permettre de se recentrer sur soi en toute quiétude.Je la recommande vivement.",
    },
  ];

  return (
    <div className={styles.testimoniesContainer}>
      <div className={styles.testimoniesTitle}>
        <h2>Témoignages</h2>
        <NavLink to="/Partage">
          <button>Partager votre témoignage</button>
        </NavLink>
      </div>
      <div className={styles.testimonies}>
        <ul>
          {cards.map((card) => (
            <TestimonieCard key={card.id} card={card} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonies;
