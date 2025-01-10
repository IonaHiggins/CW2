import React from "react";
import { useItinerary } from "./itineraryContext";
import { FaRegRectangleList } from "react-icons/fa6";

export default function GetItinerary({details}) {
  console.log("Details:", details)
    const {itineraryTalk} = useItinerary();
    const talkDetails = details.filter((talk)=>itineraryTalk.includes(talk.id))
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
        <p> Your itinerary is currently empty! Explore our talks and click the icon '<FaRegRectangleList/>'to add a talk to your schedule.</p></div>
        )}
      </div>
    );
   }