<<<<<<< HEAD
import HomePage from './Layout/HomePage'
import Video from './Video/video'
import Navigation from './Layout/navigation'
import '../style/App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom'
=======
/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import HomePage from "./Home/HomePage";
import Video from "./Video/video";
import Navigation from "./Layout/Navigation";
// import '../style/App.css';
import "semantic-ui-css/semantic.min.css";
// import '@semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> MainLayout

function App() {
  return (
    <Router>
<<<<<<< HEAD
       <Navigation/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home"  component={HomePage} />
        <Route path="/video"  component={Video} />
=======
      <Navigation />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/video' component={Video} />
>>>>>>> MainLayout
      </Switch>
    </Router>
  );
}

export default App;
