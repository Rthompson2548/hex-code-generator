import React, { useState, useEffect } from 'react';
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

  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  /** uses .join() to render as (r, g, b) so it can be used as a background color that matches the analogous color */
  const bcg = rgb.join(",");

  /** uses template literals add a hashtag before the hex code value, so that it can be in correct syntax when the user copies and pastes it */
  const hexCodeValue = `#${hexCode}`;

  /** copies and displays notification on given hex code that it's value has been copied */
  const handleCopiedToClipboard = () => {
    setCopiedToClipboard(true);
    navigator.clipboard.writeText(hexCodeValue);
  }

  /** clears the copied to clipboard notification once 3 seconds have passed any time the paper clip icon is clicked */
  useEffect(() => {

    const timeout = setTimeout(() => {
      setCopiedToClipboard(false);
    }, 3000)

    return () => clearTimeout(timeout)

  }, [copiedToClipboard])

  return (
    <div className='App-container'>
      {/* displays the home component that contains the form and analogous color scheme */}
      <Home
        hexCode={hexCode}
        hexCodeList={hexCodeList}
        handleHexCodeState={handleHexCodeState}
        showColors={showColors}
        setShowColors={setShowColors}
        handleSubmitHexCode={handleSubmitHexCode}
        copiedToClipboard={copiedToClipboard}
        bcg={bcg}
        hexCodeValue={hexCodeValue}
        handleCopiedToClipboard={handleCopiedToClipboard}
      />
    </div>
  )
  
}

export default App
