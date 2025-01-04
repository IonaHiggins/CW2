import React from 'react'
import DisplayTalks from './displayTalks';

function GetSessions({details}){
    const aSessions = details.filter((entry) =>{
        return entry.session.includes('A')||entry.session.includes('a');
    });
    return(
        <DisplayTalks items={aSessions}/>
    )
}
export default GetSessions;