import React from "react";

import ColorSlider from "../ColorSlider";
import DefaultColorPicker from "../DefaultColors";

import "./index.css";

const ColorPicker = props => {
  const [color, setColor] = React.useState(props.initialValue);

  return (
    <div className="color-picker">
      <div className="color-output">
        <span>{color}</span>
      </div>
      <ColorSlider chosenColor={color} setChosenColor={setColor} />
      <DefaultColorPicker setColor={setColor} />
    </div>
  );
};

export default React.memo(ColorPicker);
