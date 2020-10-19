import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <label>
          <input type="checkbox" />
          <span className="menu">
              <span className="hamburger"></span>
          </span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutMe">About Me</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/animations">Animations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </label>
      </nav>
    );
  }
}

export default Nav;