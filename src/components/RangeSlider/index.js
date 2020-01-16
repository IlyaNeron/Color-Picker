import React from "react";

import "./index.css";

const RangeSlider = props => {
  const [colorCount, setColorCount] = React.useState(0);

  React.useEffect(() => {
    setInitialColor();
  }, [props.chosenColor]);

  // React.useEffect(() => {
  //   props.setThunk(colorCount);
  // }, [colorCount]);

  const setInitialColor = () => {
    setColorCount(convertHex(props.chosenColor));
  };

  console.log(props.chosenColor);

  const convertHex = hex => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    switch (props.colorSelector) {
      case "red":
        return r;
      case "green":
        return g;
      case "blue":
        return b;
      default:
        alert("dsfgdeg");
    }
  };

  const handleInputValue = e => {
    setColorCount(e.target.value);
  };

  return (
    <input
      type="range"
      min="0"
      max="255"
      step="1"
      value={colorCount}
      className={"range-slider range-slider-" + props.colorSelector}
      onChange={e => handleInputValue(e)}
    />
  );
};

export default React.memo(RangeSlider);
