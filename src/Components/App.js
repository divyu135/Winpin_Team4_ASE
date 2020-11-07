/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import HomePage from "./Home/HomePage";
import Video from "./Video/video";
import Navigation from "./Layout/Navigation";
// import '../style/App.css';
import "semantic-ui-css/semantic.min.css";
// import '@semantic-ui-react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/home' component={HomePage} />
        <Route path='/video' component={Video} />
      </Switch>
    </Router>
  );
}

export default App;
