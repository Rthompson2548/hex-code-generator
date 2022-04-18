import React, { useState } from 'react';
import HexGenerator from './HexGenerator';
import "./App.scss";

function App() {
  /** states and event handlers for setting hex code(s) and displaying colors */
  const [showColors, setShowColors] = useState(false); 

  return (
    <div className='App-container'>
      <HexGenerator
        showColors={showColors}
        setShowColors={setShowColors}
      />
    </div>
  )
  
}

export default App
