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
              Améliorer son sommeil, dépasser un trouble anxieux, comprendre un
              comportement, le modifier, traverser une émotion, travailler sur
              une peur, une angoisse, apprendre à gérer un stress, à se
              connecter à l’instant présent, être accompagnée pendant une
              grossesse… Les champs de l’hypnose sont vastes ! <br /> <br />
              Nous expérimentons toutes et tous, au cours d’une journée, un ou
              plusieurs états de conscience modifié – d’hypnose : lorsque nous
              partons dans nos pensées, que nous perdons la notion du temps qui
              passe, que nous fixons un point ou une personne sans nous en
              rendre compte etc.. Plonger dans un état d’hypnose en séance se
              révèle souvent être comme se replonger dans un état qui nous est
              familier sans que nous en soyons conscient.
              <br /> <br />
              Cet état, recréé au cours d’une séance, permet de laisser notre
              part consciente – en générale si active – faire un pas de côté
              pour ouvrir un espace qui permet de se connecter à d’autres
              ressources qui nous constituent et accéder ainsi à de nouvelles
              perspectives, de nouvelles compréhensions et de nouveaux
              apprentissages. <br />
              L’hypnose redonne du contrôle sur nos fonctionnement internes,
              c’est toute sa force.
            </p>
            <h2> Les enfants et l'hypnose</h2>
            <p>
              Les enfants sont en général réceptifs à l'hypnose: ils ont une
              capacité naturelle à se connecter à leur imagination et à leur
              créativité, ce qui leur permet de facilement naviguer entre
              plusieurs mondes, réels et imaginaires. L'hypnose est une méthode
              douce, qui leur permet de se connecter à leurs ressources, de
              mettre en place leurs propres outils pour apprendre à mieux gérer
              leurs émotions et leurs comportements.
            </p>
            <h2>Comment se déroule une séance?</h2>
            <p className={styles.espacement}>
              Les séances durent en moyenne 1 heure (35 minutes pour les
              enfants) – que cela soit au cabinet ou en visio. Elles peuvent se
              pratiquer assis ou debout. Chaque séance est individualisée: nous
              partons de vous et de votre besoin. <br /> <br /> La première
              séance est un temps d'échange autour de vous et de vos attentes
              afin de définir vos besoins et de dessiner un plan
              d'accompagnement adapté. Elle est aussi l'occasion de vous faire
              expérimenter ce que peut être un état d'hypnose au cours d'une
              séance et d’effectuer un premier travail.
            </p>{" "}
            <br />
            <p className={styles.espacement}>
              Les séances suivantes se déroulent d’une manière générale en 3
              temps:
            </p>
            <ol className={styles.espacement}>
              <li>
                Un premier temps d’échange pour refaire ensemble un point et
                définir un objectif de séance.
              </li>
              <li>
                Un second temps d’induction où je vous guide dans un état de
                conscience modifié.
              </li>
              <li>Un troisième temps qui est un temps de travail.</li>
            </ol>
            <br />
            <p className={styles.espacement}>
              Je décris souvent une séance comme un espace de cocréation: je
              suis un fil conducteur qui vous aide à vous connecter à vos
              propres ressources vous permettant, vous, de mieux vous connaître
              et de mieux comprendre quels sont vos modes de fonctionnement.
            </p>
          </div>
        </div>
        <img src={rightImg} id={styles.rightImg} alt="fleur" />
      </div>
    </>
  );
};

export default Presentation;
