import { useRef } from "react";
import "../styles/blogList.css";

const TagButton = ({ tag, pressHandler }) => {
  const buttonRef = useRef(null);
  const onClickHandler = () => {
    toggleActive();
    pressHandler(tag);
  };

  function toggleActive() {
    if (buttonRef.current) {
      buttonRef.current.classList.toggle("active");
    }
  }

  return (
    <button ref={buttonRef} className="tag-button" onClick={onClickHandler}>
      {tag}
    </button>
  );
};

export default TagButton;
