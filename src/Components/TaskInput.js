import React, { Component } from "react";

class TaskInput extends Component {
  state = {
    query: "",
  };

  updateQuery = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="task-input"
          value={this.state.query}
          onChange={this.updateQuery}
        />
        <button
          className="btn btn-primary"
          onClick={() => {
            this.props.onAddTask(this.state.query);
            this.setState({
              query: "",
            });
          }}
        >
          add task
        </button>
      </div>
    );
  }
}

export default TaskInput;
