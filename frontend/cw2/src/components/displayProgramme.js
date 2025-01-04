import React from "react";
import useFetchData from "./useFetchData";
import Search from "./search";

const DisplayProgramme = () => {
    const { status, talks } = useFetchData();
    if (status === "fetched")
      return (
        <div>
            <Search details = {talks}/>
        </div>
      );
    return <p>There is currently an issue displaying talks</p>;
  };
  
  export default DisplayProgramme;

