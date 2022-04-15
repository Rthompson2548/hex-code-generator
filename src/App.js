import React, { useState } from 'react';
import Home from './Home/Home';
import Values from 'values.js';
import "./index.css";
import "./App.css";

function App() {
  /** states and event handlers for setting hex code(s) and displaying colors */
  const [showColors, setShowColors] = useState(false); 
  const [hexCode, setHexCode] = useState("");
  const [hexCodeList, setHexCodeList] = useState(new Values("#ff0000").all(5));
  const [error, setError] = useState(false);

  const handleShowColors = (event) => {
    event.preventDefault();
    setShowColors(!showColors);
  }

  const handleHexCodeState = (event) => {
    event.preventDefault();
    setHexCode(event.target.value);
  }

  const handleChange = (event) => {
    event.preventDefault();
    setHexCode(event.target.value)
  }

  const handleSubmitHexCode = (event) => {
    event.preventDefault();

    try {
      let hexCodes = new Values(hexCode).all(10);
      setHexCodeList(hexCodes);
      setError(false);
      setHexCode("");
    }

    catch (error) {
      setError(true);
      console.log(error);
    }
    
  }

  return (
    <div className='App-container'>
      <Home
        showColors={showColors}
        setShowColors={setShowColors}
        handleShowColors={handleShowColors}
        handleSubmitHexCode={handleSubmitHexCode}
        hexCode={hexCode}
        handleChange={handleChange}
        hexCodeList={hexCodeList}
        handleHexCodeState={handleHexCodeState}
        error={error}
      />
    </div>
  )
  
}

export default App
