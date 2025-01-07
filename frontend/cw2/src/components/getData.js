import React from "react";
import useFetchData from "./useFetchData";

export const TalkData =()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
     TalkData ={talks}
      return (
        <p></p>
      );
      return <p>There is currently an issue displaying talks</p>;
    }
