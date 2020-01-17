import React from "react";

import "./index.css";

const RangeSlider = props => {

  const handleInputValue = e => {
    props.setValue(parseInt(e.target.value, 10));
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
