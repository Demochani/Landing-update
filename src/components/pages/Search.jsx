import React, { useState } from "react";
import SearchItem from "../SearchItem";
import { usePosts } from "../hooks/usePosts";
const Search = () => {
  const [posts, setPosts] = useState([]);
  const searchedPosts = usePosts(posts, postQuery);


  return (
    <div className="search-posts-container">
      <hr style={{ margin: "20px 0 15px 0", color: "#C0C0C0" }} />
      <strong style={{ margin: "10px 0 0 4%", color: "#C0C0C0" }}>
        SEARCH
      </strong>
      <div className="search-posts">
        {posts
          // .filter(
          //   (post) => post.title.toLowerCase().includes(postQuery) //
          // )
          .map((post, index) => (
            <SearchItem number={index + 1} post={post} key={post.id} />
          ))}
      </div>
    </div>
  );
};

export default Search;
