import React from "react";
import Talk from "./talk";
import Accordion from "react-bootstrap/Accordion";

const DisplayTalks = ({ items }) => {
  return (
    <Accordion>
      {items.map((talk) => {
        return (
            <Talk talk={talk} key={talk}/>
        );
      })}
    </Accordion>
  );
};
export default DisplayTalks;