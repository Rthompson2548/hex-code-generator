import React from 'react';
import "./SingleColor.css";
import CopiedConfirmation from './CopiedConfirmation/CopiedConfirmation';

/** passes attributes for color data as props */
const SingleColor = ({ rgb, weight, index, hexCode }) => {
  
  const rgbString = rgb.join(",");
  const formattedHexCode = `#${hexCode}`;

  return (
    <div
      className={`single-color-container color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${rgbString})` }}
    >
      <div className="single-color-information">
        <div>
          <p className="hex-code-value">
          {formattedHexCode}
          </p>    
          {/* displays the percent of how close/far the color is from the entered value */}
          <p className="percent-value">
            {weight}%
          </p>
        </div>
           
      </div>

      <CopiedConfirmation
        formattedHexCode={formattedHexCode}
        hexCode={hexCode} index={index}
      />
     
        
    </div>
  )

}

export default SingleColor;
