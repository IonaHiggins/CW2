import React from "react";
import Navigate from "../handleClick";

const DisplaySessions = ()=>{

    return(
        <>
            <div class = "container">
                <div class = "row">
                    <div class = "col-4">
                        <Navigate route = {'../aSessions'} text = {"A"}/>
                    </div>
                    <div class = "col-4">
                        <Navigate route = {'../bSessions'} text = {"B"}/>
                    </div>
                    <div class = "col-4">
                        <div>
                            <Navigate route = {'../cSessions'} text = {"C"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default DisplaySessions;