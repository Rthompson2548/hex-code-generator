import Values from "values.js";

export function validateInputValue(hexCode, setHexCode, setInputValueError) {
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
};

export function generateAnalogousColors (event, hexCode, setHexCode, setHexCodeList) {
    
            event.preventDefault();
            validateInputValue();
            
            let hexCodes = new Values(hexCode).all(10);
            setHexCodeList(hexCodes);            
            setHexCode("");
      
};

