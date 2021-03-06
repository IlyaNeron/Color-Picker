import React from "react";

import "./index.css";
import RangeSlider from "../RangeSlider";
import { rgbToHex, hexToRgb } from "../Color/color";

const ColorSlider = props => {
  const sliderMenuRef = React.useRef(null);
  const [isSliderMenuOpened, setSliderMenuOpened] = React.useState(false);
  const [colorIndicator, setColorIndicator] = React.useState(null);
  const [rgbState, setRgbState] = React.useState(hexToRgb(props.chosenColor));

  React.useEffect(() => {
    document.addEventListener("click", detectOutClick);
    return () => {
      document.removeEventListener("click", detectOutClick);
    };
  });

  React.useEffect(() => {
    setColorIndicator(props.chosenColor);
    setRgbState(hexToRgb(props.chosenColor));
  }, [props.chosenColor, isSliderMenuOpened]);

  React.useEffect(() => {
    if (!isSliderMenuOpened) {
      return;
    }

    setColorIndicator(rgbToHex(rgbState));
  }, [rgbState, isSliderMenuOpened]);

  const detectOutClick = e => {
    if (sliderMenuRef.current && !sliderMenuRef.current.contains(e.target)) {
      if (isSliderMenuOpened) {
        setSliderMenuOpened(false);
      }
    }
  };

  const setValueFromRgb = () => {
    props.setChosenColor(rgbToHex(rgbState));
    sliderMenuToggle();
  };

  const sliderMenuToggle = () => {
    setSliderMenuOpened(!isSliderMenuOpened);
  };

  return (
    <>
      <div className="chosen-color" onClick={sliderMenuToggle}>
        <span
          className="color-indicator"
          style={{ backgroundColor: colorIndicator }}
        ></span>
      </div>
      {isSliderMenuOpened && (
        <div className="color-slider-menu" ref={sliderMenuRef}>
          <div className="slider-block">
            <div className="color-range-name">
              <span>r</span>
              <span>g</span>
              <span>b</span>
            </div>
            <div className="color-range-sliders">
              {["red", "green", "blue"].map(color => (
                <RangeSlider
                  key={color}
                  field={color}
                  setValue={setRgbState}
                  color={rgbState[color]}
                />
              ))}
            </div>
          </div>
          <div className="control-block">
            <button
              type="button"
              className="btn-cancel"
              onClick={sliderMenuToggle}
            >
              cancel
            </button>
            <button
              type="button"
              className="btn-enter"
              onClick={setValueFromRgb}
            >
              ok
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(ColorSlider);
