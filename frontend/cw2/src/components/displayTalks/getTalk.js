import React from "react";
import DisplayTalks from "./displayTalks";

const GetTalk =({details, talkID})=>{
  const talk = details.filter((entry) =>{
      return entry.id.includes({talkID});
    });
    return(
        <DisplayTalks items={talk}/>
    )
  };

export default GetTalk;