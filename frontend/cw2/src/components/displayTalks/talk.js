import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stars from '../ratings/stars';
import Interest from '../interests/interest';
import Like from '../likes/likes';
import Itinerary from '../itinerary/itinerary';
import Review from '../review/review';
import AverageRating from '../ratings/getAverageRatings';

const Talk = ({talk}) =>{

    return(
        <div id ="talkItems" >
             <Accordion.Item class="rounded" style={{ backgroundColor:'#e1e9eb' }}>
                <div>
                    <ul>
                        <li>
                        <h2>{talk.title}</h2>
                        <h5>Speaker: {talk.speaker}</h5>
                        <h6>Session: {talk.session}- {talk.time}</h6>
                        <p>{talk.description}</p>
                            <h6>Your Rating:</h6> 
                            <Stars position={talk.id}/>
                            <AverageRating ratings = {talk.ratings}/>
                            <div class = "row">
                            <div class = "col-5">
                                <div class = "col-2">
                                    <Interest talkId = {talk.id}/>
                                </div>
                                <div class = "col-2">
                                    <Like talkId = {talk.id}/>
                                </div>
                                <div class = "col-2"> 
                                    <Itinerary talkId={talk.id} time = {talk.time}/>
                                </div>
                            </div>
                            <div class = "col-4" border="solid">
                                    <Review talkId= {talk.id}/>
                                </div>
                        </div>
                    </li>
                    </ul>
                 </div>
             </Accordion.Item>
        </div>
    );
};
export default Talk;