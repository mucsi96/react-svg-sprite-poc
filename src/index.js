import React from "react";
import ReactDOM from "react-dom";
import Icon from "./icon";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Icon className="icon1" type="square" />
      <Icon className="icon2" type="circle" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
