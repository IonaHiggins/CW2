import React from "react";
import GetSessions from "./getSessions";
import useFetchData from "../useFetchData";

const DisplayBSessions=()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
    return(
        <GetSessions details = {talks} sessionType={('b')}/>   
    )
}

export default DisplayBSessions;