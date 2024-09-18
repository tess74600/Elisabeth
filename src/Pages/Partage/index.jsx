import React from "react";
import styles from "./partage.module.scss";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const Partage = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { firstname: "", name: "", date: "", message: "" },
  });
  let [formMess, setFormMess] = useState("");

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      firstname: data.firstname,
      message: data.message,
    };
    console.log(templateParams);
    emailjs
      .send("service_hvl03lp", "template_xwnkpde", templateParams, {
        publicKey: "_aKAe_6v1I2JnKaaA",
      })
      // .send("service_h6sm2xb", "template_a62mzem", templateParams, {
      //   publicKey: "k9LqZB7VX6YvIXYpv",
      // })
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
    <div className={styles.partageContainer}>
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
        {/* <input type="date" name="date" id="" {...register("date")} /> */}
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
  );
};

export default Partage;
