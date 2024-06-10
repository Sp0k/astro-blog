import react from "react";
import "../styles/blogList.css";

const BlogView = ({ title, description, url, image }) => {
  const path = "/posts/" + url;

  return (
    <div class="container">
      <div class="inner-container">
        <div class="blog-title">{title}</div>
        <div class="blog-description">{description}</div>
        <a href={path} class="blog-button">
          Read more >
        </a>
      </div>
      <img src={image.url} alt={image.src} class="blog-image" />
    </div>
  );
};

export default BlogView;
