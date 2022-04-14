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
                                className='color-btn'
                                value={color.code}
                                onClick={handleDefaultColorClick}>
                                <p>{color.name}</p>
                                <p>{color.code}</p>
                                {/* <p>{color.year}</p> */}
                            </button>
                        </li>
                         
                    })
                }
            </ul>

        </div>
    )

}

export default DefaultColors;