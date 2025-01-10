import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useLikes } from "./likesContext";

export default function Like({talkId}) {
  const { likedTalk, toggleLikedTalk } = useLikes();

  const inLikes = likedTalk.includes(talkId);
 return(
      <div onClick = {()=>toggleLikedTalk(talkId)}>
        {inLikes ? <FaHeart color = "red" size={25}/>: <FaRegHeart color = "gray" size= {20}/> }
      </div>
 )
}