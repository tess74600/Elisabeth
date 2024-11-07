import React from "react";
import styles from "./about.module.scss";

//IMG
import leftImg from "./assets/photo.jpg";
import logo from "./assets/LogoSDMH.png";
import logo2 from "./assets/logoArche.png";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.left}>
        <img src={leftImg} alt="photo de la praticienne" />
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
            contact avec l’hypnose, qui, depuis a pris de plus en plus de place
            dans ma vie, à tel point que j’ai décidé de me former en profondeur
            à l’ARCHE (Académie pour la Recherche et la Connaissance en Hypnose
            Ericksonienne) pour en faire mon métier.
          </p>
          {/* <p>
            Je suis membre du SDMH (Syndicat Des Métiers de l'Hypnose) qui a
            pour principal objectif de participer à la reconnaissance et au
            développement des métiers qui utilisent l'hypnose dans le cadre de
            l'accompagnement.
          </p> */}
          <h2>Formations:</h2>
          <ul>
            <li>Praticien en Hypnose Ericksonienne</li>
            <li>Hypnose et Périnatalité</li>
          </ul>

          <div className={styles.logosContainer}>
            <img src={logo} alt="logo SDMH" />
            <img src={logo2} alt="logo Arche" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
