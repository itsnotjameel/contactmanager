import React, { Component } from "react";

class Test extends Component {
  state = {
    id: "",
    title: "",
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          id: data.id,
          title: data.title,
        })
      );
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.id}</p>
      </div>
    );
  }
}
export default Test;
