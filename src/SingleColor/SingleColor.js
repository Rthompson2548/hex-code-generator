import React, { useState, useEffect } from 'react';
import "./SingleColor.css";

/** using elements from colors data as props */
const SingleColor = ({ rgb, weight, index, hexCode }) => {

  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  /** uses .join() to render as (r, g, b) */
  const bcg = rgb.join(",");

  const hexCodeValue = `#${hexCode}`;

  /** copies and displays notification on given hex code */
  const handleCopiedToClipboard = () => {
    setCopiedToClipboard(true);
    navigator.clipboard.writeText(hexCodeValue);
  }

  /** clears the copied to clipboard notification once 3 seconds have passed */
  useEffect(() => {

    const timeout = setTimeout(() => {
      setCopiedToClipboard(false);
    }, 3000)

    return () => clearTimeout(timeout)

  }, [copiedToClipboard])



  return (
    <div
      /** converts text color to white when colors reach a certain darkness */
      className={`single-color-container color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={handleCopiedToClipboard}
    >
      <div className="single-color-container-text">
        <p className="color-value hex-code-value">
          {hexCodeValue}
        </p>    
        <p className="percent-value">
          {weight}%
        </p>
            
        {copiedToClipboard &&
          <div>
            <i className="fa-solid fa-message"></i>
            <p className="copied-message">Copied</p>
          </div>
          }    
      </div>

      {/* clipboard icon */}
      <div className='clipboard-icon'>
          <i className="fa fa-paperclip"></i>
      </div>

    </div>
  )

}

export default SingleColor;
