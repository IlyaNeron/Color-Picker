import React from "react";

import "./index.css";
import RangeSlider from "../RangeSlider";

const ColorSlider = props => {
  const sliderMenuRef = React.useRef(null);
  const cancelBtnRef = React.useRef(null);
  const [isSliderMenuOpened, setSliderMenuOpened] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("click", detectOutClick);
    return () => {
      document.removeEventListener("click", detectOutClick);
    };
  });

  const detectOutClick = e => {
    if (
      (sliderMenuRef.current && !sliderMenuRef.current.contains(e.target)) ||
      e.target === cancelBtnRef.current
    ) {
      if (isSliderMenuOpened) {
        setSliderMenuOpened(false);
      }
    }
  };

  return (
    <div className="chosen-color" onClick={() => setSliderMenuOpened(true)}>
      <span
        className="color-indicator"
        style={{ backgroundColor: props.chosenColor }}
      ></span>
      {isSliderMenuOpened && (
        <div className="color-slider-menu" ref={sliderMenuRef}>
          <div className="slider-block">
            <div className="color-range-name">
              <span>r</span>
              <span>g</span>
              <span>b</span>
            </div>
            <div className="color-range-sliders">
              <RangeSlider
                colorSelector="red"
                chosenColor={props.chosenColor}
                setThunk={props.setRedThunk}
              />
              <RangeSlider
                colorSelector="green"
                chosenColor={props.chosenColor}
                setThunk={props.setGreenThunk}
              />
              <RangeSlider
                colorSelector="blue"
                chosenColor={props.chosenColor}
                setThunk={props.setBlueThunk}
              />
            </div>
          </div>
          <div className="control-block">
            <button type="button" className="btn-cancel" ref={cancelBtnRef}>
              cancel
            </button>
            <button type="button" className="btn-enter">
              ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(ColorSlider);
