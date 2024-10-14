






import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light w-100">
      <div className="container-fluid">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"} className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/settings"} className="nav-link">
              Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/contact"} className="nav-link">
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/categories"} className="nav-link">
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default NavBar