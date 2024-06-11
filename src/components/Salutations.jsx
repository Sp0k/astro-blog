import { useState, useEffect } from "react";
import "../styles/global.css";

const Salutations = () => {
  const [salutation, setSalutation] = useState("");

  const friends = [
    "friends",
    "amis",
    "amigos",
    "amici",
    "freunde",
    "vrienden",
    "vänner",
    "venner",
    "prieteni",
  ];

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 10);
    setSalutation(friends[randomNum]);
  }, []);

  return <b className="green">{salutation}</b>;
};

export default Salutations;
