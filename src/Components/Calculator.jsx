import React, { useState } from "react";

function Calculator() {
  const [cookingTemp, setCookingTemp] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  function handleCookingTempChange(event) {
    setCookingTemp(event.target.value);
  }

  function handleCookingTimeChange(event) {
    setCookingTime(event.target.value);
  }

  const cookingTemps = {
    "1": "",
    "2": "170 deg (c)",
    "3": "180 deg (c)",
    "4": "190 deg (c)",
    "5": "200 deg (c)",
    "6": "210 deg (c)",
    "7": "220 deg (c)",
  };
  const tempMap = {
    "1": "",
    "2": "150 deg (c)",
    "3": "160 deg (c)",
    "4": "170 deg (c)",
    "5": "180 deg (c)",
    "6": "190 deg (c)",
    "7": "200 deg (c)",
  };

  const cookingTimes = {
    "1": "",
    "2": "10 Minutes",
    "3": "15 Minutes",
    "4": "20 Minutes",
    "5": "25 Minutes",
    "6": "30 Minutes",
    "7": "35 Minutes",
    "8": "40 Minutes",
    "9": "45 Minutes",
    "10": "50 Minutes",
    "11": "55 Minutes",
    "12": "60 Minutes",
  };
  const timeMap = {
    "1": "",
    "2": "8 Minutes",
    "3": "12 Minutes",
    "4": "16 Minutes",
    "5": "20 Minutes",
    "6": "24 Minutes",
    "7": "28 Minutes",
    "8": "32 Minutes",
    "9": "36 Minutes",
    "10": "40 Minutes",
    "11": "44 Minutes",
    "12": "48 Minutes",
  }


  return (
    <div className="hero">
      <div className="hero-container">
        <div className="title-text">
          <h1>AIR<br/>FRYER<br/>COOKING<br/>CALCULATOR</h1>
          <p>This calculator is to be used for guide purposes only. Please always check your meals are fully cooked through before eating.</p>
        </div>
        <div className="af-cooking-calc">
          <div className="cooking-input-container">
            <div className="cooking-input cooking-time">
            <h3>Cooking Time</h3>
              <label htmlFor="cooking-time-input">Choose the cooking time (mins) from your foods packaging:</label>
              <select name="cooking-time-input" id="cooking-time-input" className="input-select" value={cookingTime} onChange={handleCookingTimeChange}>
                {Object.entries(cookingTimes).map(([value, text]) => (
                  <option key={value} value={value}>{text}</option>
                ))}
              </select>
            </div>
            <div className="cooking-input cooking-temp">
              <h3>Cooking Temp</h3>
              <label htmlFor="cooking-temp-input">Choose the temperature (c) for a fan oven from your foods packaging:</label>
              <select name="cooking-temp-input" id="cooking-temp-input" className="input-select" value={cookingTemp} onChange={handleCookingTempChange}>
                {Object.entries(cookingTemps).map(([value, text]) => (
                  <option key={value} value={value}>{text}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="af-cooking-result">
            You should cook your food for: 
            <span className="af-cooking-time cook-content">
              {timeMap[cookingTime]}
            </span>
            at
            <span className="af-cooking-temp cook-content">{tempMap[cookingTemp]}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Calculator
