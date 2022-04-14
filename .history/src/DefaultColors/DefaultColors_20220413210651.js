import React from 'react';
import "./DefaultColors.css"
const DefaultColors = ({ defaultColors, handleDefaultColorClick }) => {
    
    return (
        <div>
            <p>Default Colors</p>
            <ul className="default-colors">
                {/* iterates through the generated hex values and displays them on the page */}
                {
                    defaultColors.map((color, index) => {
                        return <li key={index} className='default-color'>
                            <button           
                                // value={color.code}
                                onClick={handleDefaultColorClick}>
                                    {color.name}
                            </button>
                        </li>
                         
                    })
                }
            </ul>

        </div>
    )

}

export default DefaultColors;