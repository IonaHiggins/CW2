import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Stars from './stars';
const Talk = ({talk}) =>{

    return(
        <div>
            <Accordion.Header eventKey={talk.id} key={Talk}><h3>Session: </h3>{talk.session}</Accordion.Header>
                <Accordion.Item>
                    <p>{talk.speaker}</p>
                    <p>{talk.description}</p>
                    <Stars position={talk.id}/>
                </Accordion.Item>
        </div>
    );
};
export default Talk;