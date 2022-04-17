import React, { useState } from 'react';
import Values from 'values.js';
import "../App.scss";
import "./HexGenerator.scss";
import SingleColor from '../SingleColor';
import HexGeneratorHeader from './HexGeneratorHeader/HexGeneratorHeader';
import GenerateColors from './GenerateColors/GenerateColors';


const HexGenerator = () => {
  const [hexCode, setHexCode] = useState("");
  const [hexCodeList, setHexCodeList] = useState(new Values("#ff0000").all(5));

  const handleHexCodeState = (event) => {
    event.preventDefault();
    setHexCode(event.target.value)
  }

  return (
    <div className='hex-generator'>
      <HexGeneratorHeader />
      
      <div className='hex-generator-form'>               
        <input
            type="text"
            id="hex-code"
            name={hexCode}
            value={hexCode}
            onChange={handleHexCodeState}
            placeholder='#ED254E'
        >
        </input>    
      
        <GenerateColors
          hexCode={hexCode}
          setHexCode={setHexCode}
          hexCodeList={hexCodeList}
          setHexCodeList={setHexCodeList}
        />
      </div>
      
        <section className="color-list">
          {
            hexCodeList.map((color, index) => {
              return (
                <SingleColor
                  key={index}
                  {...color}
                  index={index}
                  hexCode={color.hex}
                />
              )
              
            })
          }
        </section>        
    </div>
  )
}

export default HexGenerator;
