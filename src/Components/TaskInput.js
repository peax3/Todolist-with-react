import React, { Component } from "react";

class TaskInput extends Component {
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState({
      query: query,
    });
  };

  clearQuery = () => {
    this.setState({
      query: "",
    });
  };

  render() {
    const { query } = this.state;
    const { onAddTask } = this.props;
    return (
      <div>
        <input
          type="text"
          className="task-input"
          onChange={(event) => this.updateQuery(event.target.value)}
          value={query}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            onAddTask(query);
            this.clearQuery();
          }}
        >
          add task
        </button>
      </div>
    );
  }
}

export default TaskInput;
