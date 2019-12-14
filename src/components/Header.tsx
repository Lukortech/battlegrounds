import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../Routing/Routes";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg">
      <ul className="navbar-nav mr-auto">
        <a className="navbar-brand" href="#">
          <h1 className="mx-2 font-purple_dark">Lukortech</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <p className="mx-1 font-purple_light">a true player</p>
        {Routes.map((route) => (
          <li className={`nav-item ${route.path === location.pathname ? "active" : null}`}>
            <Link className="nav-link" to={route.path}>
              {route.componentName}
            </Link>
          </li>
        ))}
      </ul>

      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Header;
