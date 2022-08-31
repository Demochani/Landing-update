import React from "react";
import PostItem from "./PostItem";
import "./styles/App.css";
import CycleItem from "./CycleItem";

const PostInteresting = ({ posts, postQuery }) => {
  if (!posts.length) {
    return (
      <p style={{ margin: "20px", fontSize: "30px" }}>
        there are no posts with this name..... sad.......
      </p>
    );
  }

  return (
    <div className="interesting-posts-container">
      <hr style={{ margin: "20px 0 15px 0", color: "#C0C0C0" }} />
      <strong style={{ margin: "10px 0 0 4%", color: "#C0C0C0" }}>
        INTERESTING
      </strong>
      <div className="interesting-posts">
        {posts.filter(
          post => post.title.toLowerCase().includes(postQuery)//
        ).map((post, index) => (
          <PostItem number={index + 1} post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostInteresting;
