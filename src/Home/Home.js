import React /** , { useState } */ from 'react';
import SingleColor from '../SingleColor/SingleColor';
// import Values from 'values.js';
import "./Home.css";
import DefaultColors from '../DefaultColors/DefaultColors';

const Home = ({ handleSubmitX, handleSubmitY, hexCode, setHexCode, hexCodeList, handleHexCodeState, defaultColors, defaultColor, handleColorButton }) => {



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
            <button className='generate-button twenty' onClick={handleSubmitX}>
              Generate 20 colors
            </button>

            {/* generates 40 colors */}
            <button className='generate-button forty' onClick={handleSubmitY}>
              Generate 40 colors
            </button>
          </div>
          
          
          {/* buttons for default color options */}
         
            
            <h3>Choose from color options</h3>

            <ul className="color-option-buttons">
              
              {
                    defaultColors.map((color, index) => {
                        return <li key={index} className='default-color'>
                          <button
                                /** sets value to the hex code for the color */
                            value={color.code}
                            style={{ backgroundColor: color.code }}
                            className="color-button"
                                onClick={handleColorButton}>
                                  {color.name}
                            </button>
                          
                 
                        </li>
                         
                    })
              }

            </ul>

          
       
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
