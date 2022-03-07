import React, { useState, useEffect } from 'react';
import Home from './Home/Home';
import Values from 'values.js';
import "./index.css";
import "./App.css";

function App() {

  /** state and handler for displaying/hiding colors on click */
  const [showColors, setShowColors] = useState(false);

  const handleShowColors = (event) => {
    event.preventDefault();

    setShowColors(!showColors);
  }

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
      name: "Cerulean",
      code: "#9BB7D4",
      backgroundColor: "#9BB7D4",
    },
    {
      name: "Quiet Wave",
      code: "#1B7340",
      backgroundColor: "#1B7340",
    },
    {
      name: "Burnt Coral",
      code: "#E9897E",
      backgroundColor: "#E9897E",
    },
    {
      name: "French Blue",
      code: "#0072B5",
      backgroundColor: "#0072B5",
    },
    {
      name: "Marigold",
      code: "#FDAC53",
      backgroundColor: "#FDAC53",
    },
    {
      name: "Rust",
      code: "#B55A30",
      backgroundColor: "#B55A30",
    },
    {
      name: "Green Ash",
      code: "#A0DAA9",
      backgroundColor: "#A0DAA9",
    },
    {
      name: "Brave Ground",
      code: "#F19828",
      backgroundColor: "#F19828",
    },
    {
      name: "Raspberry Sorbet",
      code: "#D2386C",
      backgroundColor: "#D2386C",
    },
    {
      name: "Amethyst Orchard",
      code: "#926AA6",
      backgroundColor: "#926AA6",
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
        showColors={showColors}
        setShowColors={setShowColors}
        handleShowColors={handleShowColors}
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
