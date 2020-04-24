import React from "react";

function TaskListItem({
  task,
  id,
  onHandleCompletedStatus,
  showTasks,
  onRemoveTask,
}) {
  return (
    <li className="task-list-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onHandleCompletedStatus(task, id, showTasks)}
      />
      <span className={task.completed ? "completed" : null}>{task.body}</span>
      <span className="delete" onClick={() => onRemoveTask(id)}>
        <i className="fas fa-times-circle "></i>
      </span>
    </li>
  );
}

export default TaskListItem;
