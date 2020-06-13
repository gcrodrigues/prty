import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home, Login, Signup, Events, Dashboard, Settings } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/events" component={Events} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
