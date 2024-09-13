import React from "react";
import styles from "./presentation.module.scss";

//IMG
import rightImg from "./assets/rightImg1.jpg";

const Presentation = () => {
  return (
    <>
      <div className={styles.presentationContainer}>
        <div className={styles.left}>
          <div className={styles.leftContent}>
            <h2>Qu'est-ce que l'hypnose et à quoi peut-elle servir?</h2>
            <p>
              Comprendre un comportement, le modifier, traverser une émotion,
              travailler sur une peur, une angoisse, apprendre à gérer un
              stress, à se connecter à l’instant présent, être accompagnée
              pendant une grossesse, ancrer un état de concentration… Les champs
              de l’hypnose sont vastes et c’est un outil qui parle avant tout de
              celle ou celui qui traverse cette expérience. Nous expérimentons
              toutes et tous, au cours d’une journée, un ou plusieurs états de
              conscience modifié – d’hypnose : lorsque nous partons dans nos
              pensées, que nous perdons la notion du temps qui passe, que nous
              fixons un point ou une personne sans nous en rendre compte etc..
              Plonger dans un état d’hypnose en séance se révèle souvent être
              comme se replonger dans un état qui nous est familier sans que
              nous en soyons conscient. L’hypnose est, à mes yeux, un formidable
              outil permettant de laisser notre part consciente – en générale si
              active – faire un pas de côté pour ouvrir un espace qui permet de
              se connecter à d’autres ressources qui nous constituent et accéder
              ainsi à de nouvelles perspectives, de nouveaux apprentissages.
            </p>
            <h2>Comment se déroule une séance?</h2>
            <p>
              Les séances durent en moyenne 1 heure. Elles peuvent se pratiquer
              assis ou debout. Chaque séance est individualisée: nous partons de
              vous et de votre besoin. Elles se déroulent d’une manière générale
              en 3 temps: un premier temps d’échange autour de votre
              problématique, un second temps d’induction où je vous guide dans
              un état de conscience modifié et un troisième temps qui est un
              temps de travail. Je décris souvent une séance comme un espace de
              cocréation: je suis un fil conducteur qui vous aide à vous
              connecter à vos propres ressources, à mieux comprendre quels sont
              vos modes de fonctionnement, à mieux vous connaître.
              {/* Dans cet espace-là nous restons toujours en contact verbalement au
              cours d’une séance, les échanges ne sortent pas d’un état
              d’hypnose – au contraire. */}
            </p>
          </div>
        </div>
        <img src={rightImg} id={styles.rightImg} />
      </div>
    </>
  );
};

export default Presentation;
