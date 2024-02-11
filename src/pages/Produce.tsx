// require("./produce.scss");
// const { Header } = require("../header/Header");

// exports.Produce = () => {
//   return React.createElement(
//     "main",
//     { className: "main" },
//     React.createElement(Header, null),
//     React.createElement("br", null),
//     React.createElement("label", { id: "main__name-label" }, "名前"),
//     React.createElement("br", null),
//     React.createElement("h3", null, "ざき"),

//     React.createElement("label", { id: "main__old-label" }, "年齢"),
//     React.createElement("br", null),
//     React.createElement("h3", null, "20歳"),

//     React.createElement("label", { id: "main__ken-label" }, "出身地"),
//     React.createElement("br", null),
//     React.createElement("h3", null, "日本")
//   );
// };

import "./produce.scss";
import { Header } from "../header/Header";

export const Produce = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <main className="main">
        <Header />
        <br />
        <label id="main__name-label">名前</label>
        <br />
        <h3>ざき</h3>

        <label id="main__old-label">年齢</label>
        <br />
        <h3>20歳</h3>

        <label id="main__ken-label">出身地</label>
        <br />
        <h3>日本</h3>
      </main>
    </div>
  );
};
