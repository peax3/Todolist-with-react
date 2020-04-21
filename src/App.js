import React from "react";
import { Component } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

class App extends Component {
  state = {
    taskLists: JSON.parse(localStorage.getItem("taskLists")) || [],
  };

  addTask = async (task) => {
    await this.setState((state) => ({
      taskLists: [...state.taskLists, { body: task }],
    }));

    // update the lists in local storage
    localStorage.setItem("taskLists", JSON.stringify(this.state.taskLists));
  };

  removeTask = async (task, indexToRemove) => {
    // remove task
    await this.setState((state) => ({
      taskLists: state.taskLists.filter((t, index) => index !== indexToRemove),
    }));

    // update in local storage
    localStorage.setItem("taskLists", JSON.stringify(this.state.taskLists));
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <TaskInput onAddTask={this.addTask} />
        <TaskList tasks={this.state.taskLists} onRemoveTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
