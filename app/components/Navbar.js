import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <p>Login</p>
      <p>Formations</p>
      <div className="color-selector" >
        <p>Color</p>
        <select name="languages" id="lang" number="3" onClick={(event) => {
          console.log(event)
        }}> 
          <option value="red">Red</option>
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
