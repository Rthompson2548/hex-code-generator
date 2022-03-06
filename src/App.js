import React, { useState, useEffect } from 'react';
import Home from './Home/Home';
import Values from 'values.js';
import "./index.css";
import "./App.css";
import HomePage from './HomePage/HomePage';

function App() {

   /** holds the state of the users hex code input */
  const [hexCode, setHexCode] = useState("");
  /** holds the state of all colors generated from the hex code input & sets an initial value for initial render */
  const [hexCodeList, setHexCodeList] = useState(new Values("#ff0000").all(5));

  const [error, setError] = useState(false);

  /** array of objects containing default colors that user can select */
  const defaultColors = [
    {
      name: "Red",
      code: "#FF0000",
    },
    {
      name: "Orange",
      code: "#ffa500",
    },
    {
      name: "Yellow",
      code: "#FFFF00",
    },
    {
      name: "Green",
      code: "#008000",
    },
    {
      name: "Blue",
      code: "#0000FF",
    },
    {
      name: "Purple",
      code: "#800080",
    },
    {
      name: "Pink",
      code: "#FFC0CB",
    },
    {
      name: "Black",
      code: "#000000",
    },
    {
      name: "White",
      code: "#ffffff",
    },
  ];

  useEffect(() => {
    // setHexCode(hexCode);
  }, [hexCode])
 
  const handleHexCodeState = (event) => {
    event.preventDefault();
    setHexCode(event.target.value);
  }

  const handleColorButton = (event) => {
    event.preventDefault();
    setHexCode(event.target.value);
    
    try {
      
    console.log(`hex code: ${hexCode}`);
      let hexCodes = new Values(hexCode).all(10);
      setHexCodeList(hexCodes);
      setError(false);
    }

    catch (error) {
      setError(true);
      console.log(error);
    }
  };


  const handleSubmitX = (event) => {
    event.preventDefault();

    try {
      let hexCodes = new Values(hexCode).all(10);
      setHexCodeList(hexCodes);
      setError(false);
    }

    catch (error) {
      setError(true);
      console.log(error);
    }
    
  }

  return (
    <div className='App-container'>
      <Home
        handleSubmitX={handleSubmitX} 
        // handleSubmitY={handleSubmitY}
        hexCode={hexCode}
        hexCodeList={hexCodeList}
        handleHexCodeState={handleHexCodeState}
        error={error}
        defaultColors={defaultColors}
        handleColorButton={handleColorButton}
      /> 
    </div>
  )
  
}

export default App
