import React from "react";
import ReactDom from "react-dom";
import Routes from "./routes";

// import Home from "./Home";

ReactDom.hydrate(<Routes />, document.getElementById("root"));
