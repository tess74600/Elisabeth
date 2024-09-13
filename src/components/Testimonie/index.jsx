import React from "react";
import styles from "./testimonieCard.module.scss";
const TestimonieCard = ({ card }) => {
  console.log(card.author, card.message, card.date);
  return (
    <li className={styles.testimonieCardContainer}>
      <h2>{card.author}</h2>
      <h4>
        <i>Publié le: {card.date}</i>
      </h4>
      <p>{card.message}</p>
    </li>
  );
};

export default TestimonieCard;
