import React from "react";
import { Component } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

class App extends Component {
  state = {
    lists: [
      {
        id: 1,
        body: "task one",
      },
      {
        id: 2,
        body: "task two",
      },
      {
        id: 3,
        body: "task three",
      },
    ],
  };
  render() {
    return (
      <div className="container">
        <TaskInput />
        <TaskList lists={this.state.lists} />
      </div>
    );
  }
}

export default App;
