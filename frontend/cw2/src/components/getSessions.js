import React from 'react'
import DisplayTalks from './displayTalks';

function GetSessions({details,sessionType}){
    if (sessionType == 'a'){
        const sessionData = details.filter((entry) =>{
            return entry.session.includes('A')||entry.session.includes('a');
        });
        return(
            <DisplayTalks items={sessionData}/>
        )
    }
    else if (sessionType == 'b'){
        const sessionData = details.filter((entry) =>{
            return entry.session.includes('B')||entry.session.includes('b');
        });
        return(
            <DisplayTalks items={sessionData}/>
        )
    }
    else{
        const sessionData = details.filter((entry) =>{
            return entry.session.includes('C')||entry.session.includes('c');
        });
        return(
            <DisplayTalks items={sessionData}/>
        ) 
    }
}

export default GetSessions;