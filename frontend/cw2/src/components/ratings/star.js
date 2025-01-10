import React from "react";
import { FaStar } from "react-icons/fa";
export default function Star( props) {
 return <FaStar 
       color={props.selected ? "red" : "grey"}
       size={props.selected ? 20 :15}
       onClick={props.onSelect} 
       />;
}
