import React from "react";
import useFetchData from "./useFetchData";
import GetSessions from "./getASessions";


const DisplayASessions= () =>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
      return (
        <div>
            <GetSessions details = {talks}/>
        </div>
      );
    return <p>There is currently an issue displaying talks</p>;
  };

export default DisplayASessions;