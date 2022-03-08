import React, { useState, useEffect } from "react";

const TrendingColors = ({ trendingColors, handleColorButton, hexCode }) => {


  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
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
        <ul className="color-buttons-container">            
              {trendingColors.map((color, index) => {
                return <li key={index} className="color-buttons-li"
                   onClick={handleCopiedToClipboard}
                >
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
                    
                            
                      <i className="fa fa-paperclip clipboard-icon"></i>
                    
                          </button>                      
                        </li>                      
                    })}
          </ul>
    )
}

export default TrendingColors;