import React from "react";
import styles from "./partage.module.scss";
import { useForm } from "react-hook-form";
const Partage = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { firstname: "", name: "", email: "", message: "" },
  });
  //   const onSubmit = (data) => {
  //     const templateParams = {
  //       name: data.name,
  //       firstname: data.firstname,
  //       email: data.email,
  //       message: data.message,
  //     };
  //   };
  return (
    <div className={styles.partageContainer}>
      <form className={styles.form}>
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
        <input type="date" name="date" id="" {...register("date")} />
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
    </div>
  );
};

export default Partage;
