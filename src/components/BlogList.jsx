import { useState } from "react";
import BlogView from "./BlogView";
import TagButton from "./TagButton";

const BlogList = ({ posts, tags }) => {
  const [list, setList] = useState([...posts]);
  const [active, setActive] = useState([]);

  function addActive(tag) {
    const tmp = active;
    tmp.push(tag);
    setActive(tmp);
  }

  function removeActive(tag) {
    const tmp = active;
    const index = tmp.indexOf(tag);
    if (index > -1) {
      tmp.splice(index, 1);
    }
    setActive(tmp);
  }

  const pressHandler = (tag) => {
    active.includes(tag) ? removeActive(tag) : addActive(tag);
    filterByTag();
  };

  const filterByTag = () => {
    if (active.length === 0) setList([...posts]);
    else {
      const tmp = [...posts];
      for (let i = 0; i < active.length; i++) {
        for (let j = 0; j < tmp.length; j++) {
          if (!tmp[j].data.tags.includes(active[i])) {
            tmp.splice(j, 1);
            j--;
          }
        }
      }

      setList([...tmp]);
    }
  };

  return (
    <div className="blog-container">
      <div>
        <p className="filters">Filters:</p>
        {tags.map((tag) => (
          <TagButton tag={tag} pressHandler={pressHandler} key={tag} />
        ))}
      </div>
      <div>
        {list.map((post) => (
          <BlogView
            title={post.data.title}
            description={post.data.description}
            url={post.slug}
            image={post.data.image}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
