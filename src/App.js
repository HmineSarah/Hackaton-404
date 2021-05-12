import React from 'react';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CharacterDisplay from "./components/Character";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserChoices from './components/UserChoices';

import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' components{LandingPage}/>
        <Route path='/search' component={CharacterDisplay} />
        <Route path='/likes' component={UserChoices} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
