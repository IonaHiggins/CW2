import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from "./components/noPage";
import Home from "./components/home";
import DisplayProgramme from './components/displayTalks/displayProgramme';
import Navigation from './components/navigation';
import DisplaySessions from './components/displaySessions/displaySessionIndex';
import DisplayASessions from './components/displaySessions/displayASessions';
import DisplayBSessions from './components/displaySessions/displayBSessions';
import DisplayCSessions from './components/displaySessions/displayCSessions';
import { ItineraryTalkProvider } from './components/itinerary/itineraryContext';
import DisplayItinerary from './components/itinerary/displayItinerary';
import { InterestTalkProvider } from './components/interests/interestContext';
import DisplayInterests from './components/interests/displayInterests';
import { LikedTalkProvider } from './components/likes/likesContext';
import DisplayLikes from './components/likes/displayLikes';

function App(){
  return(
    <>
      <div className="wrapper">
      <ItineraryTalkProvider>
       <InterestTalkProvider>
        <LikedTalkProvider>
        <BrowserRouter>
          <Navigation/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NoPage />} />
              <Route path = "aSessions" element={<DisplayASessions/>}/>
              <Route path = "bSessions" element={<DisplayBSessions/>}/>
              <Route path = "cSessions" element={<DisplayCSessions/>}/>
              <Route path = "sessions" element = {<DisplaySessions/>}/>
              <Route path = "programme" element={<DisplayProgramme />} />
              <Route path = "itinerary" element = {<DisplayItinerary/>}/>
              <Route path = "interests" element = {<DisplayInterests/>}/>
              <Route path = "likes" element = {<DisplayLikes/>}/>
              <Route path = "test" element = {<DisplayItinerary/>}/>
            </Routes>
          </BrowserRouter>
          </LikedTalkProvider>
          </InterestTalkProvider>
          </ItineraryTalkProvider>
        </div>
      </>
  );
};

export default App;