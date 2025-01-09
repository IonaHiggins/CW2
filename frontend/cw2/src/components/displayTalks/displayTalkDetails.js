import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stars from '../ratings/stars';
const Talk = ({talk}) =>{

    return(
        <div>
            <Accordion.Header eventKey={talk.id} key={Talk}></Accordion.Header>
                <Accordion.Body>
                    <p>{talk.speaker}</p>
                    <p>{talk.description}</p>
                    <Stars position={talk.id}/>
                </Accordion.Body>
        </div>
    );
};
export default Talk;