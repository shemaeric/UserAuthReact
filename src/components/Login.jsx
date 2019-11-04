import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { connect } from "react-redux";
import Navabar from "./Navbar";
import { login } from "../redux/action-creators";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  notifyInputs = (message) => toast.info(message);

  onsubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { login } = this.props;
    if (email === "" || password === "") {
      this.notifyInputs("Email and Password must not be empty");
    } else {
      await login({ email, password });
      const username = this.props.user.user.username
      this.props.error === "" ? this.props.history.push(`profile/${username}`) : this.notifyInputs(this.props.error);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <Fragment>
        {/* Use the Navbar Component */}
        <Navabar />​{/* Make this a component too */}
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
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="email" 
                    onChange={this.onChange}
                    value={email}
                />
                </div>
                <div className="password-login">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.onChange}
                    value={password}
                  />
                </div>
                <button onClick={this.onsubmit} className="btn btn-primary login-button">Login</button>
              </section>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
    user: state.user,
    error: state.user.error
  });
  
  export default connect(
    mapStateToProps,
    { login }
  )(Login);
