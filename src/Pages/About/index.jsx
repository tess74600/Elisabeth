import React from "react";
import styles from "./about.module.scss";

//IMG
import leftImg from "./assets/photo.jpg";
import leftImgBG from "./assets/photoNB.jpg";
import logo from "./assets/logoarche.png";
import logo2 from "./assets/logoArche2.png";

const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.left}>
          <img src={leftImg} id={styles.leftImg} />
          {/* <img src={leftImgBG} id={styles.leftImg} /> */}
        </div>
        <div className={styles.right}>
          <div className={styles.rightContent}>
            <h2>Qui suis-je?</h2>
            <p>
              J’ai découvert l’hypnose au cours du printemps 2020 – en plein
              confinement. Alors enceinte de mon troisième enfant, la sage-femme
              qui m’accompagnait m’a proposé des séances d’hypnose à distance.
              Les techniques qu’elle m’a transmises, notamment d’auto-hypnose,
              m’ont accompagnée jusqu’à mon accouchement, dans ce contexte si
              particulier d’un accouchement en période COVID. Ce fut mon premier
              contact avec l’hypnose, qui, depuis a pris de plus en plus de
              place dans ma vie, à tel point que j’ai décidé de me former en
              profondeur à l’ARCHE (Académie pour la Recherche et la
              Connaissance en Hypnose Ericksonienne) pour en faire mon métier.
            </p>

            {/* <img src={logo} id={styles.logoImg} /> */}
            <img src={logo2} id={styles.logoImg} alt="logo Arche" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
