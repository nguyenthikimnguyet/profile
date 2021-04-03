import React from "react";
import PropTypes from "prop-types";
import {
  AboutMe,
  ActiveMe,
  Contacts,
  Education,
  Prize,
  Slogun,
  Specialized,
} from "./Components";

const Home = (props) => {
  return (
    <div>
      <Specialized />
      <AboutMe />
      <ActiveMe />
      <Education />
      {/* <Contacts /> */}
      <Slogun />
      <Prize />
    </div>
  );
};

Home.propTypes = {};

export default Home;
