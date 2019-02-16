import React, { Component } from "react";
import axios from "axios";
import "./description.css";
import{Link} from 'react-router-dom';
class Description extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
      missingChildName: "",
      Description: ""
    };
  }

  datachange(e) {
    this.setState({
      file: e.target.file,
      [e.target.name]: e.target.value
    });
  }

  postData = () => {
    const formData = new FormData();
    formData.append("file", this.state.file);
    formData.append("missingChildName", this.state.missingChildName);
    formData.append("Description", this.state.Description);

    axios
      .post(
        "https://missingchild.herokuapp.com/create/missingChildren/details",
        formData
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div class="container">
        <div class="main">
          <div class="main-center">
            <h1>Description Form</h1>
            <form class="">
              <div>
                <input
                  type="file"
                  className="image"
                  onChange={this.fileChangedHandler}
                />
              </div>

              <div class="form-group">
                <label for="name">missingChildName</label>
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-user fa" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    name="missingChildName"
                    id="name"
                    value={this.state.missingChildName}
                    onChange={this.datachange.bind(this)}
                    placeholder="Enter your Name" style={{marginTop:"0px"}}
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="email">Description</label>
                <div class="input-group">
                  <span class="input-group-addon">
                    <i class="fa fa-envelope fa" aria-hidden="true" />
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    name="Description"
                    value={this.state.Description}
                    onChange={this.datachange.bind(this)}
                    placeholder="description" style={{marginTop:"0px"}}
                  />
                </div>
              </div>
              <Link to="/card">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.postData}
              >
                submit
              </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Description;
