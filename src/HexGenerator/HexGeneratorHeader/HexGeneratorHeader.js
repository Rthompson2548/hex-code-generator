import React from "react";
import "../../App.scss"
import "./HexGeneratorHeader.scss"

const HexGeneratorHeader = () => {
    return (
        <div className="hex-generator-header">
            
            <span>Hex Palette Generator</span>
            <h2>Create analogous color schemes</h2>
            
            <h3>
                With the Hex Palette Generator, you can generate a scheme of analogous colors from any hex code, view them in order of lightest to darkest, and click on any color to copy it's hex code value.
            </h3>
            
            <h3>
                To get started, enter a hex code or <a href="https://htmlcolorcodes.com/color-names/" target="_blank" rel="noopener noreferrer">color name</a>,
                then click the generator button to create your palette.
            </h3>
        </div>
    )
};

export default HexGeneratorHeader;