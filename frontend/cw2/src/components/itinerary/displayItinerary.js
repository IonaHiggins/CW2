import React from "react";
import useFetchData from "../useFetchData";
import GetItinerary from "./getItinerary";

const DisplayItinerary = ()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
        console.log("Talks:", talks)
    return(
        <GetItinerary details ={talks}/>   
    )
}

export default DisplayItinerary;
