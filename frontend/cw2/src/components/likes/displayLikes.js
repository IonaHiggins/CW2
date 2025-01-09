import React from "react";
import useFetchData from "../useFetchData";
import GetLikes from "./getLikes";

const DisplayLikes = ()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
        console.log("Talks:", talks)
    return(
        <GetLikes details ={talks}/>   
    )
}

export default DisplayLikes;
