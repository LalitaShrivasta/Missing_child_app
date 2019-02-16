import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
          {
            this.props.location.state?
            <h1>
            Welcome {this.props.location.state.firstname}{" "}
            {this.props.location.state.lastname}
            to home page
            </h1>: null
          }
        <Link to="/description">
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "73px",
              height: "73px",
              borderRadius: "50%",
              padding: "10px 20px",
              position: "fixed",
              bottom: "-4px",
              right: "10px"
            }}
          >
            +
          </button>
        </Link>
      </div>
    );
  }
}

export default Home;
