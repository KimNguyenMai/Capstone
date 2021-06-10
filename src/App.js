import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './components/pages/Events';
import Login from './components/pages/Login';
import Activities from './components/pages/Activities';
import UKC from './components/events/UKC';
import NMSC from './components/events/NMSC';
import SciCon from './components/events/Science_concert';
import UCC from './components/events/UCC';
import Auth from '@aws-amplify/auth';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/activities' component={Activities} />
          <Route path='/login' component={Login} />
          <Route path='/ukc' component={UKC} />
          <Route path='/nmsc' component={NMSC} />
          <Route path='/science-concert' component={SciCon} />
          <Route path='/ucc' component={UCC} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
