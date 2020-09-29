import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {
    expandNavbar: false,
  };

  toggleMenu = () => {
    this.setState({ expandNavbar: !this.state.expandNavbar });
  };

  render() {
    const { branding } = this.props;
    const showNavbar = this.state.expandNavbar ? "show" : "";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <Link className="navbar-brand" style={{ color: "white" }} to="/">
          {branding}
        </Link>
        <button
          className="navbar-toggler"
          style={{ backgroundColor: "white" }}
          onClick={this.toggleMenu}
        >
          <span className="fa fa-bars" />
        </button>
        <div
          className={"collapse navbar-collapse " + showNavbar}
          id="navbarSupportedContent"
        >
          <div className="navbar-nav">
            <Link
              className="nav-item nav-link"
              style={{ color: "white" }}
              to="/"
            >
              <i className="fas fa-home" style={{ padding: "5px" }}></i>
              Home
            </Link>
            <Link
              className="nav-item nav-link"
              style={{ color: "white" }}
              to="/add"
            >
              <i className="fas fa-plus" style={{ padding: "5px" }}></i>
              Add Contact
            </Link>
            <Link
              className="nav-item nav-link"
              style={{ color: "white" }}
              to="/about"
            >
              <i className="fas fa-question" style={{ padding: "5px" }}></i>
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: "My App",
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
