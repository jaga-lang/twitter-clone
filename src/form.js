import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    mail: "",
    subject: "",
    like: true,
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  create = () => {
    this.props.submit(this.state);
    this.props.history.replace("/");
  };

  render() {
    return (
      <div class="container">
        <div className="mt-2">
          <label for="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            id="name"
            onChange={this.onChange}
          />
        </div>
        <div className="mt-2">
          <label className="ml-2" for="uname">
            <b>mail</b>
          </label>
          <input
            type="email"
            placeholder="Enter gmail"
            id="mail"
            onChange={this.onChange}
          />
        </div>
        <div className="mt-2">
          <label for="uname">
            <b>subject</b>
          </label>
          <input
            type="text"
            placeholder="Enter tweet"
            id="subject"
            onChange={this.onChange}
          />
        </div>

        <button className="mt-4" type="submit" onClick={this.create}>
          submit
        </button>
      </div>
    );
  }
}

export default Form;
