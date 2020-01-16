import React from "react";

import ColorSlider from "../ColorSlider";
import DefaultColorPicker from "../DefaultColors";

import "./index.css";

const ColorPicker = props => {
  const [color, setColor] = React.useState(props.initialValue);
  const [redThunk, setRedThunk] = React.useState(null);
  const [greenThunk, setGreenThunk] = React.useState(null);
  const [blueThunk, setBlueThunk] = React.useState(null);

  React.useEffect(() => {
    if (!redThunk && !greenThunk && !blueThunk) {
      return;
    }
    setColor(rgbToHex());
  }, [redThunk, greenThunk, blueThunk]);

  const rgbToHex = (r = redThunk, g = greenThunk, b = blueThunk) => {
    if (r && g && b) {
      return "#" + [r, g, b].map(x => x.toString(16).padStart(2, "0")).join("");
    }
  };

  return (
    <div className="color-picker">
      <div className="color-output">
        <span>{color}</span>
      </div>
      <ColorSlider
        chosenColor={color}
        setChosenColor={setColor}
        setRedThunk={setRedThunk}
        setBlueThunk={setBlueThunk}
        setGreenThunk={setGreenThunk}
      />
      <DefaultColorPicker color={color} setColor={setColor} />
    </div>
  );
};

export default React.memo(ColorPicker);
