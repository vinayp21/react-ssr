import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
import Home from "./Home";
import Register from "./Register";
// const Register = lazy(() => import("./Register"));

// export const history = createBrowserHistory();

const Routes = () => {
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
