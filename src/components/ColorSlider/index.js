import React from "react";

import "./index.css";

const ColorSlider = props => {
  const sliderMenuRef = React.useRef(null);
  const [isSliderMenuOpened, setSliderMenuOpened] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("click", detectOutClick);
    return () => {
      document.removeEventListener("click", detectOutClick);
    };
  }, []);

  const detectOutClick = e => {
    if (!sliderMenuRef.current.contains(e.target)) {
      setSliderMenuOpened(false);
    }
  };

  const sliderMenuToggle = React.useCallback(() => {
    setSliderMenuOpened(!isSliderMenuOpened);
  }, [isSliderMenuOpened]);

  return (
    <div
      className="chosen-color"
      onClick={sliderMenuToggle}
      ref={sliderMenuRef}
    >
      <span className="color-indicator"></span>
      {isSliderMenuOpened && (
        <div className="color-slider-menu">
          <div className="control-block">
            <button type="button">cancel</button>
            <button type="button">ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorSlider;
