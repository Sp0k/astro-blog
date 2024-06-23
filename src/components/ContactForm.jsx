import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";
import "../styles/contactForm.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const MAX_NAME_LENGTH = 50;
  const MAX_MESSAGE_LENGTH = 2000;
  const ids = ["firstName", "lastName", "email", "message"];

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    for (let i = 0; i < ids.length; i++) {
      const elem = document.getElementById(ids[i]);
      elem.classList.remove("container-error");
    }

    if (firstName && firstName.length > MAX_NAME_LENGTH) {
      formErrors.names = `Names must be under ${MAX_NAME_LENGTH} characters`;
      document.getElementById("firstName").classList.toggle("container-error");
      valid = false;
    }

    if (lastName && lastName.length > MAX_NAME_LENGTH) {
      formErrors.names = `Names must be under ${MAX_NAME_LENGTH} characters`;
      document.getElementById("lastName").classList.toggle("container-error");
      valid = false;
    }

    if (!email.trim()) {
      formErrors.email = "Email is required";
      document.getElementById("email").classList.toggle("container-error");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
      document.getElementById("email").classList.toggle("container-error");
      valid = false;
    }

    if (!message.trim()) {
      formErrors.message = "Message is required";
      document.getElementById("message").classList.toggle("container-error");
      valid = false;
    } else if (message && message.length > MAX_MESSAGE_LENGTH) {
      formErrors.message = `Message should be under ${MAX_MESSAGE_LENGTH} characters`;
      document.getElementById("message").classList.toggle("container-error");
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_iu4kme9";
    const templateId = "template_9erq04q";
    const publicKey = "9eg31SGGnOYt6jxnF";

    const templateParams = {
      user_firstname: firstName,
      user_lastname: lastName,
      user_email: email,
      message: message,
    };

    if (validateForm()) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("email sent successfully", response);
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setErrors({});
        })
        .catch((error) => {
          console.log("error sending email", error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="emailForm">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="name spacer"
        id="firstName"
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="name"
        id="lastName"
      />
      {(firstName || lastName) && <p className="error">{errors.names}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email"
        id="email"
      />
      {errors.email && <p className="error">{errors.email}</p>}
      <div className="textarea-container" id="message">
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="message"
          rows={7}
        ></textarea>
        <span className="char-count">
          {message.length}/{MAX_MESSAGE_LENGTH}
        </span>
      </div>
      {errors.message && <p className="error">{errors.message}</p>}
      <p className="consideration">
        Please include your contact information when you write me :)
      </p>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
