import React, { useEffect, useState } from "react";
import sanityClient from "../../client.js";

import Row from './Row';

export default function AllTalks() {
  const [allTalksData, setAllTalks] = useState(null);

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
       .then((data) => setAllTalks(data))
       .catch(console.error);
   }, []);

  return (
    <tbody>
      {allTalksData &&
        allTalksData.map((talk, index) => (
          <Row
            itemNumber     = {index}
            title          = {talk.title}
            speakerName    = {talk.speakerName}
            speakerTitle   = {talk.speakerTitle}
            speakerCompany = {talk.speakerCompany}
            event          = {talk.event}
            type           = {talk.type}
            link           = {talk.link}
          />
        ))}
    </tbody>
  );
}
