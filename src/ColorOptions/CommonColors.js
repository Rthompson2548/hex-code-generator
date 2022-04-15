import React from "react";
import "../Home/Home.css";

const CommonColors = ({ defaultColors, handleSubmitDefaultColor, hexCode }) => {
    return (
        <ul className="color-buttons-container">            
              {defaultColors.map((color, index) => {
                return <li key={index}>
                            <button
                                      /** sets value to the hex code for the color */
                                      value={color.code}
                                      style={{ backgroundColor: color.code }}
                                      className="color-button"
                                      onClick={handleSubmitDefaultColor}>
                                      
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

export default CommonColors;