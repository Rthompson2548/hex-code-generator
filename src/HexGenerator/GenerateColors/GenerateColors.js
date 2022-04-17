import React, { useState } from "react";
import Values from "values.js";
import "../../App.scss";
import "./GenerateColors.scss"


const GenerateColors = ({ hexCode, setHexCode, setHexCodeList }) => {

    const [inputValueError, setInputValueError] = useState(false);

    const generateAnalogousColors = (event) => {
        if (hexCode.length < 1) {
            setInputValueError(true);
        }

    event.preventDefault();
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
                <div>
                    <h1>Error!!!!</h1>
                </div>
            )
                
            }
        </div>
    )
}

export default GenerateColors;