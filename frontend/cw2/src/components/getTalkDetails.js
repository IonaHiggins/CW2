import React from "react";
import useFetchData from "./useFetchData";
import DisplayTalkDetails from "./displayTalkDetails";

const GetTalkDetails = () => {
    const { status, talks } = useFetchData();
    if (status === "fetched")
      return (
        <div>
            <DisplayTalkDetails talk = {talks}/>
        </div>
      );
    return <p>There is currently an issue displaying talks</p>;
  };
  
  export default GetTalkDetails;
