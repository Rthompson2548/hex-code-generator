import React, { useState, useEffect } from 'react';
import "./SingleColor.css";

/** using elements from colors data as props */
const SingleColor = ({ weight, index, copiedToClipboard, bcg, hexCodeValue, handleCopiedToClipboard }) => {

  
  return (
    <div
      /** converts text color to white when colors reach a certain darkness, and black for lighter colors */
      className={`single-color-container color ${index > 10 && 'color-light'}`}
      /** sets the background color of the card as the color's value */
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleCopiedToClipboard}
    >
      <div className="single-color-information">
        <p className="hex-code-value">
          {hexCodeValue}
        </p>    
        {/* displays the percent of how close/far the color is from the entered value */}
        <p className="percent-value">
          {weight}%
        </p>
            
        {/* displays confirmation message when hex code is copied */}
        {copiedToClipboard &&
          <div>
            <p className="copied-confirmation">Copied</p>
          </div>
          }    
      </div>

      {/* clipboard icon to copy hex code value */}
      <div className='clipboard-icon'>
          <i className="fa fa-paperclip"></i>
      </div>

    </div>
  )

}

export default SingleColor;
