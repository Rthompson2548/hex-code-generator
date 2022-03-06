import React /** , { useState } */ from 'react';
import SingleColor from '../SingleColor/SingleColor';
// import Values from 'values.js';
import "./Home.css";
import DefaultColors from '../DefaultColors/DefaultColors';

const Home = ({ handleSubmitX, hexCode, setHexCode, handleChange, hexCodeList, displayDefaultColors, setDisplayDefaultColors, defaultColors, handleColorButton, handleDisplayDefaultColors }) => {


  return (
    <div className='home-container'>
      <div className='hex-code-header'>
        <h2 className='hex-code-title'>HEX PALETTE GENERATOR</h2>
        <h4 className='hex-code-description'>Generate analogous colors</h4>
      </div>
        <form id="color-form" className="hex-code-form">
              
        <div className='generate-hex-code'>
     
         
          <label className='label-text' id="hex-code">Enter a custom color or hex code</label>
            
          <input
                type="text"
                id="hex-code"
                name={hexCode}
                value={hexCode}
                onChange={handleChange}
                placeholder='#f15205'
          >
          </input>

          <h3>OR</h3>
          
          <button className='paste-color-below-btn label-text'>Click to paste a color below</button>

      
          {/* buttons for default color options */}
          <div className="color-buttons-container">     
              <ul className="color-option-buttons">            
              {defaultColors.map((color, index) => {
                        return <li key={index} className='default-color'>
                          <button
                            /** sets value to the hex code for the color */
                            value={color.code}
                            style={{ backgroundColor: color.code }}
                            className="color-button"
                            onClick={handleColorButton}
                          >
                              {color.name}
                          </button>                      
                        </li>                      
                    })}
            </ul>
            

            <div className="generate-buttons">
            {/* generates 20 colors */}
            <button className='generate-button twenty' onClick={handleSubmitX}>
              Generate colors
            </button>
          </div>
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
