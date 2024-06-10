import React, { useState } from "react";
import BlogView from "./BlogView";
import TagButton from "./TagButton";

const BlogList = ({ posts, tags }) => {
  return (
    <div>
      <TagButton tag="ssh" />
      {posts.map((post) => (
        <BlogView
          title={post.data.title}
          description={post.data.description}
          url={post.slug}
          image={post.data.image}
        />
      ))}
      {tags.tag}
    </div>
  );
};

export default BlogList;
