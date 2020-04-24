import React, { Component } from "react";
import TasKListItem from "./TaskListItem";

class TaskList extends Component {
  state = {
    searchInput: "",
  };

  updateSearchInput = (input) => {
    this.setState((state) => ({ searchInput: input }));
  };

  clearSearchInput = () => {
    this.setState({ searchInput: "" });
  };

  render() {
    const { tasks } = this.props;
    const { searchInput } = this.state;

    let showTasks;

    if (searchInput) {
      // create a reg exp from searchInput
      const searchInputExp = new RegExp(searchInput, "i");
      // collect tasks that match this pattern
      showTasks = tasks.filter((task) => searchInputExp.test(task.body));
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
            <button onClick={this.clearSearchInput}>show all</button>
          </div>
        ) : (
          false
        )}

        <ul className="task-list">
          {showTasks.map((task, index) => (
            <TasKListItem
              key={task.id}
              task={task}
              id={task.id}
              showTasks={showTasks}
              onRemoveTask={this.props.onRemoveTask}
              onHandleCompletedStatus={this.props.onHandleCompletedStatus}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
