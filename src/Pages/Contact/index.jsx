import React, { useState } from "react";
import styles from "./contact.module.scss";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

//IMG
import centralImg from "./assets/contactImg.jpg";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm({
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

    emailjs
      .send("service_hvl03lp", "template_xwnkpde", templateParams, {
        publicKey: "_aKAe_6v1I2JnKaaA",
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

  // const [onFocus, setOnFocus]= useState(false)
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.infos}>
          <h2>Informations pratiques</h2>
          <p>
            Je me déplace à votre domicile les lundis, mardi, jeudis et
            vendredis – sur un périmètre géographique couvrant Lyon 1, Lyon 6 et
            Lyon 3.
          </p>
          <p className={styles.infosPrix}>
            Le tarif d’une séance est de<span>70 euros</span>.
          </p>
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
              {...register("email", { required: "Votre mail est demandé" })}
            />
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
      <img src={centralImg} id={styles.centralImg} />
    </>
  );
};

export default Contact;
