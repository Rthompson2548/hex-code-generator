import React from "react";

const TrendingColors = ({ trendingColors, handleColorButton }) => {
    return (
        <ul className="color-buttons-container">            
              {trendingColors.map((color, index) => {
                return <li key={index}>
                          <button
                            /** sets value to the hex code for the color */
                            value={color.code}
                            style={{ backgroundColor: color.code }}
                            className="color-button"
                            onClick={handleColorButton}
                          >
                            <div className='color-button-text'>
                              <p>{color.name}</p>
                              <p>{color.code}</p>
                            </div>
                          </button>                      
                        </li>                      
                    })}
          </ul>
    )
}

export default TrendingColors;