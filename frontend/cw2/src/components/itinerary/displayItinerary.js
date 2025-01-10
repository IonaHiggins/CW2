import React from "react";
import useFetchData from "../useFetchData";
import GetItinerary from "./getItinerary";
import { Accordion } from "react-bootstrap";
import { FaRectangleList } from "react-icons/fa6";

const DisplayItinerary = ()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
        console.log("Talks:", talks)
    return(
        <div>
            <h2>My Itinerary:</h2>
            <FaRectangleList size = {30}/>
            <hr></hr>
        <Accordion.Item class="rounded" style={{ backgroundColor:'#e1e9eb' }}>
        <GetItinerary details ={talks}/>   
        </Accordion.Item>

        </div>
    )
}

export default DisplayItinerary;
