import React from 'react';
import "./Home.css";

const Home = () => {

    return (
        <div className="home-container">

            <div className="title">
                <h1 className='home-title'>Color</h1>
                <h1 className='home-title'>Generator</h1>
            </div>

            <div className="header">
                <h2>Create analogous</h2>
                <h2>color schemes</h2>
                
                <button className="generate-colors-page-btn">
                    Generate colors
                </button>
            </div>

            

        </div>
    )

};

export default Home;
