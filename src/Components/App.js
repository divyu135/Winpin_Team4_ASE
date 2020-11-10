import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Layout/HomePage';
import VideoApp from './ConferenceRoom/index'; 
import '../style/App.css';
import 'semantic-ui-css/semantic.min.css';
import PasscodeEntry from './ConferenceRoom/PasscodeEntry';


function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/video-app" component={VideoApp} />
        <Route path="/test" component={PasscodeEntry} />
        <Route component={Error} />
      </Switch>
    </Fragment>
  );
}

export default App;
