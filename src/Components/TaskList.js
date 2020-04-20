import React from "react";

function TaskList(props) {
  return (
    <div className="list-container">
      <div>
        <input type="text" className="search-list" placeholder="search list" />
      </div>
      <ul className="task-list">
        {props.lists.map((list) => (
          <li className="task-list-item" key={list.id}>
            {list.body}
            <span className="delete">
              <i className="fas fa-times-circle"></i>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
