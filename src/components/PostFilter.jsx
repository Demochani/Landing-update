import React from "react";
import "./styles/App.css";

const PostFilter = ({ filter, setFilter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    setFilter({ post: query });
  };

  return (
    <form className="filter-form" autoComplete="off" onSubmit={handleSubmit}>
      <input type="search" name="search" placeholder="Search..." />
    </form>
  );
};

export default PostFilter;
