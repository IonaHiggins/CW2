import React, { useContext} from "react";
import ItineraryContextContext from "./itineraryContext";

export default function ItinerarySummary() {
    const [itinerary, setitinerary] = useContext(ItineraryContext);
    const removeItem = (e, item) => {
       let updatedItinerary = itinerary.filter((element) => {
         return element !== item;
       });
       setItinerary(updatedItinerary);
     };
    return (
      <div>
        <h2>My Itinerary:</h2>
        <ul>
          {itinerary.map((item, index) => (
           <li>
               <ul className="order-list list-group-item" key={index} onClick={(e) => removeItem(e, item)}>
               {item}
               </ul>
            </li>
          ))}
        </ul>
      </div>
    );
   }