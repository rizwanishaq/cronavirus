import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
      <Link to="/">
        <img
          src={"http://pngimg.com/uploads/coronavirus/coronavirus_PNG46.png"}
          width={"45"}
          alt={""}
          className="d-inline-block align-middle mr-2"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
