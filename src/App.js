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
<<<<<<< HEAD
      buttonColor: "#DC143C",
=======
>>>>>>> parent of 37d673d (updated color values)
      code: "#FF0000",
    },
    {
      name: "Orange",
<<<<<<< HEAD
      buttonColor: "#FF8C00",
      code: "#FFA500",
    },
    {
      name: "Yellow",
      buttonColor: "#F7DA63",
=======
      code: "#ffa500",
    },
    {
      name: "Yellow",
>>>>>>> parent of 37d673d (updated color values)
      code: "#FFFF00",
    },
    {
      name: "Green",
<<<<<<< HEAD
      buttonColor: "#3CB371",
      code: "#00ff00",
    },
    {
      name: "Blue",
      buttonColor: "#1E90FF",
      code: "#0000ff",
    },
    {
      name: "Purple",
      buttonColor: "#DDA0DD",
      code: "#6a0dad",
=======
      code: "#008000",
    },
    {
      name: "Blue",
      code: "#0000FF",
    },
    {
      name: "Purple",
      code: "#800080",
>>>>>>> parent of 37d673d (updated color values)
    },
    {
      name: "Pink",
      buttonColor: "#FFC0CB",
      code: "#ffc0cb",
    },
    {
      name: "Black",
      buttonColor: "#000000",
      code: "#000000",
    },
<<<<<<< HEAD
    // {
    //   name: "White",
    //   buttonColor: "#D3D3D3",
    // },
=======
    {
      name: "White",
      code: "#ffffff",
    },
>>>>>>> parent of 37d673d (updated color values)
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
        // handleDisplayDefaultColors={handleDisplayDefaultColors}
        handleSubmitX={handleSubmitX}
        // setDisplayDefaultColors={setDisplayDefaultColors}
        // displayDefaultColors={displayDefaultColors}
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
