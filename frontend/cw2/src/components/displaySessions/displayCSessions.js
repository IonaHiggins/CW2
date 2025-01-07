import React from "react";
import GetSessions from "./getSessions";
import useFetchData from "../useFetchData";

const DisplayCSessions=()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
    return(
        <GetSessions details = {talks} sessionType={('c')}/>   
    )
}

export default DisplayCSessions;