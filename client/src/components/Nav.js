import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

class Nav extends React.Component {
  onNavClick() {
    const nav_input = document.querySelector('.nav_input');
    nav_input.checked = false;
  }
  render() {
    return (
      <nav>
        <label>
          <input type="checkbox" className="nav_input"/>
          <span className="menu">
              <span className="hamburger"></span>
          </span>
          <ul>
            <li><Link className="link" onClick={this.onNavClick} to="/">Home</Link></li>
            <li><Link className="link" onClick={this.onNavClick} to="/aboutMe">About Me</Link></li>
            <li><Link className="link" onClick={this.onNavClick} to="/portfolio">Portfolio</Link></li>
            <li><Link className="link" onClick={this.onNavClick} to="/animations">Animations</Link></li>
            <li><Link className="link" onClick={this.onNavClick} to="/contact">Contact</Link></li>
          </ul>
        </label>
      </nav>
    );
  }
}

export default Nav;