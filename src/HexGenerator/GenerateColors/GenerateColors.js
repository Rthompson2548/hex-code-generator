import React, { useState } from "react";
// import Values from "values.js";
import "../../App.scss";
import "./GenerateColors.scss";
import { generateAnalogousColors, validateInputValue } from "../../utils.js"

const GenerateColors = ({ hexCode, setHexCode, setHexCodeList }) => {

    const [inputValueError, setInputValueError] = useState(false);   

    const handleGenerateButtonClick = () => {
        console.log(hexCode);
        const newHexCode = hexCode;
        // console.log(`newHexCode: ${e.target.value}`);
        
        const isValueValid = validateInputValue(newHexCode);
        console.log(`validateInputValue(newHexCode): ${validateInputValue(newHexCode)}`);

        if (!!isValueValid) {
            console.log(`this value is valid: ${isValueValid}`);
            
            const analogousColors = generateAnalogousColors(newHexCode);
            setHexCodeList(analogousColors);
            setHexCode(newHexCode);
            setInputValueError(false);
        } else {
            
            console.log(`this value is NOT valid: ${isValueValid}`);
            setInputValueError(true);
        }

       
    }

    return (
        <div className="generate-colors">                      
            <button
                className="generator-button"
                onClick={handleGenerateButtonClick}
                type="submit">
                Generate colors 
            </button>
            
            {!!inputValueError && (
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