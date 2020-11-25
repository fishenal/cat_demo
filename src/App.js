import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './LandingPage';
import Cats from './Cats';
import Popup from './Popup';

function App() {
  return (
    <Router>
      <div className="background">
        <Switch>
          <Route path="/cats">
            <Cats />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
      <Popup />
  </Router>
  );
}

export default App;
