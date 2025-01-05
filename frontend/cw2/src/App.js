import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from "./components/noPage";
import Home from "./components/home";
import DisplayProgramme from './components/displayProgramme';
import Navigation from './components/navigation';
import Talk from './components/talk';
import DisplayASessions from './components/displayASessions';
import DisplayBSessions from './components/displayBSessions';
import DisplayCSessions from './components/displayCSessions';

function App(){
  return(
    <>
      <div className="wrapper">

        <BrowserRouter>
          <Navigation/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NoPage />} />
              <Route path ="a" element={<DisplayASessions/>}/>
              <Route path ="b" element = {<DisplayBSessions/>}/>
              <Route path = "c" element = {<DisplayCSessions/>}/>
              <Route path = "programme" element={<DisplayProgramme />} />
              <Route path = "talk" element={<Talk />} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
  );
};

export default App;