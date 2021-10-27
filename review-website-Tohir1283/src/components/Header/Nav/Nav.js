import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const style = { textDecoration: "none", margin: "30px", color: "gold" };

  return (
    <div className="navBar">
      <nav className="nav">
        <h3 className="ms-4 p-2 text-warning">Course HUB</h3>

        <div>
          <Link to="/" style={style}>
            Home
          </Link>
          <Link to="/Courses" style={style}>
            Courses{" "}
          </Link>

          {/* <Link to="/Cart" style={style}>
            Cart
          </Link> */}

          <Link to="/MigratedCourses" style={style}>
            Migrated Courses{" "}
          </Link>
          <Link to="/About" style={style}>
            About us
          </Link>
          <Link to="/Helpline" style={style}>
            Helpline
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
