import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Talk = ({talk}) =>{

    return(
        <div>
            <Accordion.Header eventKey={talk.id} key={Talk}><h3>Session: </h3>{talk.session}</Accordion.Header>
                <Accordion.Item>
                    <p>{talk.speaker}</p>
                    <p>{talk.description}</p>
                </Accordion.Item>
        </div>
    );
};
export default Talk;