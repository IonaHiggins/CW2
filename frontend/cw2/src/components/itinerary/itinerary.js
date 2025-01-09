import React from "react";
import { useLocalStorage } from "../useLocalStorage";
import { FaRegRectangleList } from "react-icons/fa6";
import { FaRectangleList } from "react-icons/fa6";
export default function Itinerary(itinerary) {
      let onItinerary = JSON.stringify(itinerary);
      const [itineraryTalk , setItineraryTalk] = useLocalStorage(onItinerary, false);
      const setItinerary=()=>{
            setItineraryTalk(!itineraryTalk);
      }
 return(
      <div onClick = {setItinerary}>
            {itineraryTalk ? <FaRectangleList/>: <FaRegRectangleList/> }
      </div>
 )
}
