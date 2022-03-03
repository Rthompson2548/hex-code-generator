import React, { useState, useEffect } from 'react';
// import rgbToHex from "../utils.js"
import "./SingleColor.css";




/** using elements from colors data as props */
const SingleColor = ({ rgb, weight, index, hexCode }) => {

  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  /** uses .join() to render as (r, g, b) */
  const bcg = rgb.join(",");
  // console.log(`bcg: ${bcg}`);

  // const hex = rgbToHex(...rgb);

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
      {/* rest */}
      <div className="single-color-container-text">

        <p className="color-value hex-code-value">
          {hexCodeValue}
        </p>    
        <p className="percent-value">
          {weight}%
        </p>
      
        {copiedToClipboard &&
          <i class="fa-solid fa-message">
           Copied
          </i>
          }
      
      </div>

      {/* clipboard icon */}
      <div className='clipboard-icon'>
        
          <i className="fa fa-paperclip" style={{ fontSize: "18px" }}>
          </i>
    
      </div>

    </div>
  )

}

export default SingleColor;
