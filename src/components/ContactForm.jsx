import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_iu4kme9", "template_kepa9o8", form.current, {
        publicKey: "9eg31SGGnOYt6jxnF",
      })
      .then(
        () => {
          console.log("Success!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        id="firstName"
        name="user_firstname"
        placeholder="First name"
        required
      />
      <input
        type="text"
        id="lastName"
        name="user_lastname"
        placeholder="Last name"
        required
      />
      <input
        type="email"
        name="user_email"
        id="email"
        placeholder="Email"
        required
      />
      <textarea name="message" id="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
