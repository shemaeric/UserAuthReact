import React from 'react';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login';
import Signup from './components/Signup'
import Profile from './components/Profile';
import './App.css';

toast.configure({
  autoClose: 5000,
  draggable: false,
});

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/profile/:username' component={Profile} />
        </Switch>
      </Router>
    )
  }
}

export default App;
