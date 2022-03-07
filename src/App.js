import React, { useState, useEffect } from 'react';
import Home from './Home/Home';
import Values from 'values.js';
import "./index.css";
import "./App.css";

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
      code: "#DC143C",
    },
    {
      name: "Orange",
      code: "#FF8C00",
    },
    {
      name: "Yellow",
      code: "#F7DA63",
    },
    {
      name: "Green",
      code: "#3CB371",
    },
    {
      name: "Blue",
      code: "#1E90FF",
    },
    {
      name: "Purple",
      code: "#DDA0DD",
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
      code: "#D3D3D3",
    },
  ];


 
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
      setHexCode("");
    }

    catch (error) {
      setError(true);
      console.log(error);
    }
    
  }


  const handleChange = (event) => {
    event.preventDefault();
    setHexCode(event.target.value)
  }

  return (
    <div className='App-container'>
      <Home
        handleSubmitX={handleSubmitX}
        hexCode={hexCode}
        handleChange={handleChange}
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
