import React, { useState, useEffect } from 'react';
import Home from './Home/Home';
import Values from 'values.js';
import "./index.css";
import "./App.css";

function App() {

  // const [displayDefaultColors, setDisplayDefaultColors] = useState(false);
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
      backgroundColor: "#fff",
    },
    {
      name: "Orange",
      code: "#ffa500",
      backgroundColor: "#fff",
    },
    {
      name: "Yellow",
      code: "#FFFF00",
      backgroundColor: "#fff",
    },
    {
      name: "Green",
      code: "#008000",
      backgroundColor: "#fff",
    },
    {
      name: "Blue",
      code: "#0000FF",
      backgroundColor: "#fff",
    },
    {
      name: "Purple",
      code: "#800080",
      backgroundColor: "#fff",
    },
    {
      name: "Pink",
      code: "#FFC0CB",
      backgroundColor: "#fff",
    },
    {
      name: "Black",
      code: "#000000",
      backgroundColor: "#fff",
    },
  ];


   const trendingColors = [
    {
      name: "Red",
      code: "#FF0000",
      backgroundColor: "#fff",
    },
    {
      name: "Orange",
      code: "#ffa500",
      backgroundColor: "#fff",
    },
    {
      name: "Yellow",
      code: "#FFFF00",
      backgroundColor: "#fff",
    },
    {
      name: "Green",
      code: "#008000",
      backgroundColor: "#fff",
    },
    {
      name: "Blue",
      code: "#0000FF",
      backgroundColor: "#fff",
    },
    {
      name: "Purple",
      code: "#800080",
      backgroundColor: "#fff",
    },
    {
      name: "Pink",
      code: "#FFC0CB",
      backgroundColor: "#fff",
    },
    {
      name: "Black",
      code: "#000000",
      backgroundColor: "#fff",
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

  //   const handleSubmitY = (event) => {
  //   event.preventDefault();

  //   try {

  //     let hexCodes = new Values(hexCode).all(5);
  //     setHexCodeList(hexCodes);
  //     setError(false);
  //   }

  //   catch (error) {
  //     setError(true);
  //     console.log(error);
  //   }
    
  // }

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
        trendingColors={trendingColors}
        handleColorButton={handleColorButton}
      />
    </div>
  )
  
}

export default App
