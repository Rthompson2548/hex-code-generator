import React from 'react';
import "./SingleColor.scss";
import CopiedConfirmation from './CopiedConfirmation';

const SingleColor = ({ rgb, weight, index, hexCode }) => {
  
  const HexCodeString = rgb.join(",");
  const formattedHexCode = `#${hexCode}`;
  
  return (
    <div
      className={`single-color-container color ${index > 10 && 'white-text'}`}
      style={{ backgroundColor: `rgb(${HexCodeString})` }}
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
        hexCode={hexCode}
        index={index}
      />     
    </div>
  )

};

export default SingleColor;
