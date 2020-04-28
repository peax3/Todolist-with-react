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
      this.setState({ query: "" });
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
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="New Task"
          className="task-input"
          onChange={(event) => this.updateQuery(event.target.value)}
          value={query}
        />
        <button className="btn btn-add">Add Task</button>
      </form>
    );
  }
}

export default TaskInput;
