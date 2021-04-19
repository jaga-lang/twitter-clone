import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Form from "./form";
import NavBar from "./navbar";
class App extends Component {
  state = {
    posts: [
      {
        name: "jagga",
        mail: "ja@mail.com",
        subject: "captain ...",
        like: true,
      },
      {
        name: "jaggassssssss",
        mail: "ja@mail.cosssssssssm",
        subject: "captain ssssssssssss...",
        like: false,
      },
      {
        name: "jagga",
        mail: "ja@mail.com",
        subject: "captain ...",
        like: true,
      },
      {
        name: "jaggassssssss",
        mail: "ja@mail.cosssssssssm",
        subject: "captain ssssssssssss...",
        like: false,
      },
      {
        name: "jaggassssssss",
        mail: "ja@mail.cosssssssssm",
        subject: "captain ssssssssssss...",
        like: false,
      },
    ],
  };
  onSubmit = (post) => {
    this.setState({ posts: [post, ...this.state.posts] });
  };
  onLike = (id) => {
    let state_list = this.state.posts.filter(
      (post) => post.id !== parseInt(id)
    );
    let first = this.state.posts.filter((post) => post.id === parseInt(id));
    first[0].like = first[0].like ? false : true;
    state_list.push(first[0]);
    this.setState({ posts: state_list });
  };
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <Switch>
            <Route
              path="/newpost"
              render={(props) => <Form {...props} submit={this.onSubmit} />}
            />

            <Route
              path="/"
              exact
              render={(props) => (
                <Home {...props} liked={this.onLike} state={this.state} />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
