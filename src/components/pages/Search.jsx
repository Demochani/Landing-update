import React, { useState, useContext, useEffect } from "react";
import SearchItem from "../SearchItem";
import { usePosts } from "../hooks/usePosts";
import Context from "../hooks/context/Context";
import axios from "axios";

const Search = () => {
  const { postQuery } = useContext(Context);
  const [posts, setPosts] = useState([]);
  // const searchedPosts = usePosts(posts, postQuery);

useEffect(() =>  {
    const res =  axios.get('https://jsonplaceholder.typicode.com/photos?_limit=100');
    setPosts(posts);
    
}, [])
  return (
    <div className="search-posts-container">
      <hr style={{ margin: "20px 0 15px 0", color: "#C0C0C0" }} />
      <strong style={{ margin: "10px 0 0 4%", color: "#C0C0C0" }}>
        SEARCH
      </strong>
      <div className="search-posts">
        {posts
          .filter(
            (post) => post.title.toLowerCase().includes(postQuery) //
          )
          .map((post, index) => (
            <SearchItem number={index + 1} post={post} key={post.id} />
          ))}
      </div>
    </div>
  );
};

export default Search;
