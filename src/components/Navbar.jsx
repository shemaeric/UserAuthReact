import React, { Fragment, Component } from "react";
import avatar from "../assets/logo192.png";
import { useHistory } from "react-router-dom";

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
    console.log(this.props);
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
          <button className="user-avatar" onClick={this.dropdown}>
            <img src={avatar} alt="" />
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
