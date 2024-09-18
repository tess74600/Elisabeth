import React from "react";
import styles from "./mentions.module.scss";
const Mentions = () => {
  return (
    <div className={styles.mentionsContainer}>
      <h2>Mentions Légales</h2>
      <div>
        <h3>Editeur du site</h3>
        <ul>
          <li>Nom : Elisabeth Fournier</li>
          {/* <li>Adresse</li> */}
          <li>Téléphone: 06 64 52 72 29</li>
          <li>E-mail : elisabethfournier@outlook.com</li>
          <li>Statut professionnel : entrepreneur individuel</li>
          <li>SIRET: 93268144800019</li>
        </ul>
      </div>
      <div>
        <h3>Responsable de la publication</h3>
        <ul>
          <li>Elisabeth Fournier</li>
        </ul>
      </div>

      <div>
        <h3>Hébergement</h3>
        <ul>
          <li>Nom</li>
          <li>Adresse</li>
          <li>Téléphone</li>
        </ul>
      </div>

      <div>
        <h3>Webmaster</h3>
        <ul>
          <li>Nom : Tess BAZIN</li>
          <li>Téléphone: 06 98 27 17 74</li>
          <li>E-mail : theresebazin2016@gmail.com</li>
        </ul>
      </div>

      <div>
        <h3>Propriété intellectuelle</h3>
        <p>
          Le contenu du site est protégé par les droits d'auteur. Toute
          reproduction, totale ou partielle, est interdite sans autorisation
          préalable.
        </p>
      </div>
      <div>
        <h3>Données personnelles</h3>
        <p>
          Les données recueillies via le formulaire de contact sont destinées à
          la réponse à votre demande. Elles ne sont pas partagées avec des tiers
          sans votre consentement. Vous disposez d'un droit d'accès, de
          rectification et de suppression des données vous concernant, que vous
          pouvez exercer en nous contactant par e-mail à{" "}
          <a href="mailto:elisabethfournier@outlook.com">
            {" "}
            elisabethfournier@outlook.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Mentions;
