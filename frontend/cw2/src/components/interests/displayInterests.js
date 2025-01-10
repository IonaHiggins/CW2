import React from "react";
import useFetchData from "../useFetchData";
import GetInterests from "./getInterests";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { Accordion } from "react-bootstrap";
const DisplayInterests = ()=>{
    const { status, talks } = useFetchData();
    if (status === "fetched")
        console.log("Talks:", talks)
    return(
        <div>
        <h2>My Interests:</h2>
        <HiOutlineLightBulb size = {40} color = "yellow"/>
        <hr></hr>
        <Accordion.Item class="rounded" style={{ backgroundColor:'#e1e9eb' }}>
            <GetInterests details ={talks}/>   
        </Accordion.Item>
        </div>
    )
}

export default DisplayInterests;
