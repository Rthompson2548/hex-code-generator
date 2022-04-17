import React from "react";
import Values from "values.js";
import "../../App.scss";


const GenerateColors = ({ hexCode, setHexCode, setHexCodeList }) => {

    const generateAnalogousColors = (event) => {
    event.preventDefault();
   
      let hexCodes = new Values(hexCode).all(10);
      setHexCodeList(hexCodes);
      setHexCode("");
    
    }

    return (
        <div className="generate-colors">                      
            <button onClick={generateAnalogousColors} type="submit">
                  Generate colors 
            </button>       
        </div>
    )
}

export default GenerateColors;