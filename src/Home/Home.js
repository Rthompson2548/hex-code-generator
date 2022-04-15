import React from 'react';
import "./Home.css";
import SingleColor from '../SingleColor/SingleColor';

const Home = ({ handleSubmitHexCode, hexCode, handleChange, hexCodeList }) => {

  return (
    <div>
      <div className='hex-code-header'>
        <h2>Hex Palette Generator</h2>
        <h3>Create analogous color schemes</h3>
      </div>

      {/* form for entering and choosing color values */}
      <form id="color-form">       
        <h3>Enter a hex code or select a color from the default options below, then generator button to continue</h3>
          <div className='hex-code-form'>          
            <input
                  type="text"
                  id="hex-code"
                  name={hexCode}
                  value={hexCode}
                  onChange={handleChange}
                  placeholder='Enter hex code'
            >
          </input> 
          
    
          {/* displays the analogous colors upon click */}
        <div className='generate-color-button'>       
          <button onClick={handleSubmitHexCode}>
                Generate colors
          </button>
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
