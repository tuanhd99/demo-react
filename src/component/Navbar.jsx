import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="top-bar">
      <div className="container">
        <div className="row justify-content-between my-2 py-3 border-bottom border-bottom-secondary">
          <div className="col-auto">
            <NavLink
              className="navbar-brand fw-bold fs-4 text-secondary"
              to="/"
            >
              MYSTORE WITH REACT
            </NavLink>
          </div>
          <div className="col-auto">
            <div className="buttons">
              <NavLink
                to="/facebook"
                className="btn btn-outline-dark rounded-circle "
              >
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </NavLink>
              <NavLink
                to="/instagram"
                className="btn btn-outline-dark ms-2 rounded-circle "
              >
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </NavLink>
              <NavLink
                to="/twitter"
                className="btn btn-outline-dark ms-2 rounded-circle "
              >
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
