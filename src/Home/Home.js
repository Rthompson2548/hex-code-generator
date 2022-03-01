import React /** , { useState } */ from 'react';
import SingleColor from '../SingleColor/SingleColor';
// import Values from 'values.js';
import "./Home.css";

const Home = ({ handleSubmit, hexCode, hexCodeList, handleHexCodeState, error }) => {
  return (
    <div className='home-container'>
        <h2 className='hex-code-title'>HEX PALETTE GENERATOR</h2>
          
        <form className="hex-code-form" onSubmit={handleSubmit}>
              
        <div className='generate-hex-code'>
     
          <label id="hex-code">Enter a hex code</label>
            
          <input
                type="text"
                id="hex-code"
                value={hexCode}
                onChange={handleHexCodeState}
                placeholder='#f15025'
                className={`${error ? error : null}`}>
          </input>
      
          <button  className='hex-code-submit-button'>
            GENERATE PALETTE
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
