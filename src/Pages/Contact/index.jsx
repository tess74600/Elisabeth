import React, { useState } from "react";
import styles from "./contact.module.scss";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
//IMG
import centralImg from "./assets/contactImg.jpg";
import Button from "../../components/Button";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { firstname: "", name: "", email: "", message: "" },
  });
  let [formMess, setFormMess] = useState("");
  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      firstname: data.firstname,
      email: data.email,
      message: data.message,
    };
    // validerEmail(data.email);
    emailjs
      // .send("service_hvl03lp", "template_xwnkpde", templateParams, {
      //   publicKey: "_aKAe_6v1I2JnKaaA",
      // })
      .send("service_h6sm2xb", "template_a62mzem", templateParams, {
        publicKey: "k9LqZB7VX6YvIXYpv",
      })
      .then(
        () => {
          console.log("success");
          reset();
          setFormMess("Message bien envoyé");
          setTimeout(() => {
            setFormMess("");
          }, 2500);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFormMess(" Une erreur s'est produite, merci de réessayer");

          setTimeout(() => {
            setFormMess("");
          }, 2500);
        }
      );
  };

  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.infos}>
          <h2>Informations pratiques</h2>
          <p className={styles.infosPrix}>
            Le tarif d’une séance (1h) est de 70 euros. (Réglement par chèques
            ou espèces.) <br />
            <i>
              Les séances ne sont pas remboursées par la Sécurité Sociale,
              certaines mutuelles peuvent néanmoins les prendre en charge.
            </i>
          </p>
          <p>
            Je me déplace <u>à votre domicile</u> les lundis et jeudis de 9h à
            15h sur un périmètre géographique couvrant Lyon 1, Lyon 2, Lyon 3 et
            Lyon 6. <br /> Je vous accueille <u>en cabinet</u> les vendredis de
            9h à 18h et les samedis de 9h à 17h .
          </p>
          <Button width="L">
            <a
              href="https://elisabethfournier.simplybook.net/v2/"
              target="_blank"
              rel="noreferrer"
            >
              Prendre Rendez-Vous
            </a>
          </Button>
          <div className={styles.iframeDiv}>
            <span>Adresse: 49 Cours Gambetta - 69003 Lyon</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5567.725366425883!2d4.845080475901905!3d45.753898771080166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea5d34a3ad3d%3A0x8d9cd6fc3c38ea6e!2s49%20Cr%20Gambetta%2C%2069003%20Lyon!5e0!3m2!1sen!2sfr!4v1730450898769!5m2!1sen!2sfr"
              style={{ border: 1 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Adresse du cabinet"
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>Formulaire de contact</h2>
          <p>
            Je me tiens à votre disposition via le formulaire ci-dessous pour
            toute question et toute réservation de séances à domicile ainsi que
            par téléphone au
            <span>
              <a href="tel:0664427229" className={styles.tel}>
                06 64 52 72 29
              </a>
            </span>
          </p>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Nom"
              {...register("name", {
                required: "S'il-vous plaît, indiquez votre nom",
              })}
            />
            <input
              type="text"
              name="firstname"
              id=""
              placeholder="Prénom"
              {...register("firstname", {
                required: "S'il-vous plaît, indiquez votre prénom",
              })}
            />
            <input
              type="mail"
              name="email"
              id=""
              placeholder="Mail"
              // {...register("email", { required: "Votre mail est demandé" })}
              {...register("email", {
                required: "Required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  message: "Cette adresse mail n'est pas valide",
                },
              })}
            />
            <p className={styles.error}> {errors.email?.message}</p>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              {...register("message")}
            ></textarea>
            <Button type="submit" children="Envoyer" width="S" />
          </form>
          <p className={styles.formMessage}>{formMess}</p>
        </div>
      </div>

      <div className={styles.centralImgContainer}>
        <img src={centralImg} id={styles.centralImg} alt="plant" />
      </div>
    </>
  );
};

export default Contact;
