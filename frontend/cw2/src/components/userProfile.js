import React from "react";
import { FaHeart } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { FaRectangleList } from 'react-icons/fa6';
import Navigate from "./handleClick";
const DisplayProfile = ()=>{
    return(
        <>
            <div class = "container">
                <div class = "row">
                    <div class = "col-4">
                        <Navigate route = {'../itinerary'} text = {<h4>My Itinerary</h4>}/>
                        <FaRectangleList size={150}/>

                    </div>
                    <div class = "col-4">
                        <Navigate route = {'../likes'} text = {<h4>My Likes</h4>}/>
                        <FaHeart size = {150} color= "red"/>
                    </div>
                    <div class = "col-4">
                        <div>
                            <Navigate route = {'../interests'} text = {<h4>My Interests</h4>}/>
                            <HiOutlineLightBulb size = {150} color = "yellow"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisplayProfile;