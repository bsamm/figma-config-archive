import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";

import Row from './Row';

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
     sanityClient
       .fetch(
         `*[_type == "talk"]{
         title,
         event,
         type,
         link,
         speakerName,
         speakerCompany,
         speakerTitle
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
            key            = {index}
            title          = {post.title}
            speakerName    = {post.speakerName}
            speakerTitle   = {post.speakerTitle}
            speakerCompany = {post.speakerCompany}
            event          = {post.event}
            type           = {post.type}
            link           = {post.link}
          />
        ))}
    </tbody>
  );
}
