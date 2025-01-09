import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { useLocalStorage } from "../useLocalStorage";
export default function Interest(interest) {
      let interested = JSON.stringify(interest);
      const [selectedInterest, setSelectedInterest] = useLocalStorage(interested, false);
      const setInterest=()=>{
            setSelectedInterest(!selectedInterest);
      }
 return(
      <div onClick = {setInterest}>
            <HiOutlineLightBulb color={selectedInterest ?"yellow": "gray"}/>
      </div>
 )
}
