import React from "react";
import useFetchData from "../useFetchData";
import GetInterests from "./getInterests";

const DisplayInterests = ()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
        console.log("Talks:", talks)
    return(
        <GetInterests details ={talks}/>   
    )
}

export default DisplayInterests;
