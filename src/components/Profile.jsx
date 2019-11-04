import React, { Fragment, Component } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";
import { connect } from "react-redux";
import Navabar from "./Navbar";
import { getProfile } from "../redux/action-creators";

class Profile extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    const { getProfile, match } = this.props;
    const { username } = match.params;
    getProfile(username);
  }

  render() {
    if (this.props.user.user === undefined) {
      const override = css`
          ${{
            display: "block;",
            margin: "4em auto;"
          }}
        `;
        return (
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={80}
            color={"#123abc"}
            loading={this.state.loading}
          />
        );
    }
    const { email, username } = this.props.user.user;
    return (
      <Fragment>
        {/* Use the Navbar Component */}
        <Navabar props={this.props}/>​{/* Make this a component too */}
        <main>
          <div className="main-container">
            <div className="card-container shadow rounded-lg">
              <div className="text-center pt-3">
                <h4>
                  Welcome <span className="large-text">{username}</span>
                </h4>
              </div>
              <div className="ml-5 pt-2">
                <p>
                  <span className="medium-text">Username: </span>
                  {username}
                </p>
              </div>
              <div className="ml-5 pb-2">
                <p>
                  <span className="medium-text">Email: </span>
                  {email}
                </p>
              </div>
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
  { getProfile }
)(Profile);
