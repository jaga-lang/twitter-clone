import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "./form";

class Home extends Component {
  state = this.props.state;
  liked = (e) => {
    this.props.liked(parseInt(e.target.id));
  };
  render() {
    return (
      <div>
        <div className="container mt-2">
          {this.props.state.posts.map((post) => (
            <div className="card mt-2">
              <div className="card-body" style={{ width: "180px" }}>
                <h5 className="card-title">{post.name}</h5>
                <p className="card-text">{post.subject}</p>
                <p>{post.id}</p>
                <div>
                  {post.like ? (
                    <p id={post.id} alt={post.like} onClick={this.liked}>
                      <svg
                        id={post.id}
                        alt={post.like}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path
                          id={post.id}
                          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                        />
                      </svg>
                    </p>
                  ) : (
                    <p id={post.id} alt={post.like} onClick={this.liked}>
                      <svg
                        id={post.id}
                        alt={post.like}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-suit-heart-fill"
                        viewBox="0 0 16 16"
                      >
                        <path
                          id={post.id}
                          d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"
                        />
                      </svg>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="sticky"
          style={{ position: "sticky", bottom: "0px", padding: "50px" }}
        >
          <div className="s" style={{ bottom: "45px", right: "24px" }}>
            <Link className="nav-link" to="/newpost">
              <div className="float-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-chat-left"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
