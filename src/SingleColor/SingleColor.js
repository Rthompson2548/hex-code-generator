import React, { useState, useEffect } from 'react';
import "./SingleColor.css";

/** passes attributes for color data as props */
const SingleColor = ({ rgb, weight, index, hexCode }) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  /** uses .join() to render as (r, g, b) so it can be used as a background color that matches the analogous color */
  const bcg = rgb.join(",");

  /** uses template literals add a hashtag before the hex code value, so that it can be in correct syntax when the user copies and pastes it */
  const hexCodeValue = `#${hexCode}`;

  /** copies and displays notification on given hex code that it's value has been copied */
  const handleCopiedToClipboard = () => {
    setCopiedToClipboard(true);
    navigator.clipboard.writeText(hexCodeValue);
  }

  /** clears the copied to clipboard notification once 3 seconds have passed any time the paper clip icon is clicked */
  useEffect(() => {

    const timeout = setTimeout(() => {
      setCopiedToClipboard(false);
    }, 3000)

    return () => clearTimeout(timeout)

  }, [copiedToClipboard])
  
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
