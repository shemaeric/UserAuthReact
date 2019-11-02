import React, {Fragment, Component} from 'react';
import { Link } from 'react-router-dom';
import Navabar from './Navbar';

class Signup extends Component {
  state = {
    dropdown: false
  };


  render() {
    const { dropdown } = this.state;
    const logoutDropdown =
      dropdown === true ? "logout-dropdown" : "logout-dropdown-none";
    return (
      <Fragment>
        {/* Use the Navbar Component */}
        <Navabar/>
        ​{/* Make this a component too */}
        <section className={`${logoutDropdown} shadow-sm rounded`}>
          <div className="logout">
            <span>logout</span> <i className="zmdi zmdi-minus-circle"></i>
          </div>
        </section>
        <main>
          <div className="main-container">
            <div className="card-container shadow rounded-lg">
              <div className="login-get-started">
                <ul>
                  <li>
                    <div className="login">
                    <Link to="/">Login</Link>
                    </div>
                  </li>
                  <li>
                    <div className="get-started">Get Started</div>
                  </li>
                </ul>
              </div>
              <section className="login-form">
              <div className="username-login">
                  <input type="username" placeholder="username" />
                </div>
                <div className="email-login">
                  <input type="email" placeholder="email" />
                </div>
                <div className="password-login">
                  <input type="password" placeholder="password" />
                </div>
                <button className="btn btn-primary login-button">Signup</button>
              </section>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Signup;
