import React /** , { useState } */ from 'react';
import SingleColor from '../SingleColor/SingleColor';
// import Values from 'values.js';
import "./Home.css";

const Home = ({ handleSubmit, hexCode, hexCodeList, handleHexCodeState, error }) => {
  return (
    <div className='home-container'>
        <h2 className='hex-code-title'>HEX CODE GENERATOR</h2>
          
        <form className="hex-code-form" onSubmit={handleSubmit}>
              
        <div className='generate-hex-code'>
     
          <label id="hex-code">Enter a hex code to generate a color palette</label>
            
          <input
                type="text"
                id="hex-code"
                value={hexCode}
                onChange={handleHexCodeState}
                placeholder='#ff0000'
                className={`${error ? error : null}`}>
          </input>
      
          <button  className='hex-code-submit-button'>
            GENERATE COLORS
          </button>

            
       
        </div>

        <section className="hex-color-list">
          {
            hexCodeList.map((color, index) => {
              return (
                <SingleColor
                  key={index}
                  {...color}
                  index={index}
                  hexCode={color.hex}
                />
              )
            })
          }
        </section>
              
      </form>
    </div>
  )
}

export default Home;
