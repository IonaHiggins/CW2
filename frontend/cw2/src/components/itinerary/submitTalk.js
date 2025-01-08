import React, {useState, useContext} from "react";
import ItineraryContext from "./itineraryContext";

const submitTalk = () => {
    const [itinerary, setItinerary] = useContext(ItinearyContext);
 
    const [message, setMessage] = useState("");
    
    const addTalk = () => {
        let newItinerary = [...order];
        const orderString = JSON.stringify(newItinerary);
        fetch(`http://localhost:3001/addOrder`, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*     ",
            "Content-Type": "application/json",
          },
          body: orderString,
        })
        .then(() => {
            setMessage(
              "Thank you for adding" + {talk.title} + "to"+
                itinerary
            );
            setItinerary([]);
          })
        .catch((err) => {
          console.log(err);
        });
      };

    return (
    <div>
        <h2>Submit Order</h2>
        <label> Enter your name:</label>
        <input
        className="form-control"
        type="text"
        placeholder="Enter your name here ..."
        value={nameField}
        onChange={(e) => setNameField(e.target.value)}
        />
        <label> Enter your table number ;"</label>
        <input
        className="form-control"
        type="text"
        placeholder="Enter your table number here ..."
        value={tableField}
        onChange={(e) => setTableField(e.target.value)}
        />
        <button onClick={addOrder}>Submit order</button>
        <p>{message}</p>
    </div>
    );
};
export default addTalk;