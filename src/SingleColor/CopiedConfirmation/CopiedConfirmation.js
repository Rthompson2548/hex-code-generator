import React, { useState, useEffect } from "react";
import "../../App.scss";
const CopiedConfirmation = ({ formattedHexCode, index }) => {

    const [copiedToClipboard, setCopiedToClipboard] = useState(false);
    

  const handleCopiedToClipboard = () => {
    setCopiedToClipboard(true);
    navigator.clipboard.writeText(formattedHexCode);
    }
  
  useEffect(() => {

    const timeout = setTimeout(() => {
      setCopiedToClipboard(false);
    }, 1000)

    return () => clearTimeout(timeout)

  }, [copiedToClipboard])
    
    return (
        <div className="copied-confirmation">
            
            
            <i onClick={handleCopiedToClipboard} className={`fa fa-paperclip color ${index > 10 && 'white-text'}`} >               
            </i>
            
            <div>
                {copiedToClipboard &&
                    <p className="copied-confirmation">Copied</p>}
          </div>
        </div>
    )
};

export default CopiedConfirmation;