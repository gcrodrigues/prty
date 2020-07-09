import React from "react";
import { Switch } from "react-router-dom";

import Route from "./route";

import {
  Home,
  Login,
  Signup,
  Events,
  AllEvents,
  Dashboard,
  Settings,
  Search,
} from "../pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/events" component={AllEvents} />

      <Route path="/create" component={Dashboard} isPrivate />
      <Route path="/myevents" component={Events} isPrivate />
      <Route path="/settings" component={Settings} isPrivate />
      {/* <Route path="/favorites" component={Favorites} isPrivate /> */}
      <Route path="/search" component={Search} isPrivate />

      <Route path="/" component={() => <h1>404 - Not Found</h1>} />
    </Switch>
  );
};

export default Routes;
