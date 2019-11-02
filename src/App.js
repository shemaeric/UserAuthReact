import React from 'react';
import { BrowserRouter as Router,  Route, Switch} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </Router>
    )
  }
}

export default App;
