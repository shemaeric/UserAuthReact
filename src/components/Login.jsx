import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import Navabar from './Navbar';

class Login extends Component {
  state = {
    dropdown: false
  };


  render() {
    return (
      <Fragment>
        {/* Use the Navbar Component */}
        <Navabar/>
        ​{/* Make this a component too */}
        <main>
          <div className="main-container">
            <div className="card-container shadow rounded-lg">
              <div className="login-get-started">
                <ul>
                  <li>
                    <div className="login">Login</div>
                  </li>
                  <li>
                    <div className="get-started">
                        <Link to="/signup">Get Started</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <section className="login-form">
                <div className="email-login">
                  <input type="email" placeholder="email" />
                </div>
                <div className="password-login">
                  <input type="password" placeholder="password" />
                </div>
                <button className="btn btn-primary login-button">Login</button>
              </section>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Login;
