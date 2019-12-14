import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./Routes";
import { Header } from "../components";

export function MyRouter() {
  const routeComponents = Routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router>
      <Header />
      <Switch>{routeComponents}</Switch>
    </Router>
  );
}

export default MyRouter;
