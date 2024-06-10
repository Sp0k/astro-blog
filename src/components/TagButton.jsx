import React, { useRef } from "react";
import "../styles/blogList.css";

const TagButton = ({ tag }) => {
  const buttonRef = useRef(null);
  const pressHandler = () => toggleActive();

  function toggleActive() {
    if (buttonRef.current) buttonRef.current.classList.toggle("active");
  }

  return (
    <button ref={buttonRef} id={tag} class="tag-button" onClick={pressHandler}>
      {tag}
    </button>
  );
};

export default TagButton;
