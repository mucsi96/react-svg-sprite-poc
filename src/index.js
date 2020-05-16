import React from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Icon className="icon1" type="square" />
      <Icon className="icon2" type="circle" />
      <Icon className="icon3" type="circle2" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
