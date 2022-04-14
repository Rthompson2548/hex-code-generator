import React, { useState } from 'react';
import "./Home.css";
import SingleColor from '../SingleColor/SingleColor';
import TrendingColors from '../ColorOptions/TrendingColors';
import CommonColors from '../ColorOptions/CommonColors';

const Home = ({ handleSubmitHexCode, hexCode, handleChange, hexCodeList, defaultColors, handleSubmitDefaultColor, trendingColors }) => {

  /** states for hiding & displaying the default color options */
  const [showTrendingColors, setShowTrendingColors] = useState(false);
  const [showCommonColors, setShowCommonColors] = useState(false);


  /** click handlers for displaying and hiding default colors */
  const handleShowTrendingColors = (event) => {
    event.preventDefault();
    setShowTrendingColors(!showTrendingColors);
    /** hides the common color group when the trending color group is displayed */
    setShowCommonColors(false);
  }

  const handleShowCommonColors = (event) => {
    event.preventDefault();
    setShowCommonColors(!showCommonColors);
    /** hides the trending color group when the trending color group is displayed */
    setShowTrendingColors(false);
  }

  return (
    <div>
      <div className='hex-code-header'>
        <h2>Hex Palette Generator</h2>
        <h3>Create analogous color schemes</h3>
      </div>

        

      {/* form for entering and choosing color values */}
        <form id="color-form">            
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
          
          <h3>Or</h3>
        
          {/* displays the trending colors and hides the common colors if open */}
            
          
            
            <button className='explore-btn'
              onClick={handleShowTrendingColors}
            >
              Pantone colors of the year
            </button>
          <div className="explore-colors">  
            {
              showTrendingColors === true && 
              <TrendingColors
                defaultColors={defaultColors}
                trendingColors={trendingColors}
                handleSubmitDefaultColor={handleSubmitDefaultColor}
                showTrendingColors={showTrendingColors}
                setShowTrendingColors={setShowTrendingColors}
                handleShowTrendingColors={handleShowTrendingColors}
              />             
            }
          </div>
            {/* displays the common colors and hides the trending colors if open */}
            
              <button className='explore-btn' onClick={handleShowCommonColors}>
                <p>Basic colors</p>
              </button>
            <div className="explore-colors">
            {
              showCommonColors === true && 
              <CommonColors
                defaultColors={defaultColors}
                showCommonColors={showCommonColors}
                setShowCommonColors={setShowCommonColors}             
                handleSubmitDefaultColor={handleSubmitDefaultColor}              
              />
                
            }
          </div>

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
