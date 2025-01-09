import React from "react";
import Navigate from "./handleClick";
const DisplayProfile = ()=>{
    return(
        <>
            <div class = "container">
                <div class = "row">
                    <div class = "col-4">
                        <Navigate route = {'../itinerary'} text = {"My Itinerary"}/>
                    </div>
                    <div class = "col-4">
                        <Navigate route = {'../likes'} text = {"My Likes"}/>
                    </div>
                    <div class = "col-4">
                        <div>
                            <Navigate route = {'../interests'} text = {"My Interests"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DisplayProfile;