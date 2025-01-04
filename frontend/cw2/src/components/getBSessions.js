import React from 'react'
import DisplayTalks from './displayTalks';

function GetSessions({details}){
    const bSessions = details.filter((entry) =>{
        return entry.session.includes('B')||entry.session.includes('b');
    });
    return(
        <DisplayTalks items={bSessions}/>
    )
}
export default GetSessions;