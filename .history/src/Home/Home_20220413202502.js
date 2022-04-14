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
                  placeholder='Enter a hex code'
            >
          </input> 
          
          {/* displays the analogous colors upon click */}
        <div className='generate-color-button'>       
          <button onClick={handleSubmitHexCode}>
                Generate
          </button>
        </div>

        <div className='generate-color-button'>       
          <button>
                Explore trending colors
          </button>
        </div>
          {/* displays the trending colors and hides the common colors if open */}
            <button className='heading-text'
              onClick={handleShowTrendingColors}
            >
              <h4>Trending colors</h4>
              <h6>View colors</h6>
              <i class="fa fa-chevron-down"></i>
            
            </button>
            
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

          {/* displays the common colors and hides the trending colors if open */}
            <button className='heading-text' onClick={handleShowCommonColors}>
              <h4>Basic colors</h4>
              <h6>View colors</h6>
            </button>
            
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
