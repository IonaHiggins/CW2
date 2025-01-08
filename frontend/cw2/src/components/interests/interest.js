import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { useLocalStorage } from "../useLocalStorage";
export default function Interest(position) {
      let onOff = JSON.stringify(position);
      const [selectedInterest, setSelectedInterest] = useLocalStorage(onOff, false);
      const setInterest=()=>{
            setSelectedInterest(!selectedInterest);
      }
 return(
      <div onClick = {setInterest}>
            <HiOutlineLightBulb color={selectedInterest ?"yellow": "gray"}/>
      </div>
 )
}
