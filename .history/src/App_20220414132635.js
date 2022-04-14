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

  /** various default color values that a user can select in place of entering a hex code value */
  const defaultColors = [
    {
      name: "Red",
      code: "#FF0000",
      backgroundColor: "#fff",
    },
    {
      name: "Orange",
      code: "#FFA500",
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
      name: "Very Peri",
      code: "#6667AB",
      year: "2022",
      backgroundColor: "#6667AB",
    },
     {
      name: "Ultimate Gray",
      code: "#939597",
      year: "2021",
      backgroundColor: "#939597",
    },
    {
      name: "Classic Blue",
      code: "#0F4C81",
      year: "2020",
      backgroundColor: "#0f4c81",
    },
    {
      name: "Living Coral",
      code: "#FA7268",
      year: "2019",
      backgroundColor: "#FA7268",
    },
    {
      name: "Ultra Violet",
      code: "#5F4B8B",
      year: "2018",
      backgroundColor: "#5f4b8b",
    },
    {
      name: "Greenery",
      code: "#88B04B",
      year: "2017",
      backgroundColor: "#88b04b",
    },
    {
      name: "Rose Quartz",
      code: "#F8CDCD",
      year: "2016",
      backgroundColor: "#F8CDCD",
    },
    {
      name: "Marsala",
      code: "#B57170",
      year: "2015",
      backgroundColor: "#B57170",
    },
    {
      name: "Radiant Orchid",
      code: "#AD5E99",
      year: "2014",
      backgroundColor: "#ad5e99",
    },
    {
      name: "Emerald",
      code: "#F19828",
      year: "2013",
      backgroundColor: "#F19828",
    },
    {
      name: "Tangerine Tango",
      code: "#DD4124",
      year: "2012",
      backgroundColor: "#DD4124",
    },
    {
      name: "Honeysuckle",
      code: "#926AA6",
      year: "20"
      backgroundColor: "#926AA6",
    },
  ];

  const handleSubmitDefaultColor = (event) => {
    event.preventDefault();
    setHexCode(event.target.value);
    try {     
      setError(false);
    }
    catch (error) {
      setError(true);
    }
  };

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
        defaultColors={defaultColors}
        trendingColors={trendingColors}
        handleSubmitDefaultColor={handleSubmitDefaultColor}
      />
    </div>
  )
  
}

export default App
