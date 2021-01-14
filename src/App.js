import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Info from './components/info/Info';
import Default from './components/Default';
import Home from './components/Home';
import Sidebar from './components/sidebar/Sidebar';
import Cover from './components/Cover';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Cover />
        <Sidebar />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/info' component={Info} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
