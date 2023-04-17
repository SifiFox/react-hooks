import React from "react";
import logo from "./logo.svg";
import "./App.css";

import useToggle from "./hooks/useToggle";
function App() {
  const [isVisible, toggleVisible] = useToggle(true);

  return (
    <div className="App">
      {isVisible && <div>test</div>}

      <button onClick={toggleVisible}>Change text visible</button>
    </div>
  );
}

export default App;
