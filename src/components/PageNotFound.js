import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/PageNotFound.css';
import Game from '../components/Game';

class PageNotFound extends React.Component {
  state = { play: false };
  
  showGame = (e) => {
    this.setState({ play: true });
    e.target.classList.add('hide');
  };
  render() {
    return (
      <div className="container pageNotFound">
        <h1>Page Not Found 404</h1>
        <p className="question">Would you like to play a game or go Home?</p>
        <div className="buttons">
          <Link className="button" to="/">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Go Home
          </Link>
          <button className="button" onClick={this.showGame}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Play Game
          </button>
        </div>
        {this.state.play ? <Game /> : null}
      </div>
    );
  }
}

export default PageNotFound;