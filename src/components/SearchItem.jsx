import React from "react";
import "./styles/App.css";

const SearchItem = (props) => {
  return (
    <div className="search-post">
      <div className="search-post-img">
        <img src={props.post.url} />
      </div>
      <div className="search-post-content">
        <div style={{color:'#C0C0C0', marginBottom:'10px'}}>Feb 23   8 min read</div>
        <div className="search-post-title">
        {props.post.title}
        </div>
        <div className="search-post-text">
          War of the masses, the outcome disastrous Many of the victim families
          save their ashes A million names on walls, 
        </div>
      </div>
    </div>
    
  );
};

export default SearchItem;