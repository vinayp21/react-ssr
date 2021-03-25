import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
import Home from "./Home";
// import Contact from "./Contact";
const Contact = lazy(() => import("./Contact"));

// export const history = createBrowserHistory();

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
