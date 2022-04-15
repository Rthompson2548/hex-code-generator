import React, { useState } from 'react';
import Home from './Home/Home';
import Values from 'values.js';
import "./index.css";
import "./App.css";

function App() {
  /** states and event handlers for setting hex code(s) and displaying colors */
  const [showColors, setShowColors] = useState(false); 
  const [hexCode, setHexCode] = useState("");
  /** displays a list of analogous colors on the initial render based of the `Values` code until the user generates a new color scheme */
  const [hexCodeList, setHexCodeList] = useState(new Values("#ff0000").all(5));

  /** sets the input value as the hex code state upon change */
  const handleHexCodeState = (event) => {
    event.preventDefault();
    setHexCode(event.target.value)
  }

  /** sets the hex code value to generate 40 analogous colors from the user's input */
  const handleSubmitHexCode = (event) => {
    event.preventDefault();
   
      let hexCodes = new Values(hexCode).all(10);
      setHexCodeList(hexCodes);
      setHexCode("");
    
  }

  return (
    <div className='App-container'>
      <Home
        hexCode={hexCode}
        hexCodeList={hexCodeList}
        handleHexCodeState={handleHexCodeState}
        showColors={showColors}
        setShowColors={setShowColors}
        handleSubmitHexCode={handleSubmitHexCode}
      />
    </div>
  )
  
}

export default App
