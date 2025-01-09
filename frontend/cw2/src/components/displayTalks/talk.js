import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stars from '../stars';
import Navigate from '../handleClick';
import Interest from '../interests/interest';
import Like from '../likes/likes';
import Itinerary from '../itinerary/itinerary';
import { ItineraryTalkProvider } from '../itinerary/itineraryContext';
import { InterestTalkProvider } from '../interests/interestContext';
const Talk = ({talk}) =>{

    return(
        <div>
             <Accordion.Item>
                <p>{talk.speaker}</p>
                <p>{talk.description}</p>
                <Stars position={talk.id}/>

                <div>
                <Interest talkId = {talk.id}/>
                </div>
                <InterestTalkProvider>
                    <div>
                    <Like talkId = {talk.id}/>
                    </div>
                </InterestTalkProvider>
                <ItineraryTalkProvider>
                    <div>
                    <Itinerary talkId = {talk.id}/>

                    </div>
                </ItineraryTalkProvider>
                <Navigate route = {talk.id} text = {"Learn More"}/>
             </Accordion.Item>
        </div>
    );
};
export default Talk;