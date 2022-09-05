import React, { useState, useRef, useMemo, useEffect } from "react";
import "./styles/App.css";
import PostInteresting from "./PostInteresting";
import PostFilter from "./PostFilter";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";
import CurrentTemp from "./CurrentTemp";
import { useSearchParams } from "react-router-dom";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useSearchParams();
  const postQuery = filter.get("post") || "";
  const searchedPosts = usePosts(posts, postQuery);

  const [totalCount, setTotalCount] = useState();
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(9);
  const [page, setPage] = useState(1);
  let pagesArray = getPagesArray(totalPages);
  const lastElement = useRef();
  const observer = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getInteresting(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      console.log(response.headers["x-total-count"]);
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  console.log("totalPages: ", totalPages);
  console.log("pagesArray: ", pagesArray);

  useEffect(() => {
    if (isPostLoading) return;
    if (observer.current) observer.current.disconnect();
    var callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        setPage(page + 1);
        console.log(page);
      }
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current);
  }, [isPostLoading]);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

  return (
    <div className="wrapper">
      <div className="temp-container">
        <CurrentTemp />
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>
      <PostInteresting posts={searchedPosts} postQuery={postQuery} />
      <div ref={lastElement} style={{ height: 20, background: "none" }}></div>
      {isPostLoading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      )}
    </div>
  );
}

export default App;
