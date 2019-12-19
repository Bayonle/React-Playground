import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../App'
import FilterableProductTable from './FilterableProduct/FilterableProductTable'
import BaseShowcaseInput from './base/input/BaseShowcaseInput'
import BaseShowcaseSelect from './base/select/BaseShowcaseSelect'

 const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/filterable-product" component={FilterableProductTable}></Route>
        <Route path="/base-showcase-input" component={BaseShowcaseInput}></Route>
        <Route path="/base-showcase-select" component={BaseShowcaseSelect}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
