import React from "react";
import { Component } from "react";

class TaskList extends Component {
  state = {
    searchInput: "",
  };

  updateSearchInput = async (input) => {
    await this.setState((state) => ({ searchInput: input }));
  };

  clearSearchInput = () => {};

  render() {
    const { tasks, onRemoveTask } = this.props;
    const { searchInput } = this.state;

    let showTasks;

    if (searchInput) {
      // create a reg exp from searchInput
      const searchInputExp = new RegExp(searchInput, "i");
      // collect tasks that match this pattern
      showTasks = tasks.filter((task) => searchInputExp.test(task.body));
    } else {
      // if there is nothing in the search input show all tasks
      showTasks = tasks;
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
            <p>
              showing {showTasks.length} from {tasks.length} total
            </p>
          </div>
        ) : (
          false
        )}

        <ul className="task-list">
          {showTasks.map((task, index) => (
            <li className="task-list-item" key={index}>
              {task.body}
              <span
                className="delete"
                onClick={() => onRemoveTask(task, index)}
              >
                <i className="fas fa-times-circle "></i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskList;
