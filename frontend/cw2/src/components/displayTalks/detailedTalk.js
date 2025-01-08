import React from 'react';
import useFetchData from '../useFetchData';
import GetTalk  from './getTalk';
const DetailedTalk = () =>{
    const { status, talks } = useFetchData();
    if (status === "fetched"){
        return(
            <GetTalk details = {talks} talkID={'1'}/>
        )
    }
};

export default DetailedTalk;