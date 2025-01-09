import React from "react";
import { useLikes } from "./likesContext";
import { FaRegHeart } from "react-icons/fa6";

export default function GetLikes({details}) {
  console.log("Details:", details)
    const {likedTalk} = useLikes();
    const talkDetails = details.filter((talk)=>likedTalk.includes(talk.id))
    return (

      <div>
        <h2>My Likes:</h2>
        {talkDetails.length > 0 ? (
            
        <ul>
          {talkDetails.map((talk) => (<li key={talk.id}><h3>{talk.title}</h3><h5>Session {talk.session} - {talk.speaker}</h5><p>{talk.description}</p><hr></hr></li>
          ))}
        </ul>
        ) : (
            <div>
        <p> You currently have no liked talks! Explore our talks and click the icon '<FaRegHeart/>'to add a talk to your likes.</p></div>
        )}
      </div>
    );
   }