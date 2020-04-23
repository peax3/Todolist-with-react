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

  addTask = (task) => {
    this.setState((state) => ({
      taskLists: [...state.taskLists, { body: task, completed: false }],
    }));
  };

  removeTask = (task, indexToRemove) => {
    // remove task
    this.setState((state) => ({
      taskLists: state.taskLists.filter((t, index) => index !== indexToRemove),
    }));
  };

  handleCompletedStatus = (task, index, tasks) => {
    // create deep copy of the tasks array
    const tasksCopy = JSON.parse(JSON.stringify(tasks));
    const flag = task.completed;

    // change the completed status of the task
    tasksCopy[index].completed = !flag;

    // set the state to the updated array
    this.setState((state) => ({
      taskLists: JSON.parse(JSON.stringify(tasksCopy)),
    }));
  };

  clearCompleted = () => {
    const tasksCopy = JSON.parse(JSON.stringify(this.state.taskLists));
    const unCompletedTasks = tasksCopy.filter(
      (task) => task.completed === false
    );
    // set the state to the updated array
    this.setState((state) => ({
      taskLists: JSON.parse(JSON.stringify(unCompletedTasks)),
    }));
  };

  clearAll = () => {
    this.setState({
      taskLists: [],
    });
  };

  render() {
    console.log(this.state);
    this.updateLocalStorage("taskLists", this.state.taskLists);
    return (
      <div className="container">
        <TaskInput onAddTask={this.addTask} />
        <TaskList
          tasks={this.state.taskLists}
          onRemoveTask={this.removeTask}
          onHandleCompletedStatus={this.handleCompletedStatus}
          onClearAll={this.clearAll}
          onClearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
