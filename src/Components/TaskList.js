import React from "react";

function TaskList(props) {
  return (
    <div className="list-container">
      <div>
        <input type="text" className="search-list" placeholder="search list" />
      </div>
      <ul className="task-list">
        {props.tasks.map((task, index) => (
          <li className="task-list-item" key={index}>
            {task.body}
            <span
              className="delete"
              onClick={() => props.onRemoveTask(task, index)}
            >
              <i className="fas fa-times-circle "></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
