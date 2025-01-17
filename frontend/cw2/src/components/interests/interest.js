import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { useInterests } from "./interestContext";

export default function Interest({talkId}) {
      const { interestedTalk, toggleInterestedTalk } = useInterests();
    
      const inInterests = interestedTalk.includes(talkId);
    
      return (
        <div onClick={() => toggleInterestedTalk(talkId)}>
          {inInterests ? <HiOutlineLightBulb color= "yellow" size = {25}/> : <HiOutlineLightBulb color = "gray" size = {20}/>}
        </div>
      );
    }
