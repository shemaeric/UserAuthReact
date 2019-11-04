import React, { Fragment, Component } from "react";
import avatar from "../assets/logo192.png";
import user from '../assets/user-avatar.png'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    };
  }

  dropdown = () => {
    this.setState({ dropdown: true });
  };

  dropAway = () => {
    this.setState({ dropdown: false });
  };

  logout = () => {
    const { props } = this.props;
    const { history } = props;
    localStorage.removeItem("token");
    history.push("/");
  };

  render() {
    const { dropdown } = this.state;
    const logoutDropdown =
      dropdown === true ? "logout-dropdown" : "logout-dropdown-none";
    return (
      <Fragment>
        {/* Make this a component */}
        <nav className="navbar navbar-light bg-light shadow-sm navigation">
          <div className="logo">
            <img src={avatar} alt="" />
          </div>
          <button className={Object.keys(this.props).length === 0 ? 'hidden': 'user-avatar'} onClick={this.dropdown}>
            <img src={user} alt="" />
          </button>
        </nav>
        ​{/* Make this a component too */}
        <section
          className={`${logoutDropdown} shadow-sm rounded`}
          onMouseLeave={this.dropAway}
        >
          <div className="logout">
            <button className="logout-btn" onClick={this.logout}>
              logout
            </button>{" "}
            <i className="zmdi zmdi-minus-circle"></i>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Navbar;
