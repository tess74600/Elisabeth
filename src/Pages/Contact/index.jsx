import React, { useState } from "react";
import styles from "./contact.module.scss";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

//IMG
import centralImg from "./assets/contactImg.jpg";

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
          <p>
            Je me déplace à votre domicile les lundis, mardis, jeudis de 9h à
            15h et les vendredis de 9h à 18h sur un périmètre géographique
            couvrant Lyon 1, Lyon 2, Lyon 3 et Lyon 6 .
          </p>
          <p className={styles.infosPrix}>
            Le tarif d’une séance (1h) est de 70 euros.
          </p>
          <p>Réglement par chèques ou espèces.</p>
          <p>
            Les séances ne sont pas remboursées par la Sécurité Sociale,
            certaines mutuelles peuvent néanmoins les prendre en charge au titre
            de la prise en charge des médecines douces ou alternatives.
          </p>
        </div>
        <div className={styles.contact}>
          <h2>Formulaire de contact</h2>
          <p>
            Je me tiens à votre disposition via le formulaire ci-dessous ainsi
            que par téléphone au{" "}
            <a href="tel:0664427229" className={styles.tel}>
              {" "}
              06 64 52 72 29
            </a>
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
            <button type="submit">Envoyer</button>
          </form>
          <p className={styles.formMessage}>{formMess}</p>
        </div>
      </div>
      <div className={styles.centralImgContainer}>
        <img src={centralImg} id={styles.centralImg} />
      </div>
    </>
  );
};

export default Contact;
