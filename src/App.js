import React from "react";
import { Component } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

class App extends Component {
  state = {
    taskLists: JSON.parse(localStorage.getItem("taskLists")) || [],
  };

  // to persist data in local storage
  updateLocalStorage = (key, values) => {
    localStorage.setItem(key, JSON.stringify(values));
  };

  addTask = async (task) => {
    await this.setState((state) => ({
      taskLists: [...state.taskLists, { body: task, completed: false }],
    }));

    this.updateLocalStorage("taskLists", this.state.taskLists);
  };

  removeTask = async (task, indexToRemove) => {
    // remove task
    await this.setState((state) => ({
      taskLists: state.taskLists.filter((t, index) => index !== indexToRemove),
    }));

    this.updateLocalStorage("taskLists", this.state.taskLists);
  };

  handleCompletedStatus = async (task, index, tasks) => {
    // create deep copy of the tasks array
    const tasksCopy = JSON.parse(JSON.stringify(tasks));
    const flag = task.completed;

    if (flag) {
      // change to true
      tasksCopy[index].completed = !flag;
    } else {
      // change to false
      tasksCopy[index].completed = !flag;
    }

    // set the state to the updated array
    await this.setState((state) => ({
      taskLists: JSON.parse(JSON.stringify(tasksCopy)),
    }));

    // update in local storage
    this.updateLocalStorage("taskLists", this.state.taskLists);
  };

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <TaskInput onAddTask={this.addTask} />
        <TaskList
          tasks={this.state.taskLists}
          onRemoveTask={this.removeTask}
          onHandleCompletedStatus={this.handleCompletedStatus}
        />
      </div>
    );
  }
}

export default App;
