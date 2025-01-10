import React from 'react';
import DisplaySessions from './displaySessions/displaySessionIndex';
const Home = ()=>{
    return(
        <div> 
            <DisplaySessions/>
            <hr></hr>
            <h3>Welcome to the Tech Conference Web application!</h3>
            <p>Browse our full programme or select a Talk Session to begin!
            </p>

        </div>    
    )
}
export default Home;