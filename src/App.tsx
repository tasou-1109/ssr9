// const React = require("react");
// require("./App.css");
// const Produce = require("./pages/Produce").Produce;

// function App() {
//   return React.createElement(
//     "div",
//     { className: "App" },
//     React.createElement(Produce, null)
//   );
// }

// module.exports = App;

// import React from "react";
import "./App.scss";
import { Produce } from "./pages/Produce";

export const App = () => {
  return (
    <div className="App">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <Produce />
    </div>
  );
};

export default App;
