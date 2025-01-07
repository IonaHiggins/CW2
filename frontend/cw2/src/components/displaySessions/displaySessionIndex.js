import React from "react";
import Image from 'react-bootstrap/Image';
import GetSessions from "./getSessions";
import useFetchData from "../useFetchData";
import Navigate from "../handleClick";
import DisplayASessions from "./displayASessions";
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