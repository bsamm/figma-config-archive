import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";

import Row from './Row';

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
     sanityClient
       .fetch(
         `*[_type == "post"]{
         title
     }`
       )
       .then((data) => setAllPosts(data))
       .catch(console.error);
   }, []);

  return (
    <tbody>
      {allPostsData &&
        allPostsData.map((post, index) => (
          <Row
            title = {post.title}
            key = {index}
          />
        ))}
    </tbody>
  );
}
