import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stars from '../ratings/stars';
import Navigate from '../handleClick';
import Interest from '../interests/interest';
import Like from '../likes/likes';
import Itinerary from '../itinerary/itinerary';

const Talk = ({talk}) =>{

    return(
        <div>
             <Accordion.Item>
                <h2>{talk.title}</h2>
                <h5>Session {talk.session}- {talk.speaker}</h5>
                <p>{talk.description}</p>
                <div>
                    <h6>Your Rating:</h6> 
                    <Stars position={talk.id}/>
                </div>
                <div>
                    <Interest talkId = {talk.id}/>
                </div>
                <div>
                    <Like talkId = {talk.id}/>
                </div>
                <div> 
                    <Itinerary talkId={talk.id}/>
                </div>
                <Navigate route = {talk.id} text = {"Learn More"}/>
             </Accordion.Item>
        </div>
    );
};
export default Talk;