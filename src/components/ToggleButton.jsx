import React from "react";
import "./toggleButton.css";

export const ToggleSwitch = ({onClick}) => {
  return (
    <label className="switch">
      <input type="checkbox" onClick={onClick}/>
      <span className="slider" />
    </label>
  );
};
