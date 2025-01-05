import React from "react";
import useFetchData from "./useFetchData";
import GetSessions from "./getSessions";


const DisplayBSessions= () =>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
      return (
        <div>
            <GetSessions details = {talks} sessionType={'b'}/>
        </div>
      );
    return <p>There is currently an issue displaying talks</p>;
  };

export default DisplayBSessions;