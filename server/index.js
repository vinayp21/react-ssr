const React = require("react");
const express = require("express");
const path = require("path");
var ReactDOMServer = require("react-dom/server");
const fs = require("fs");
import Home from "../src/Home.js";
// next js code

// const next = require("next");
// const dev = true;

// import Route from "../src/routes.js";
// const app = next({ dev });
// const handle = app.getRequestHandler();
// app.prepare().then(() => {
//   const server = express();
//   server.get("*", (req, res) => {
//     return handle(req, res);
//   });
//   server.listen(3001, () => {
//     console.log("started server");
//   });
// });

const app = express();

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<Home />);
  const indexFile = path.resolve("./dist/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});
app.use(express.static("./dist"));

app.listen(3001, err => {
  if (!err) {
    console.log("started node server");
  }
});
