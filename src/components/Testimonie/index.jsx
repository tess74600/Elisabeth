import React from "react";
import styles from "./testimonieCard.module.scss";
const TestimonieCard = ({ card }) => {
  console.log(card.author, card.message, card.date);
  return (
    <li className={styles.testimonieCardContainer}>
      <div className={styles.authorContainer}>
        <h3>{card.author}</h3>
        <h4>{card.date}</h4>
      </div>
      <p>{card.message}</p>
    </li>
  );
};

export default TestimonieCard;
