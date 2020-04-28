import React, { Component } from "react";
import TasKListItem from "./TaskListItem";

class TaskList extends Component {
  state = {
    searchInput: "",
    viewActive: false,
    viewCompleted: false,
  };

  updateSearchInput = (input) => {
    this.setState({ searchInput: input });
  };

  showAll = () => {
    this.setState({ searchInput: "", viewActive: false, viewCompleted: false });
  };

  showCompletedTasks = () => {
    this.setState({ searchIput: "", viewCompleted: true, viewActive: false });
  };

  showActiveTasks = () => {
    this.setState({ searchInput: "", viewActive: true, viewCompleted: false });
  };

  render() {
    const { tasks, onClearCompleted, onClearAll } = this.props;
    const { searchInput } = this.state;

    let showTasks;

    if (searchInput) {
      // create a reg exp from searchInput
      const searchInputExp = new RegExp(searchInput, "i");
      // collect tasks that match this pattern
      showTasks = tasks.filter((task) => searchInputExp.test(task.body));
    } else if (this.state.viewCompleted) {
      showTasks = tasks.filter((task) => task.completed);
    } else if (this.state.viewActive) {
      showTasks = tasks.filter((task) => !task.completed);
      console.log("showTasks");
    } else {
      // if there is nothing in the search input show all tasks
      showTasks = [...tasks];
    }

    return (
      <div className="list-container">
        <div>
          <input
            type="text"
            className="search-list"
            placeholder="search list"
            value={this.state.searchInput}
            onChange={(event) => this.updateSearchInput(event.target.value)}
          />
        </div>

        {/* if the user is filtering through the task display this */}
        {showTasks.length !== tasks.length ? (
          <div className="show-tasks">
            <span>
              showing {showTasks.length} from {tasks.length} total
            </span>
            <button onClick={this.showAll}>show all</button>
          </div>
        ) : (
          false
        )}

        <ul className="task-list">
          {showTasks.map((task, index) => (
            <TasKListItem
              key={task.id}
              task={task}
              onRemoveTask={this.props.onRemoveTask}
              onHandleCompletedStatus={this.props.onHandleCompletedStatus}
            />
          ))}
        </ul>

        <div className="bottom-buttons">
          <button onClick={onClearCompleted}>Clear Completed</button>
          <button
            onClick={() => {
              console.log(showTasks);
              this.showCompletedTasks(true);
            }}
            style={this.state.viewCompleted ? buttonStyle : null}
          >
            Completed
          </button>
          <button
            onClick={this.showActiveTasks}
            style={this.state.viewActive ? buttonStyle : null}
          >
            Active
          </button>
          <button onClick={onClearAll}>Clear All</button>
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  border: "3px solid #26a69a",
};

export default TaskList;
