import React from "react";

function TaskList(props) {
  return (
    <ul className="task-list">
      {props.lists.map((list) => (
        <li className="task-list-item" key={list.id}>
          {list.body}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
