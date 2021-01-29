import React from 'react';
import projects from '../data/animations.json';
import '../styles/Portfolio.css';

class Animations extends React.Component {
  state = { term: '' };

  renderProjectsList = () => {
    const word = this.state.term.toLocaleLowerCase();
    const list = projects.filter(n => n.keywords.toLocaleLowerCase().includes(word) || n.desc.toLocaleLowerCase().includes(word));
    if (!list.length) {
      return (
        <div className="empty">
          <p>
            There are no animations with your phrase, please try another phrase
          </p>
        </div>
      );
    }
    return list.map(project => {
      return (
        <div className="project" key={project.id}>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.img} alt="project view" />
          </a>
          <p>{project.desc}</p>
        </div>
      );
    });
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <div className="container portfolio">
        <div className="jello_title">
          <h1>
            <span>A</span>
            <span>n</span>
            <span>i</span>
            <span>m</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>o</span>
            <span>n</span>
            <span>s</span>
          </h1>
        </div>
        <div className="projects">
          <label>Search:</label>
          <input
            type="text"
            value={this.state.term}
            placeholder="text, svg, slider etc."
            onChange={ this.onInputChange  }
          />
          <div className="projects_box">
            { this.renderProjectsList() }
          </div>
        </div>
      </div>
    );
  }
}

export default Animations;