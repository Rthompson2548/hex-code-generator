import React, { useState } from 'react';
import Home from './Home/Home';
import Values from 'values.js';
import "./index.css";
import "./App.css";

function App() {

   /** holds the state of the users hex code input */
  const [hexCode, setHexCode] = useState("");
  /** holds the state of all colors generated from the hex code input & sets an initial value for initial render */
  const [hexCodeList, setHexCodeList] = useState(new Values("#f15205").all(5));

  const [error, setError] = useState(false);
 

  const handleHexCodeState = (event) => {
    event.preventDefault();
    setHexCode(event.target.value);
    console.log(`current hex code value: ${hexCode}`);
  }

  const handleSubmitX = (event) => {
    event.preventDefault();

    try {

      let hexCodes = new Values(hexCode).all(10);

      hexCodes.forEach((hex, index) => {
        console.log(`hex code ${index + 1}: ${Object.entries(hex)}`);
      })

      /** console.log(`hex codes: ${JSON.stringify(hexCodes)}`); */
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

      hexCodes.forEach((hex, index) => {
        console.log(`hex code ${index + 1}: ${Object.entries(hex)}`);
      })

      /** console.log(`hex codes: ${JSON.stringify(hexCodes)}`); */
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
      />
    </div>
  )
  
}

export default App
