// require("./index.css");
// const { hydrateRoot } = require("react-dom/client");
// const reportWebVitals = require("./reportWebVitals").default;

// const container = document.getElementById("root");
// hydrateRoot(container, React.createElement(App));

// reportWebVitals();

import "./index.scss";
import App from "./App";
import { hydrateRoot } from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";
// import React from "react";
// import ReactDOM from "react-dom/client";

const container = document.getElementById("root") as HTMLElement;
hydrateRoot(container, <App />);

// reportWebVitals();
// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
