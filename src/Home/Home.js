import React /** , { useState } */ from 'react';
import SingleColor from '../SingleColor/SingleColor';
// import Values from 'values.js';
import "./Home.css";
import DefaultColors from '../DefaultColors/DefaultColors';

const Home = ({ handleSubmitX, /** handleSubmitY */ hexCode, hexCodeList, handleHexCodeState, defaultColors, defaultColor }) => {
  return (
    <div className='home-container'>
      <div className='hex-code-header'>
        <h2 className='hex-code-title'>HEX PALETTE GENERATOR</h2>
        <h4 className='hex-code-description'>Generate analogous colors</h4>
      </div>
        <form className="hex-code-form">
              
        <div className='generate-hex-code'>
     
         
          <label id="hex-code">Enter a color or code</label>
            
          <input
                type="text"
                id="hex-code"
                value={hexCode}
                onChange={handleHexCodeState}
                placeholder='#f15205'
          >
          </input>
      
          <div className="generate-buttons">
            {/* generates 20 colors */}
            <button className='twenty' onClick={handleSubmitX}>
              Generate 20 colors
            </button>

            {/* generates 40 colors */}
            {/* <button className='forty' onClick={handleSubmitY}>
              Generate 40 colors
            </button> */}
          </div>
          
          
          {/* buttons for default color options */}
          <div className="color-options">
            
            {/* <h3>Choose from color options</h3>

            <div className="color-option-buttons">
              
              <DefaultColors
                defaultColors={defaultColors}
                defaultColor={defaultColor}
              />

            </div> */}

          </div>
       
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
