import React from 'react';
import '../styles/Contact.css';

const Plane = () => {
  return (
    <svg className="plane" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 25">
      <polyline points="6.9683,14.9079 2.7751,16.2592 6.05,13.1403 11.1787,23.0122 39.2815,7.4521 0.7183,1.9881 4.2535,8.9465 39.2815,7.4521 6.05,13.1403 2.7751,16.2592 4.2535,8.9465 "/>
    </svg>
  )
}

const Contact = () => {
  return (
    <div className="container contactMe">
      <Plane />
      <Plane />
      <Plane />
      <Plane />
      <Plane />
      <Plane />
      <div className="jello_title">
        <h1>
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>&nbsp;
          <span>m</span>
          <span>e</span>
        </h1>
      </div>
      <p>I live in Poland in Warsaw, but I am good in working remotely.</p>
      <p>I love ambitious and demanding projects, but I also have a passion for graphics, animations.</p>
      <p>I'm interested in freelance opportunities;-).</p>
      <p>
        If you have any questions don't hestitate to contact me:&nbsp;
        <a href='mailt&#111;&#58;%6A&#46;&#37;7&#65;&#46;b&#105;e%72n%6&#49;%6&#51;&#107;a&#64;gm%61i&#108;%&#50;Ecom'>
          <svg className="envelope" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40">
            <path d="M59.3924 24.0449c-8.7945,3.4056 -22.9463,6.6635 -33.2811,2.9611 -9.294,-3.3297 -21.5172,-8.1854 -16.0713,-17.1196 8.878,-14.5648 33.2507,4.5238 24.3071,17.5315 -3.7208,5.4116 -14.4621,8.446 -21.9061,6.5881 -4.2407,-1.0584 -6.5602,-0.6627 -9.52,0.811"/>
            <polyline points="65.7977,21.609 61.6045,22.9603 64.8794,19.8414 70.0081,29.7133 98.1109,14.1532 59.5477,8.6892 63.0829,15.6476 98.1109,14.1532 64.8794,19.8414 61.6045,22.9603 63.0829,15.6476 "/>
          </svg>
        </a>
      </p>
    </div>
  );
}

export default Contact;