import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Animations from './Animations';
import Contact from './Contact';
import PageNotFound from './PageNotFound';
import Footer from './Footer';
import '../styles/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/aboutMe" exact component={AboutMe} />
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/animations" exact component={Animations} />
              <Route path="/contact" exact component={Contact} />
              <Route component={PageNotFound} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;