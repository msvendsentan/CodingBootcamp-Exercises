import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

const style = {
  header: {
    background: "red",
    fontSize: "100px"
  }
}

const Header = () => (
  <header className="header" style={style.header}>
    <h1>Welcome</h1>
  </header>
);

export default Header;
