import React, { Component } from "react";
import { Link } from "react-router-dom";


class NavBar extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand disabled" to="/home">
          twiter
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </nav>
    );
  }
}
export default NavBar;