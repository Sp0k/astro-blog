import "../styles/blogList.css";

const BlogView = ({ title, description, url, image }) => {
  const path = "/posts/" + url;

  return (
    <div className="container">
      <div className="inner-container">
        <div className="blog-title">{title}</div>
        <div className="blog-description">{description}</div>
        <a href={path} className="blog-button">
          Read more >
        </a>
      </div>
      <img src={image.url} alt={image.src} className="blog-image" />
    </div>
  );
};

export default BlogView;
