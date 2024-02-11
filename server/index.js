// const http = require("http");
// const React = require("react");
// const path = require("path");
// const App = require("../src/App.tsx").default;
// const ReactDOMServer = require("react-dom/server");
// const fs = require("fs");

// const port = 9000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     const app = ReactDOMServer.renderToString(React.createElement(App));

//     const html = `
//   <html lang="en">
//   <head>
//       <script src="client.js" async defer></script>
//   </head>
//   <body>
//       <div id="root">${app}</div>
//   </body>
//   </html>
//   `;

//     res.writeHead(200, { "Content-Type": "text/html" });
//     //const responseMessage = "<h1>Hello World</h1>";
//     res.end(html);
//   } else {
//     const filePath = path.join(__dirname, "build", req.url);
//     fs.readFile(filePath, (err, data) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("404 Not Found");
//       } else {
//         res.writeHead(200, { "Content-Type": getContentType(filePath) });
//         res.end(data);
//       }
//     });
//   }
// });
// server.listen(port);
// //console.log(`The server has started and is listening on port number: ${port}`);
// function getContentType(filePath) {
//   const extname = path.extname(filePath);
//   switch (extname) {
//     case ".html":
//       return "text/html";
//     case ".js":
//       return "text/javascript";
//     case ".css":
//       return "text/css";
//     default:
//       return "application/octet-stream";
//   }
// }

import http from "http";
import React from "react";
import App from "../src/App";
// import "../src/App.scss";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
// import path from "path";

const port = 9000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const app = ReactDOMServer.renderToString(React.createElement(App));

    const html = `
      <html lang="en">
        <head>
          <script src="client.js" async defer></script>
          <style>${fs.readFileSync("./src/pages/produce.scss", "utf8")}</style>
          <style>${fs.readFileSync("./src/header/header.scss", "utf8")}</style>
          
        </head>
        <body>
          <div id="root">${app}</div>
        </body>
      </html>
    `;

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
    // } else {
    //   const filePath = path.join(__dirname, "build", req.url);
    //   fs.readFile(filePath, (err, data) => {
    //     if (err) {
    //       res.writeHead(404, { "Content-Type": "text/plain" });
    //       res.end("404 Not Found");
    //     } else {
    //       res.writeHead(200, { "Content-Type": getContentType(filePath) });
    //       res.end(data);
    //     }
    //   });
  }
});

server.listen(port);

// function getContentType(filePath) {
//   const extname = path.extname(filePath);
//   switch (extname) {
//     case ".html":
//       return "text/html";
//     case ".js":
//       return "text/javascript";
//     case ".css":
//       return "text/css";
//     default:
//       return "application/octet-stream";
//   }
// }
