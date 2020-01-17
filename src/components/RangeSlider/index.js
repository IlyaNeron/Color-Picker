import React from "react";

import "./index.css";

const RangeSlider = props => {
  const handleInputValue = e => {
    const rgbSliderValue = parseInt(e.target.value, 10);

    props.setValue(value => {
      const mutColorArr = { ...value };
      mutColorArr[props.field] = rgbSliderValue;

      return mutColorArr;
    });
  };

  return (
    <input
      type="range"
      min="0"
      max="255"
      step="1"
      value={props.color}
      className={"range-slider range-slider-" + props.field}
      onChange={e => handleInputValue(e)}
    />
  );
};

export default React.memo(RangeSlider);
