import React, { Component } from 'react';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import EventsPage from './components/EventsPage';
import EventPage from './components/EventPage';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NewEvent from './components/NewEvent.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/Profile/:id" component={ Profile } />
          <Route path="/events" exact component={ EventsPage } />
          <Route path="/events/:id" component={ EventPage } />
          <Route path="/addnew" exact component={ NewEvent } />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
