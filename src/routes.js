import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  StaticRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import Register from "./Register";
// const Register = lazy(() => import("./Register"));

const Routes = ({ loc }) => {
  console.log(loc);
  if (loc) {
    return (
      <StaticRouter location={loc}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </StaticRouter>
    );
  }
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
