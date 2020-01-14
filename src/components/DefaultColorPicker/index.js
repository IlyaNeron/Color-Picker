import React from "react";

import "./index.css";

const defaultColorsArray = [
  {
    name: "red",
    code: "#ff0000"
  },
  {
    name: "yellow",
    code: "#d3c71ddc"
  },
  {
    name: "green",
    code: "#008000"
  },
  {
    name: "blue",
    code: "#0000ff"
  }
];

const DefaultColorPicker = props => {
  const defaultColorsMenuRef = React.useRef(null);
  const [isDefaultMenuOpened, setDefaultMenuOpened] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("click", detectOutClick);
    return () => {
      document.removeEventListener("click", detectOutClick);
    };
  }, []);

  const detectOutClick = e => {
    if (!defaultColorsMenuRef.current.contains(e.target)) {
      setDefaultMenuOpened(false);
    }
  };

  const defaultMenuToggle = React.useCallback(() => {
    setDefaultMenuOpened(!isDefaultMenuOpened);
  }, [isDefaultMenuOpened]);

  return (
    <div
      className="default-color"
      onClick={defaultMenuToggle}
      ref={defaultColorsMenuRef}
    >
      {isDefaultMenuOpened && (
        <ul className="default-colors-menu">
          {defaultColorsArray.map(item => (
            <li key={item.code}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DefaultColorPicker;
