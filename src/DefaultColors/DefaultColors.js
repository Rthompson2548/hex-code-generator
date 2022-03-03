import React /** , { useState } */ from 'react';

const DefaultColors = ({ defaultColors }) => {
    
    const handleDefaultColorClick = (event) => {

        event.preventDefault();

        

    }

    return (
        <div>
            <p>Default Colors</p>

            <ul className="default-colors">
                {
                    defaultColors.map((color, index) => {
                        return <li key={index}>
                            <button value={color.code}>{color.name}</button>
                        </li>
                         
                    })
                }
            </ul>

        </div>
    )

}

export default DefaultColors;