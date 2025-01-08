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
import DetailedTalk from './components/displayTalks/detailedTalk';

function App(){
  return(
    <>
      <div className="wrapper">

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
              <Route path = "test" element = {<DetailedTalk/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </>
  );
};

export default App;