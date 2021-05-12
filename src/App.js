import React from 'react';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Home from './components/#'; Relier avec la route
// import Home from './components/#'; Relier avec la route
// import Home from './components/#'; Relier avec la route

import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <LandingPage />
      <Switch>
        <Route exact path='/' />
        {/* <Route path='/search' component={Search} />
        <Route path='/likes' component={Likes} /> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
