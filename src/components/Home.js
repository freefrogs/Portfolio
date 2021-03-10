import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Sphere = (props) => {
  return (
    <svg className={`sphere sphere${props.no}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 421 421">
        <path className={`sphere_path sphere_path${props.no}`}
            d="m255.55 405.36c-35.749 7.858-73.367 6.139-108.22-5.092m167.92-19.631c-49.05 27.441-109.02 32.427-162.93 18.068-23.251-5.986-45.237-16.405-64.686-30.473m268.16-20.862c-35.076 32.734-83.252 47.924-130.47 50.353-52.85 2.354-107.76-10.846-150.17-43.395-9.5326-7.546-17.938-16.147-25.736-25.455m338.45-26.274c-19.622 33.291-53.486 55.792-89.458 68.217-48.883 17.101-102.98 18.343-152.96 5.15-41.172-10.98-81.07-32.744-106.73-67.507-6.847-9.275-11.85-19.34-16.324-29.931m379.59-12.008c-11.304 28.949-33.936 52.201-60.396 67.913-41.8 25.205-91.676 34.761-140.09 32.718-47.849-2.427-95.914-16.694-134.63-45.515-25.398-19.504-46.513-46.428-53.193-78.283-0.32316-1.215-0.64632-2.43-0.96948-3.644m396.18-11.924c-4.8417 23.535-17.54 44.808-34.673 61.489-32.824 31.618-77.391 48.446-122.03 54.483-51.714 6.666-105.74-0.631-152.71-23.702-31.582-15.7-60.497-39.497-76.358-71.505-7.8384-15.258-11.467-32.063-12.037-49.141m395.46-28.104c3.4404 21.926-0.45642 44.727-11.272 64.133-18.271 33.084-51.067 55.847-85.775 69.187-51.579 19.912-109.46 21.782-162.79 7.924-40.561-10.931-79.692-31.96-105.93-65.454-17.927-23.385-28.042-53.574-23.504-83.085 0.13238-1.391 0.26476-2.782 0.39714-4.174m377.4-25.704c8.3455 24.193 6.9898 51.682-5.1869 74.343-15.488 31.155-45.102 52.817-76.348 66.587-52.527 22.102-112.67 24.811-167.36 9.284-39.276-11.16-77.313-32.762-100.87-66.866-18.198-25.643-24.767-59.756-14.595-89.819 1.7089-7.223 5.8074-13.596 8.632-20.413m328.27-20.447c15.439 20.262 24.25 46.355 19.699 71.838-5.751 34.641-31.935 62.235-61.625 79.061-46.445 26.056-102.51 32.539-154.46 22.61-43.271-8.265-86.32-29.103-112.53-65.559-17.491-24.374-23.858-56.955-13.685-85.538 5.5916-17.098 16.356-31.894 28.837-44.671m256.16-14.371c23.241 17.696 42.024 44.313 42.081 74.456 0.51341 31.152-19.086 59.055-43.713 76.573-43.524 30.486-100.05 38.52-151.65 28.967-39.963-7.638-80.244-26.952-103.31-61.639-17.376-24.994-19.944-59.526-5.0599-86.295 13.022-25.355 36.986-43.271 62.394-55.067m141.61-6.799c32.579 11.124 64.873 32.846 76.207 66.84 8.9592 26.974-1.6012 57.232-22.053 76.067-32.052 30.781-78.769 41.655-122.17 38.963-41.496-3.024-84.994-19.351-109.95-54.18-15.735-22.005-18.498-52.761-4.8174-76.434 19.035-34.366 58.007-52.474 95.581-57.934 42.845-5.775 90.425 3.075 122.46 33.813 17.07 16.814 25.956 43.305 16.504 66.205-12.519 31.554-45.874 48.939-77.661 55.14-42.788 7.838-91.505-1.137-122.69-33.208-17.051-17.801-23.675-46.173-11.422-68.384 16.297-31.279 52.682-46.416 86.407-48.77 33.832-2.368 71.755 7.153 93.237 35.138 12.854 16.914 12.131 42.077-2.127 57.928-23.35 27.197-63.264 34.301-97.119 27.277-25.265-5.291-52.663-21.167-58.129-48.307-4.8534-24.18 14.572-45.76 35.8-54.177 29.827-12.444 68.747-10.342 92.463 13.438 12.424 12.344 12.531 33.848-0.35104 45.922-23.363 22.258-64.274 23.307-88.761 2.303-12.354-10.191-13.797-30.612-1.2337-41.251 17.168-15.857 48.004-17.888 64.956-0.751 9.527 9.354 2.8232 25.231-9.0004 28.67-11.477 4.756-30.149 3.256-34.357-10.471-1.6325-9.618 14.527-15.942 19.14-7.483 0.0797 1.48-1.4803 2.402-2.8033 2.362"
        />
    </svg>
  )
};

const Home = () => {
  return (
    <div className="container home">
      <div className="jello_title">
        <h1 className="firstLine">
          <span>H</span>
          <span>i</span>
          <span>!</span>&nbsp;
          <span>I</span>
          <span>'</span>
          <span>m</span>
          <svg className="myName" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 45">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: 'rgb(94,45,150)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgb(255,170,33)', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <path className="name_path" stroke="url(#grad)" d="M15.2266 0.4107c3.0103,1.7996 6.9884,2.4464 9.3236,0 -3.6187,15.6229 -2.9719,20.4269 -2.0632,31.5502 2.1816,26.7019 -18.6923,3.9445 -6.0285,-3.6475 6.2537,-3.7491 10.8371,-7.0318 12.2519,-11.4352 -0.7999,5.5158 -1.0459,14.4484 5.2626,15.0794 8.0195,0.8021 6.7958,-15.9224 6.7958,-15.0915 0,6.4994 -0.4634,21.3184 7.0404,12.0817 1.6034,-1.9736 2.5682,-8.4991 2.5682,-11.9996 0,-0.1161 -0.6173,4.3703 4.4349,4.5497 11.5549,0.4104 9.6023,10.5418 -2.9549,10.5418 -3.2368,0 14.4458,-7.9201 15.3444,-10.4645 0.7061,-1.9994 0.4431,-26.4722 0.5048,-19.9515l0.0477 5.0433c0.0524,5.5442 19.0683,3.8353 -6.9122,3.9107 10.449,-0.6016 5.3985,13.1741 5.8796,18.4757 0.2854,3.1452 8.6715,4.9301 9.8152,-1.0674 4.3646,-22.8881 -0.0847,-5.4305 3.7684,1.8987 1.6884,3.2117 5.4104,2.867 8.5067,-0.1293 1.4426,-1.3959 1.9049,-10.6021 1.5623,-12.8893 -0.3494,-2.3332 0.0782,24.5983 -0.4236,25.3839 -2.6731,4.1842 -9.6979,1.299 -13.9473,-0.4443 -8.8668,-3.6378 12.7107,-4.0589 16.5887,-7.7426 3.2842,-3.1198 3.9364,-20.0607 4.271,-16.7531l0.9038 14.6476c0.1299,-8.8645 8.7337,-21.1259 14.2068,-11.8558 1.5348,2.5997 -7.0529,11.874 2.4678,11.8558 1.9883,-0.0038 7.0842,0.3065 9.5778,0 -14.9527,1.4778 -7.9819,-15.0915 -2.2069,-15.0915 2.8295,0 5.5516,5.2648 4.8229,0.6086 -0.6669,-4.262 -1.3867,11.3458 -0.9972,13.7367 0.1641,1.0079 3.3952,1.2356 3.9971,-1.1727"/>
          </svg>
        </h1>
        <h1>
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
      <Sphere no='1' />
      <Sphere no='2' />
    </div>
  );
}

export default Home;