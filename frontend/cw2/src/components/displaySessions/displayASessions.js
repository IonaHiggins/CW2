import React from "react";
import GetSessions from "./getSessions";
import useFetchData from "../useFetchData";

const DisplayASessions=()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
    return(
        <GetSessions details = {talks} sessionType={('a')}/>   
    )
}

export default DisplayASessions;