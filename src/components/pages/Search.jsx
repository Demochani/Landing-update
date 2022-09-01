import React from "react";
import NavBar from "../NavBar";
import PostItem from "../PostItem";

const Search = () => {
  return (
    <div className="search-posts-container">
      <hr style={{ margin: "20px 0 15px 0", color: "#C0C0C0" }} />
      <strong style={{ margin: "10px 0 0 4%", color: "#C0C0C0" }}>
        INTERESTING
      </strong>
      <div className="search-posts">
        {posts.filter(
          post => post.title.toLowerCase().includes(postQuery)//
        ).map((post, index) => (
          <PostItem number={index + 1} post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default Search;
