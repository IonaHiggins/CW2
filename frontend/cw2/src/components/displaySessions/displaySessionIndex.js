import React from "react";
import Navigate from "../handleClick";

const DisplaySessions = ()=>{

    return(
        <>
            <div class = "container">
                <div class = "mx-auto">
                    <div class = "row" >
    
                        <div class = "col-4">
                            <div>
                            <Navigate route = {'../aSessions'} text = {<h4>Talk Session A</h4>}/>
                            </div>
                        </div>
                        <div class = "col-4">
                            <Navigate route = {'../bSessions'} text = {<h4>Talk Session B</h4>}/>
                        </div>
                        <div class = "col-4">
                            <div>
                                <Navigate route = {'../cSessions'} text = {<h4>Talk Session C</h4>}/>
                            </div>
                        </div>
                    </div>
             
                </div>
            </div>
        </>
    );
}
export default DisplaySessions;