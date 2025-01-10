import React from "react";
import { useLikes } from "./likesContext";
import { FaRegHeart } from "react-icons/fa6";

export default function GetLikes({details}) {
  console.log("Details:", details)
    const {likedTalk} = useLikes();
    const talkDetails = details.filter((talk)=>likedTalk.includes(talk.id))
    return (

      <div>
        {talkDetails.length > 0 ? (
            
        <ul>
          {talkDetails.map((talk) => (<li key={talk.id}>
            <h2>{talk.title}</h2>
            <h5> Speaker: {talk.speaker}</h5>
            <h6> Session: {talk.session} - {talk.time}</h6>
            <p>{talk.description}</p>
            <hr></hr>
            </li>
          ))}
        </ul>
        ) : (
            <div>
        <p> You currently have no liked talks! Explore our talks and click the icon '<FaRegHeart/>'to add a talk to your likes.</p></div>
        )}
      </div>
    );
   }