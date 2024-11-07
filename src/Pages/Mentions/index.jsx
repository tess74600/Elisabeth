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
          <li>Nom : OVH</li>
          <li>Raison sociale : OVH SAS</li>
          <li>Adresse : 2 rue Kellermann, 59100 Roubaix, France</li>
          <li>Téléphone : +33 9 72 10 10 07</li>
          <li>
            Site Web :
            <a href="https://www.ovh.com" target="_blank">
              www.ovh.com
            </a>
          </li>
          <li>Capital social : 10 174 560 €</li>
          <li>RCS Lille Métropole 424 761 419 00045</li>
          <li>Code APE : 2620Z</li>
          <li>N° TVA : FR 22 424 761 419</li>
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
          Le contenu de ce site (textes, images, graphismes, logo, icônes, etc.)
          est la propriété exclusive d'Elisabeth Fournier ou est utilisé avec
          l'autorisation des titulaires des droits. Il est protégé par les lois
          en vigueur sur la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, distribution, modification, adaptation,
          retransmission ou publication, même partielle, de ces différents
          éléments est strictement interdite sans l'accord écrit préalable d'
          Elisabeth Fournier.
        </p>
      </div>
      <div>
        <h3>Données personnelles</h3>
        <p>
          Les informations recueillies via le formulaire de contact sont
          strictement destinées à répondre à vos demandes. Elles sont traitées
          de manière confidentielle et ne sont pas partagées avec des tiers sans
          votre consentement explicite.
        </p>
        <p>
          Conformément au Règlement général sur la protection des données
          (RGPD), vous disposez d’un droit d’accès, de rectification, de
          suppression, ainsi que du droit à la limitation du traitement et à la
          portabilité des données vous concernant. Vous pouvez exercer ces
          droits en nous contactant par e-mail à{" "}
          <a href="mailto:elisabethfournier@outlook.com">
            elisabethfournier@outlook.com
          </a>
        </p>
        <p>
          Vos données sont conservées pendant une durée maximale de 1an à
          compter de votre dernier contact. Vous pouvez également introduire une
          réclamation auprès de la CNIL (Commission Nationale de l'Informatique
          et des Libertés) si vous estimez que vos droits ne sont pas respectés.
        </p>
      </div>
    </div>
  );
};

export default Mentions;
