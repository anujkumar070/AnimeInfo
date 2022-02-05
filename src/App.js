
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import AnimeDetails from './components/AnimeDetails';
import Fact from './components/Fact';


const App =(props)=> {
  const [mode, setMode] = useState('light');

    return (
      <div className='container'>
        <BrowserRouter>
              
            <Navbar mode={mode} />
            <div className='row my-5'>
            
            </div>
           <Routes>
           <Route exact path="/"  element={<AnimeDetails mode={mode} />} key={"fact"}> </Route>
           <Route exact path="/fact"  element={<Fact/>} key={"fact"} mode={mode} setMode={setMode}> </Route>
                
                </Routes> 
         </BrowserRouter>

      </div>
    )
  


}
export default App;
