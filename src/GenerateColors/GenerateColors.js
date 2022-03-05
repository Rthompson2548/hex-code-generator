import React /** , { useState } */ from 'react';
import SingleColor from '../SingleColor/SingleColor';
// import Values from 'values.js';
import "./GenerateColors.css";
import DefaultColors from '../DefaultColors/DefaultColors';

const GenerateColors = ({ handleSubmitX, hexCode, setHexCode, hexCodeList, handleHexCodeState, defaultColors, defaultColor, handleColorButton }) => {

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
                onChange={setHexCode}
                placeholder='#f15205'
          >
          </input>
      
          <div className="generate-buttons">
            {/* generates 20 colors */}
            <button className='generate-button twenty' onClick={handleSubmitX}>
              Generate colors
            </button>

            {/* generates 40 colors */}
            {/* <button className='generate-button forty' onClick={handleSubmitY}>
              Generate 40 colors
            </button> */}
          </div>
          
          
          {/* buttons for default color options */}
         
            
          <div className="color-buttons-container">

            {/* TO DO:
                  * add back once state changes on first click 
                  * change default colors to be rendered in DefaultColors component
                  */}

             {/* <h3>Choose from color options</h3> */}

            {/* <ul className="color-option-buttons">
              
              {
                    defaultColors.map((color, index) => {
                        return <li key={index} className='default-color'>
                          <button
                            value={color.code}
                            style={{ backgroundColor: color.code }}
                            className="color-button"
                            onClick={handleColorButton}>
                              {color.name}
                            </button>
                          
                 
                        </li>
                         
                    })
              }

            </ul> */}


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

export default GenerateColors;
