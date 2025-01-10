import React from "react";
import useFetchData from "../useFetchData";
import Search from "../search";

const DisplayProgramme = () => {
    const { status, talks } = useFetchData();
    if (status === "fetched")
      return (
        <div>
          <h2>Convention Programme:</h2>
          <hr></hr>
            <Search details = {talks}/>
        </div>
      );
    return <p>There is currently an issue displaying talks</p>;
  };
  
  export default DisplayProgramme;

 