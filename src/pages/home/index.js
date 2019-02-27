import React, { Component } from "react";
import { Link } from "react-router-dom";
import Post from "../../components/post";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    this.getProps();
  }
  async getProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return this.setState({ posts });
  }
  render() {
    return (
      <div>
        <header>
          <h1>ReactCwb</h1>
          <Link to="/about">
            <p>About</p>
          </Link>
        </header>

        <div>
          {this.state.posts.map(({ title, body, id }) => {
            return <Post key={id} title={title} body={body} />;
          })}
        </div>
        <style jsx="true">{`
          header {
            width: 80%;
            margin-left: 10%;
          }
        `}</style>
      </div>
    );
  }
}
