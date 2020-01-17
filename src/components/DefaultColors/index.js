import React from "react";

import "./index.css";

const defaultColorsArray = [
  {
    name: "red",
    code: "#ff0000"
  },
  {
    name: "yellow",
    code: "#FFFF00	"
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

const DefaultColors = props => {
  const defaultColorsMenuRef = React.useRef(null);
  const [isColorsMenuOpened, setColorsMenuOpened] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("click", detectOutClick);
    return () => {
      document.removeEventListener("click", detectOutClick);
    };
  }, []);

  const detectOutClick = e => {
    if (!defaultColorsMenuRef.current.contains(e.target)) {
      setColorsMenuOpened(false);
    }
  };

  const defaultMenuToggle = React.useCallback(() => {
    setColorsMenuOpened(!isColorsMenuOpened);
  }, [isColorsMenuOpened]);

  return (
    <div
      className="default-color"
      onClick={defaultMenuToggle}
      ref={defaultColorsMenuRef}
    >
      {isColorsMenuOpened && (
        <ul className="default-colors-menu">
          {defaultColorsArray.map(item => (
            <li key={item.code} onClick={e => props.setColor(item.code)}>
              {item.name}
              <span
                className="color-indicator"
                style={{ backgroundColor: item.code }}
              ></span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default React.memo(DefaultColors);
