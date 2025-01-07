import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { talkData } from './components/getData';
import NoPage from "./components/noPage";
import Home from "./components/home";
import DisplayProgramme from './components/displayTalks/displayProgramme';
import Navigation from './components/navigation';
import Talk from './components/displayTalks/talk';
import DisplaySessions from './components/displaySessions/displaySessionIndex';
import DisplayASessions from './components/displaySessions/displayASessions';
import DisplayBSessions from './components/displaySessions/displayBSessions';
import DisplayCSessions from './components/displaySessions/displayCSessions';

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
              <Route path = "programme" element={<DisplayProgramme />} />
              <Route path = "talk" element={<Talk />} />
              <Route path = "test" element = {<DisplaySessions/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      </>
  );
};

export default App;