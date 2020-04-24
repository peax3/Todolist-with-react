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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddTask(query);
          this.clearQuery();
        }}
      >
        <input
          type="text"
          className="task-input"
          onChange={(event) => this.updateQuery(event.target.value)}
          value={query}
        />
        <button className="btn btn-primary">add task</button>
      </form>
    );
  }
}

export default TaskInput;
