import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import sprite from "./sprite.svg";

function App() {
  return (
    <div className="App">
      <img src={sprite} alt="dsfs" />
      <p>Here we should see a triangle and a circle</p>
      <svg viewBox="0 0 28.3 28.3" className="App-icon">
        <use xlinkHref={`${sprite}#circle`} />
      </svg>
      <svg viewBox="0 0 28.3 28.3" className="App-icon">
        <use xlinkHref={`${sprite}#circle`} />
      </svg>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
