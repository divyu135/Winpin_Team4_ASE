import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Home/HomePage";
// import Video from "./Video/video";
import Navigation from "./Layout/Navigation";
import VideoApp from './ConferenceRoom/index';
import PasscodeEntry from './ConferenceRoom/PasscodeEntry';
// import '../style/App.css';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/home' component={HomePage} />
        {/* <Route path='/video' component={Video} /> */}
        {/* <Route path="/video-app" component={PasscodeEntry} /> */}
        <Route path="/app" component={VideoApp} />
      </Switch>
    </Router>
  );
}

export default App;
