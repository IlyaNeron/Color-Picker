import React from "react";

import ColorPicker from "../ColorPicker";
import "./App.css";

const App = props => {
  const initialColor = "#ff0b60";
  return (
    <div className="App">
      <ColorPicker initialValue={initialColor} />
    </div>
  );
};

export default App;
