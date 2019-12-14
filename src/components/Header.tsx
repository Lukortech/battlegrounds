import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../Routing/Routes";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  let location = useLocation();

  return (
    <nav className="navbar navbar-shadow justify-content-center justify-content-md-between navbar-expand-lg">
      <ul className="navbar-nav mr-md-auto align-items-center">
        <li className="nav-item  mr-3">
          <a className="navbar-brand mr-0" href="/">
            <h1 className="font-gradient-main mx-2 my-0">&lt;Lukortech &#47;&gt;</h1>
          </a>
        </li>
        <div className="menu d-none d-lg-flex flex-column flex-md-row d-lg-flex">
          {Routes.map((route) => (
            <li className={`nav-item mx-2 ${route.path === location.pathname ? "active" : ""}`}>
              <Link className="nav-link" to={route.path}>
                {route.componentName}
              </Link>
            </li>
          ))}
        </div>
      </ul>
      <form className="d-flex form-inline mx-4 mx-md-2 my-lg-0">
        <div className="input-group">
          <input
            className="form-control mr-0"
            type="search"
            placeholder="Song name, artist, genre.."
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="d-flex d-lg-none dropdown">
        <button
          className="btn btn-link dropdown-toggle"
          type="button"
          id="menuDropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          Menu
        </button>
        <div className="dropdown-menu" aria-labelledby="menuDropdown">
          {Routes.map((route) => (
            <div className={`nav-item mx-2 ${route.path === location.pathname ? "active" : ""}`}>
              <Link className="nav-link" to={route.path}>
                {route.componentName}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

//<p className="font-gradient-main mx-1 my-0 text-center">the only player you'll need</p>
export default Header;
