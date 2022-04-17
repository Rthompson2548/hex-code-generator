import React, { useState } from "react";
import Values from "values.js";
import "../../App.scss";
import "./GenerateColors.scss"


const GenerateColors = ({ hexCode, setHexCode, setHexCodeList }) => {

    const [inputValueError, setInputValueError] = useState(false);

    const generateAnalogousColors = (event) => {
           
        const validateInputValue = () => {
            if (hexCode.length > 0) {
            let validColorValue = new Option().style;
            validColorValue.color = hexCode;
            var validHexCodeValue = validColorValue.color === hexCode;
            var validColorNameValue = /^#[0-9A-F]{6}$/i.test(hexCode);
            if (validHexCodeValue === true || validColorNameValue === true) {
                setInputValueError(false);
            } else {
                setInputValueError(true);
                setHexCode("");
            }
        } else {
            setInputValueError(true);
        }
        }

        event.preventDefault();
        validateInputValue();
        let hexCodes = new Values(hexCode).all(10);
        setHexCodeList(hexCodes);
        setHexCode("");
    
    }

    return (
        <div className="generate-colors">                      
            <button
                onClick={generateAnalogousColors}
                type="submit">
                Generate colors 
            </button>
            
            {inputValueError === true && (
                <div className="colorValueError">
                    <h3>Error: Please enter a valid hex code value or color name.</h3>
                </div>
            )
                
            }
        </div>
    )
}

export default GenerateColors;