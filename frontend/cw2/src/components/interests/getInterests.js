import React from "react";
import { useInterests} from "./interestContext";
import { HiOutlineLightBulb } from "react-icons/hi2";

export default function GetInterests({details}) {
  console.log("Details:", details)
    const {interestedTalk} = useInterests();
    const talkDetails = details.filter((talk)=>interestedTalk.includes(talk.id))
    return (

      <div>
        <h2>My Interests:</h2>
        {talkDetails.length > 0 ? (
            
        <ul>
          {talkDetails.map((talk) => (<li key={talk.id}><h3>{talk.title}</h3><p>{talk.description}</p></li>
          ))}
        </ul>
        ) : (
            <div>
        <p> You currently have no talks liked! Explore our talks and click the icon '<HiOutlineLightBulb/>'to add a talk to your schedule.</p></div>
        )}
      </div>
    );
   }