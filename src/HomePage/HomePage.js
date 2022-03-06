import React from 'react';
import "./HomePage.css";

const HomePage = ({ setInitialComponent }) => {
    return (

        <div className='home-page-container'>
            
            <div className='header-container'>
                <h1>Hex Generator</h1>
                <h2>Generate analogous colors</h2>      
            </div>
            
            
            <div className="button">
                <button onClick={setInitialComponent(false)}>Generate colors</button>
            </div>
        </div>
        
    )
};

export default HomePage;