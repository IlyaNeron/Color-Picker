import React from "react";

import ColorPicker from "./components/ColorPicker";
import "./App.css";

const App = props => {
  const initialColor = "#ff0000";
  return (
    <div className="App">
      <ColorPicker value={initialColor} />
    </div>
  );
};

export default App;
