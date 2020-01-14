import React from "react";

import "./index.css";
import ColorSlider from "../ColorSlider";
import DefaultColorPicker from "../DefaultColorPicker";

const ColorPicker = props => {
  const [color, setColor] = React.useState(props.value);

  return (
    <div className="color-picker">
      <div className="color-output">
        <span>{color}</span>
      </div>
      <ColorSlider />
      <DefaultColorPicker />
    </div>
  );
};

export default ColorPicker;
