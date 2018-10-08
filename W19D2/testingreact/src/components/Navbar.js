import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const style = {
  justifyContent: "flex-end",
  background: "green"
}

const Navbar = () => (
  <nav className="navbar" style={style}>
    <a href="/">Welcome Navbar</a>
  </nav>
);

export default Navbar;
