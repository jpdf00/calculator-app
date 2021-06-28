import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => (
  <div className="Navbar">
    <h1>Math Magicians</h1>
    <div className="LinkGroup">
      <Link className="Link border" to="/">Home</Link>
      <Link className="Link border" to="/calculator">Calculator</Link>
      <Link className="Link" to="/quote">Quote</Link>
    </div>
  </div>
);

export default Navbar;
