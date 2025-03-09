import React from "react";
import styles from "./about.module.scss";

//IMG
import leftImg from "./assets/photo.jpg";
import logo from "./assets/LogoSDMH.png";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.left}>
        <img src={leftImg} alt="portrait de la praticienne" />
      </div>
      <div className={styles.right}>
        <div className={styles.rightContent}>
          <h2>Qui suis-je?</h2>
          <p>
            J’ai découvert l’hypnose au cours du printemps 2020 – en plein
            confinement. Alors enceinte de mon troisième enfant, la sage-femme
            qui m’accompagnait m’a proposé des séances d’hypnose à distance. Les
            techniques qu’elle m’a transmises, notamment d’auto-hypnose, m’ont
            accompagnée jusqu’à mon accouchement, dans ce contexte si
            particulier d’un accouchement en période COVID. Ce fut mon premier
            contact avec l’hypnose qui, depuis, a pris de plus en plus de place
            dans ma vie. <br /> <br /> J’ai commencé à me former plus
            spécifiquement à l’auto-hypnose, avant d’entamer un cursus complet à
            l’ARCHE (Académie pour la Recherche et la Connaissance en Hypnose
            Ericksonienne) pour en faire aujourd’hui mon métier. <br /> <br />
            Intéressée au niveau personnel par les thématiques liées aux
            <b> troubles du sommeil</b> - tant au niveau des adultes que des
            enfants - et à la gestion de l'
            <b>
              <u> anxiété</u>
            </b>
            , je me suis spécialisée dans ces deux champs d'accompagnement ainsi
            que dans l’accompagnement des femmes autour des sujets de la
            <b> périnatalité</b> (projet de natalité, accompagnement à la
            naissance et post-partum).
          </p>

          <h2>Formations:</h2>
          <ul>
            <li> Praticienne en Hypnose Ericksonienne (ARCHE)</li>
            <li> Hypnose et périnatalité (ARCHE)</li>
            <li> Hypnose et gestion de l’anxiété (Psynapse)</li>
            <li>Hypnose et sommeil (Psynapse)</li>
            <li> Auto-hypnose (IFHE)</li>
          </ul>

          <div className={styles.logosContainer}>
            <img src={logo} alt="logo SDMH" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
