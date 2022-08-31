
import React, { useMemo } from "react";

export const usePosts = (posts, filter ) => {
  const searchedPosts = useMemo(() => {
    return [...posts].filter((post) => {
  
      // if (!filter.get("post")) return true;
      
      return post.title.toLowerCase().includes(filter);
    })
  }, [posts, filter]);
  return searchedPosts;
};














// import React, { useMemo } from "react";

// export const usePosts = (posts, filter ) => {
//   const searchedPosts = useMemo(() => {
//     return [...posts].filter((post) =>
//       post.title.toLowerCase().includes(filter.toLowerCase())
//     );
//   }, [posts, filter]);
//   return searchedPosts;
// };





// import React, { useMemo } from "react";

// export const usePosts = (posts, filter ) => {
//   const searchedPosts = useMemo(() => {
//     return [...posts].filter((post) =>
//       post.title.toLowerCase().includes(filter.get('post').toLowerCase())
//     );
//   }, [posts, filter]);
//   return searchedPosts;
// };