import React from "react";

import "./index.css";

const RangeSlider = props => {
  const [colorCount, setColorCount] = React.useState(0);

  React.useEffect(() => {
    setInitialColor();
  }, [props.initialColor]);

  React.useEffect(() => {
    props.setValue(colorCount);
  }, [colorCount]);

  const setInitialColor = () => {
    setColorCount(convertHex(props.initialColor));
  };

  const convertHex = hex => {
    hex = hex.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return props.color === "red"
      ? r
      : null || props.color === "green"
      ? g
      : null || props.color === "blue"
      ? b
      : null;
  };

  const handleInputValue = e => {
    setColorCount(parseInt(e.target.value, 10));
  };

  return (
    <input
      type="range"
      min="0"
      max="255"
      step="1"
      value={colorCount}
      className={"range-slider range-slider-" + props.color}
      onChange={e => handleInputValue(e)}
    />
  );
};

export default React.memo(RangeSlider);
