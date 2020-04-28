import React from "react";

function TaskListItem({ task, onHandleCompletedStatus, onRemoveTask }) {
  return (
    <li
      className={task.completed ? "task-list-item completed" : "task-list-item"}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onHandleCompletedStatus(task.id)}
      />
      <span>{task.body}</span>
      <span className="delete" onClick={() => onRemoveTask(task.id)}>
        <i className="fas fa-times-circle "></i>
      </span>
    </li>
  );
}

export default TaskListItem;
