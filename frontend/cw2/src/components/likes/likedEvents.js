import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useLocalStorage } from "../useLocalStorage";

export default function Like(like) {
      let liked = JSON.stringify(like);
      const [selectedLike, setSelectedLike] = useLocalStorage(liked, false);
      const setLike=()=>{
            setSelectedLike(!selectedLike);
      }
 return(
      <div onClick = {setLike}>
        {selectedLike ? <FaHeart color = "red"/>: <FaRegHeart color = "gray"/> }
      </div>
 )
}