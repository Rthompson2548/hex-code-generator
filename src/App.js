import React, { useState } from 'react';
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
 
  /** sets state of hex code, which is a string that holds the hex code */
  const handleHexCodeState = (event) => {
    event.preventDefault();
    /** sets the state of the hex code from the value provided in the input */
    setHexCode(event.target.value);
    console.log(`current hex code value: ${hexCode}`);
  }

  const handleSubmitX = (event) => {
    event.preventDefault();

    /** create multiple values of similar colors to render */
    try {
      console.log(event.target.value);
      let hexCodes = new Values(hexCode).all(10);
      /** sets those values as those hex codes */
      setHexCodeList(hexCodes);
      setError(false);
    }

    catch (error) {
      setError(true);
      console.log(error);
    }
    
  }

  const clickHandler = (event) => {
    event.preventDefault();
    handleHexCodeState(event);

    try {

      let hexCodes = new Values(hexCode).all(5);
      setHexCodeList(hexCodes);
      setError(false);
    }

    catch (error) {
      setError(true);
      console.log(error);
    }

  }

    const handleSubmitY = (event) => {
    event.preventDefault();

    try {

      let hexCodes = new Values(hexCode).all(5);

      // hexCodes.forEach((hex, index) => {
      // })

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
        handleSubmitY={handleSubmitY}
        hexCode={hexCode}
        hexCodeList={hexCodeList}
        handleHexCodeState={handleHexCodeState}
        error={error}
        defaultColors={defaultColors}
        clickHandler={clickHandler}
        // handleDefaultColorClick={handleDefaultColorClick}
      />
    </div>
  )
  
}

export default App
