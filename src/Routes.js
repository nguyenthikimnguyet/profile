import React from "react";
import PropTypes from "prop-types";
import RouterWithLayout from "./components/Routerwithlayout";
import { Switch } from "react-router-dom";
import { Main } from "./layouts";
import { Home } from "./views";

const Routes = (props) => {
  return (
    <Switch>
      <RouterWithLayout component={Home} layout={Main} exact path="/profile" />
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
