import React, {Fragment, Component} from 'react';
import avatar from '../assets/logo192.png'

class Navbar extends Component {
  state = {
    dropdown: false
  };

  dropdown = () => {
    this.setState({ dropdown: true });
  };

  dropAway = () => {
    this.setState({ dropdown: false });
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
          <div
            className="user-avatar"
            onMouseEnter={this.dropdown}
            onMouseLeave={this.dropAway}
          >
            <img src={avatar} alt="" />
          </div>
        </nav>
        ​{/* Make this a component too */}
        <section className={`${logoutDropdown} shadow-sm rounded`}>
          <div className="logout">
            <span>logout</span> <i className="zmdi zmdi-minus-circle"></i>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Navbar;
