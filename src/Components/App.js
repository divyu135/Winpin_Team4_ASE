import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// import HomePage from "./Home/HomePage";
// import Video from "./Video/video";
import Navigation from "./Layout/Navigation";
// import VideoApp from "./ConferenceRoom/index";
// import PasscodeEntry from "./ConferenceRoom/PasscodeEntry";
// import '../style/App.css';
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default App;
