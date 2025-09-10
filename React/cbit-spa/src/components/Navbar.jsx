import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/cbit_logo.jpg';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img src={logo} alt="CBIT Logo" />
          <span>CBIT</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/academics">Academics</NavLink></li>
            <li><NavLink to="/admissions">Admissions</NavLink></li>
            <li><NavLink to="/placements">Placements</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
