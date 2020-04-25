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

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.query === "" || this.state.query.trim() === "") {
      this.props.setAlert("Please enter something", "danger");
    } else {
      this.props.onAddTask(this.state.query);
      this.props.setAlert("Task Added", "success");
      this.clearQuery();
    }
  };

  render() {
    const { query } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
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
