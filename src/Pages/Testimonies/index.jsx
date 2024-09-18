import React, { useState, useEffect } from "react";
import styles from "./testimonies.module.scss";
// import axios from "axios";
import TestimonieCard from "../../components/Testimonie";
import { NavLink } from "react-router-dom";
const Testimonies = () => {
  // const [meals, setMeals] = useState([]);

  const cards = [
    {
      id: 1,
      author: "tess",
      date: "24/11/2023",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste porro tenetur dolore facere alias, voluptates dolores est provident nisi veniam consectetur eos non, impedit repudiandae dolor, voluptatem quam odit ea?",
    },
    {
      id: 2,
      author: "test",
      date: "13/03/2024",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste porro tenetur dolore facere alias, voluptates dolores est provident nisi veniam consectetur eos non, impedit repudiandae dolor, voluptatem quam odit ea?",
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
          {/* {cards.map((card) => (
            <TestimonieCard key={card.id} card={card} />
          ))} */}
          {/* {cards.map((card) => (
            <TestimonieCard key={card.id} card={card} />
          ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Testimonies;
