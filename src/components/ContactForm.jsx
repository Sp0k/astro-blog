import emailjs from "@emailjs/browser";
import { useState } from "react";
import "../styles/contactForm.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("email sent successfully", response);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("error sending email", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="emailForm">
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="name spacer"
      />
      <input
        type="text"
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="name"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email"
        required
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="message"
        rows={7}
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
