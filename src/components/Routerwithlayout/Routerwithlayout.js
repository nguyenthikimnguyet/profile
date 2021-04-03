import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
const Routerwithlayout = (props) => {
  const { component: Component, layout: Layout, ...other } = props;
  return (
    <Route
      {...other}
      // render={(matchProps) => (
      //  <Layout {...matchProps}>
      //    <Component {...matchProps} />
      //  </Layout>
      // )}
    >
      <Layout>
        <Component />
      </Layout>
    </Route>
  );
};

Routerwithlayout.propTypes = {};

export default Routerwithlayout;
