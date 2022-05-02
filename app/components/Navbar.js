import React, { useState } from "react";

const Navbar = (props) => {
  const [formation, setFormation] = useState('442')
  return (
    <div className="navbar">
      <p>Login</p>
      <div className="formation-selector" >
        <p>Fomation</p>
        <select name="formation" id="lang" number="3" onClick={(event) => {
          props.setFormation(event.target.options[event.target.selectedIndex].value)
        }}> 
          <option value="442">442</option>
          <option value="41212">41212</option>
          <option value="433">433</option>
          <option value="4231">4231</option>
          <option value="4141">4141</option>
          <option value="343">343</option>
          <option value="352">352</option>
          <option value="523">523</option>
          <option value="532">532</option>
        </select>
      </div>
      <div className="color-selector" >
        <p>Color</p>
        <select name="color" id="lang" number="3" onClick={(event) => {
          props.setPlayerColor(event.target.options[event.target.selectedIndex].value)
        }}> 
          <option value="red"  >Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
        </select>
      </div>
      <p>Save</p>
    </div>
  );
};

export default Navbar;
