import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const parallax = (e) => {
  const el = document.querySelector('.parallax');
  if (!(window.innerWidth < 500)) {
    const w = window.innerWidth/2;
    const h = window.innerHeight/2;
    const mouse_w = e.clientX;
    const mouse_h = e.clientY;
    const pos1 = `${50 - (mouse_w - w) * 0.07}% ${50 - (mouse_h - h) * 0.15}%`;
    const pos2 = `${50 - (mouse_w - w) * 0.05}% ${50 - (mouse_h - h) * 0.10}%`;
    const pos3 = `${50 - (mouse_w - w) * 0.04}% ${50 - (mouse_h - h) * 0.5}%`;
    const pos4 = `${50 - (mouse_w - w) * 0.02}% ${50 - (mouse_h - h) * 0.1}%`;
    const final_position = `${pos1}, ${pos2}, ${pos3}, ${pos4}`;
    console.log(final_position);
    el.style.backgroundPosition = final_position;
  } 
}

const Home = () => {
  return (
    <div className="container home" onMouseMove={parallax}>
      <div className="parallax"></div>
      <div className="jello_title">
        <h1>
          <span>H</span>
          <span>i</span>
          <span>!</span>
          <br />
          <span>I</span>
          <span>'</span>
          <span>m</span>&nbsp;
          <span>J</span>
          <span>u</span>
          <span>s</span>
          <span>t</span>
          <span>y</span>
          <span>n</span>
          <span>a</span>
          <span>,</span>
          <br />
          <span>w</span>
          <span>e</span>
          <span>b</span>&nbsp;
          <span>d</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </h1>
        <p>Front End Developer | React Developer</p>
        <Link className="button" to="/contact">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Home;