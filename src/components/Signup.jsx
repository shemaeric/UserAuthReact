import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import Navabar from "./Navbar";
import { signup } from "../redux/action-creators";

class Signup extends Component {
  state = {
    dropdown: false,
    username: "",
    email: "",
    password: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  notifyInputs = () => toast.info("Please Fill all the fields");

  onsubmit = e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const { signup, history } = this.props;
    if (username === "" || email === "" || password === "") {
      this.notifyInputs();
    } else {
      signup({ username, email, password });
      history.push("/");
    }
  };

  render() {
    const { username, email, password } = this.state;
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
                  <input
                    type="username"
                    name="username"
                    placeholder="username"
                    onChange={this.onChange}
                    value={username}
                  />
                </div>
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
                <button
                  onClick={this.onsubmit}
                  className="btn btn-primary login-button"
                >
                  Signup
                </button>
              </section>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { signup }
)(Signup);
