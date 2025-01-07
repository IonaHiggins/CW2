import React from 'react';
import { useParams } from 'react-router-dom';

const DetailedTalk = ({talk}) =>{
    const {talkId} = useParams();
    const currentItem = talk.filter((entry)=>{
        return entry.id === talkId;
    });
    const {description, speaker} = currentItem[0];
    return(
        <>
            <h4>Staff Member: {description}</h4>
            <p>{speaker}</p>
        </>
    );
};

export default DetailedTalk;