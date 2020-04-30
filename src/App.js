import React from "react";
import { Component } from "react";
import uniqid from "uniqid";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import Alert from "./Components/Alert";

class App extends Component {
  state = {
    taskLists: JSON.parse(localStorage.getItem("taskLists")) || [],
    alert: null,
  };

  // to persist data in local storage
  updateLocalStorage = (key, values) => {
    localStorage.setItem(key, JSON.stringify(values));
  };

  addTask = (task) => {
    this.setState((state) => ({
      taskLists: [
        ...state.taskLists,
        { id: uniqid(), body: task, completed: false },
      ],
    }));
  };

  removeTask = (id) => {
    // remove task
    this.setState((state) => ({
      taskLists: state.taskLists.filter((task) => task.id !== id),
    }));
  };

  handleCompletedStatus = (id) => {
    // create deep copy of the tasks array
    const tasksCopy = JSON.parse(JSON.stringify(this.state.taskLists));
    // get the index
    const index = tasksCopy.findIndex((task) => task.id === id);
    const flag = tasksCopy[index].completed;
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

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  render() {
    this.updateLocalStorage("taskLists", this.state.taskLists);
    return (
      <div className="container">
        <div className="heading">TO-DO</div>
        <Alert alert={this.state.alert} />
        <TaskInput onAddTask={this.addTask} setAlert={this.setAlert} />
        {this.state.taskLists.length < 1 ? (
          <div style={{ marginTop: "2rem", paddingLeft: "1.5rem" }}>
            Nothing to do
          </div>
        ) : (
          <TaskList
            tasks={this.state.taskLists}
            onRemoveTask={this.removeTask}
            onHandleCompletedStatus={this.handleCompletedStatus}
            onClearCompleted={this.clearCompleted}
            onClearAll={this.clearAll}
          />
        )}
      </div>
    );
  }
}

export default App;
