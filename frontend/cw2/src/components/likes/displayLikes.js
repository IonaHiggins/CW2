import React from "react";
import useFetchData from "../useFetchData";
import { Accordion } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import GetLikes from "./getLikes";

const DisplayLikes = ()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
        console.log("Talks:", talks)
    return(
        
            <div class = "row">
                <div class = "col-2">
                <h2>My Likes:</h2>
                
                <FaHeart size = {30} color="red"/>
            </div>
            <hr></hr>
    
        <Accordion.Item class="rounded" style={{ backgroundColor:'#e1e9eb' }}>
         <GetLikes details ={talks}/>
         </Accordion.Item>
         </div>
    )
}

export default DisplayLikes;
