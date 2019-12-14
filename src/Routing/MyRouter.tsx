import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Routes } from "./Routes";
import { Header, Footer, Breadcrumb } from "../components";

export function MyRouter() {
  const routeComponents = Routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router>
      <Header />
      <Breadcrumb />
      <Switch>{routeComponents}</Switch>
      <Footer />
    </Router>
  );
}

export default MyRouter;
