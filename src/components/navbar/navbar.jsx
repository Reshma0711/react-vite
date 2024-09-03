import { Link, NavLink } from "react-router-dom";
import "./navbar.css"






const NavBar=()=>{
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"about"}>About</NavLink>
            </li>
            <li className="nav-item">
             <NavLink to={"settings"}>Settings</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default NavBar