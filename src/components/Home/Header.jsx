import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <h1>Finsweet</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/company">Company</Link></li>
        <li><Link to="/career">Career</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
