import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stars from '../stars';
import Navigate from '../handleClick';
const Talk = ({talk}) =>{

    return(
        <div>
             <Accordion.Item>
                <p>{talk.speaker}</p>
                <p>{talk.description}</p>
                <Stars position={talk.id}/>
                <Navigate route = {talk.id} text = {"Learn More"}/>
             </Accordion.Item>
        </div>
    );
};
export default Talk;