import React, {useEffect, useState} from "react";

const CommonColors = ({ defaultColors, handleSubmitDefaultColor, hexCode }) => {

    
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
              {defaultColors.map((color, index) => {
                return <li key={index}
                          onClick={handleCopiedToClipboard}
                          className="color-buttons-li">
                           
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