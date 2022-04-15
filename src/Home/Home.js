import React from 'react';
import "./Home.css";
import SingleColor from '../SingleColor/SingleColor';

const Home = ({ handleSubmitHexCode, hexCode, handleHexCodeState, hexCodeList }) => {

  return (
    <div className='home-container'>

      <header className='hex-code-header'>
        <h2>Hex Palette Generator</h2>
        <h3>Create analogous color schemes</h3>
      </header>

      {/* form for entering color code and name values */}
      <form id="color-form">       
        {/* includes a hyperlink to a page that contains a list of names for various colors */}
        <label>
          <h3>
            Enter a hex code or <a href="https://htmlcolorcodes.com/color-names/" target="_blank" rel="noopener noreferrer">color name</a>,
            then click the generator button to continue
          </h3>
        </label>
          
        <div className='color-form-actions'>          
            <input
                  type="text"
                  id="hex-code"
                  name={hexCode}
                  value={hexCode}
                  /** updates the state of the hex code input value */
                  onChange={handleHexCodeState}
                  placeholder='Enter hex code or color name'
            >
          </input> 
    
          {/* displays the analogous colors upon click */}
          <div className='generate-color-button'>       
            <button onClick={handleSubmitHexCode}>
                  Generate colors
            </button>
          </div>

      </div>
        
        {/* iterates through the hex code's analogous color values and returns the SingleColor component, which displays color value information for each */}
        <section className="color-list">
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
