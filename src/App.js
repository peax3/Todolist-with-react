import React from "react";
import { Component } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

class App extends Component {
  // state = {
  //   taskLists: [
  //     {
  //       id: 1,
  //       body: "task one",
  //     },
  //     {
  //       id: 2,
  //       body: "task two",
  //     },
  //     {
  //       id: 3,
  //       body: "task three",
  //     },
  //   ],
  // };

  state = {
    taskLists: [],
  };

  componentDidMount() {
    let taskLists = JSON.parse(localStorage.getItem("taskLists"));

    if (taskLists !== null && taskLists !== undefined) {
      this.setState({
        taskLists: taskLists,
      });
    }
  }

  addTask = (task) => {
    const id = this.state.taskLists.length + 1;
    this.setState((state) => ({
      taskLists: [...state.taskLists, { id: id, body: task }],
    }));

    // update the lists in local storage
    localStorage.setItem("taskLists", JSON.stringify(this.state.taskLists));
  };

  removeTask = () => {
    // remove task
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <TaskInput onAddTask={this.addTask} />
        <TaskList lists={this.state.taskLists} />
      </div>
    );
  }
}

export default App;
