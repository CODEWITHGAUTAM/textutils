
import './App.css';
//import About from './components/About';
import Form1 from './components/Form1';
import Navbar from './components/Navbar';
import React, { useState } from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('grey')
      document.body.style.backgroundColor = 'grey';
    }
    else
    {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
      
  }
  return (
   <>
   <Router>
   <Navbar title="Textutils1"  mode={mode} toggleMode={toggleMode} AboutText="About Textutils" />
   
   <div className="container my-3">
   <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          
          <Route exact  path="/">
              <Form1 textArea="Enter your Text here"  /> 
            
          </Route>
    </Switch>
    </div>
    </Router>
   {/*<About/>*/}
   
   
    
   </>
  );
}

export default App;
