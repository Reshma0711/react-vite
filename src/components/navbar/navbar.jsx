






import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useContext } from "react";
import { Userdetails } from "../../navigation/navigationstack";

const NavBar = () => {

const val =useContext(Userdetails)
console.log(val)

  return (
    <nav
      className={`navbar navbar-expand-sm bg-${
        val.theme ? "dark" : "light"
      }   w-100`}
    >
      <div className="container-fluid">
        <ul className={`navbar-nav mx-auto`}>
          <li className="nav-item">
            <NavLink
              to={"/"}
              className={`nav-link ${val.theme ? "text-white" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/about"}
              className={`nav-link ${val.theme ? "text-white" : ""}`}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/settings"}
              className={`nav-link ${val.theme ? "text-white" : ""}`}
            >
              Settings
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/contact"}
              className={`nav-link ${val.theme ? "text-white" : ""}`}
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/categories"}
              className={`nav-link ${val.theme ? "text-white" : ""}`}
            >
              Categories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to={"/products"}
              className={`nav-link ${val.theme ? "text-white" : ""}`}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}


export default NavBar