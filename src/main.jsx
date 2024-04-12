import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import "./index.css";

function printComponent(number) {
  return Array.from({ length: number }, (_, index) => (
    <Card key={index} item={index} />
  ));
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="grid">{printComponent(20)}</div>
  </React.StrictMode>
);
