import Values from "values.js";

export function validateInputValue(hexCode) {
  if (!!hexCode && hexCode.length > 0) {
    const colorNameValue = new Option().style;
    
    colorNameValue.color = hexCode;
    const isValidColorName = colorNameValue.color === hexCode;

    const regExHexCodePattern = /^#[0-9A-F]{6}$/i;
    /** uses the test() method to search for a match between the hex code string and the specific regex pattern. Returns true or false */
    const isValidHexCode = regExHexCodePattern.test(hexCode);
    return !!isValidColorName || !!isValidHexCode;
  }

  return false;
}

export function generateAnalogousColors(hexCode) {
  const hexCodes = new Values(hexCode).all(10);
  return hexCodes;
}
