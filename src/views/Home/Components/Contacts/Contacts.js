import React from "react";
import PropTypes from "prop-types";

const Contacts = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="wrap-contact">
            <div
              className="avatar mb-4"
              style={{ backgroundImage: "url('./image/avatar1.jpg')" }}
            ></div>
            <div className="info">this is info</div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {};

export default Contacts;
