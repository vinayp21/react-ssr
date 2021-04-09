import React from "react";
// import { Link } from "react-router-dom";
// import random from "lodash/random";

import Header from "./Header";
import List from "./List";

import "./styles.css";

const Home = () => {
  return (
    <div>
      {/* {random()} */}
      <Header />
      <List />
    </div>
  );
};

export default Home;
