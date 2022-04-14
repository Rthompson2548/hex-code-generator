import React from 'react';
import "./DefaultColors.css"
const DefaultColors = ({ defaultColors, handleDefaultColorClick }) => {
    
    return (
        <div>
            <p>Default Colors</p>

            {/* WORKS */}
            <ul className="default-colors">
                {
                    defaultColors.map((color, index) => {
                        return <li key={index} className='default-color'>
                            <button
                                
                                /** sets value to the hex code for the color */
                                value={color.code}
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