import React, { Component } from 'react';
import Home from './components/Home.js';
import Profile from './components/Profile.js';
import EventsPage from './components/EventsPage';
import EventPage from './components/EventPage';
import './styles/App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import NewEvent from './components/NewEvent.js';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      userID: ''
    }
  }

  componentDidMount() {
    // getuserData();
    let getuserConfig = {
      method: 'GET',
      url: 'http://localhost:8080/users/5c997c9d53039b194c481743'
    }
    axios(getuserConfig)
      .then((res) => {
        this.setState({
          userData:res.data,
          userID:res.data._id,
        })
        console.log(this.state.userID)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/Profile/:id" component={ Profile } />
          <Route path="/events" exact render={(props) => {
              return (
                <EventsPage {...props} userID={this.state.userID} /> )
              }} />
          <Route path="/events/:id" exact render={(props) => {
              return (
                <EventPage {...props} userID={this.state.userID} /> )
              }} />
          <Route path="/addnew" exact component={ NewEvent } />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
