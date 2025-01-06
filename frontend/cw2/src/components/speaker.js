import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from './useFetchData';

const Speaker = ({talk}) =>{
    const { status, talks } = useFetchData();
 
    if (status === "fetched")
        const {speakerId} = useParams();
        const currentItem = staff.filter((entry)=>{
            return entry.id === speakerId;
    });
      return (
        <div>
            <GetSessions details = {talks} sessionType={'c'}/>
        </div>
      );

    const {fullName} = currentItem[0];
    return(
        <>
            <h4>Staff Member: {fullName}</h4>
            <p>{bio}</p>
        </>
    );
};

export default Person;