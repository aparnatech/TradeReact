import React, { Component } from 'react';
import Getpost from './components/getpost';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ListUser from './components/listuser';
import tagsearch from './components/tagsearch';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={tagsearch} />
          <Route exact path="/users" component={ListUser} />
          <Route exact path="/users/:id/posts" render={props => <Getpost {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
