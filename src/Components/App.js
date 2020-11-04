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

function App() {
  return (
    <Router>
       <Navigation/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home"  component={HomePage} />
        <Route path="/video"  component={Video} />
      </Switch>
    </Router>
  );
}

export default App;
