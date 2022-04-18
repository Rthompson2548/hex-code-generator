import React, { useState } from "react";
import Values from "values.js";
import "../../App.scss";
import "./GenerateColors.scss"


const GenerateColors = ({ hexCode, setHexCode, setHexCodeList }) => {

    const [inputValueError, setInputValueError] = useState(false);

    const validateInputValue = () => {
            if (hexCode.length > 0) {
                let colorNameValue = new Option().style;
                colorNameValue.color = hexCode;
                let validColorName = colorNameValue.color === hexCode;
                    
                let regExHexCodePattern = /^#[0-9A-F]{6}$/i;
                let validHexCode = regExHexCodePattern.test(hexCode);
                    
                if (validColorName === true || validHexCode === true) {
                    setInputValueError(false);
                
                } else {
                    setInputValueError(true); 
                    setHexCode("");
                }        
            } else {
                setInputValueError(true);
            }
            
    }

    const generateAnalogousColors =  (event) => {
    
            event.preventDefault();
            validateInputValue();
            
            let hexCodes = new Values(hexCode).all(10);
            setHexCodeList(hexCodes);            
            setHexCode("");
      
    }

    return (
        <div className="generate-colors">                      
            <button
                className="generator-button"
                onClick={generateAnalogousColors}
                type="submit">
                Generate colors 
            </button>
            
            {inputValueError === true && (
                <div className="colorValueError">
                    <h3>Error: Please enter a <a href="https://www.pluralsight.com/blog/tutorials/understanding-hexadecimal-colors-simple#:~:text=Hex%20color%20codes%20start%20with,0%20to%20255%20in%20RGB)." target="_blank" rel="noopener noreferrer">valid hex code</a> or <a href="https://www.w3schools.com/tags/ref_colornames.asp" target="_blank" rel="noopener noreferrer">color name</a>.</h3> 
                    <button id="confirmErrorMessage" onClick={() => setInputValueError(false)}>Okay</button>
                </div>
            )
                
            }
        </div>
    )
}

export default GenerateColors;