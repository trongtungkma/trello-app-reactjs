import React from "react";
import "./Column.scss";
import Task from "../Task/Task";

function Column() {
  return (
    <div className="column">
      <header>header</header>
      <ul className="task-list">
        <Task />
        <li>content</li>
        <li>content</li>
        <li>content</li>
        <li>content</li>
      </ul>
      <footer>footer</footer>
    </div>
  );
}

export default Column;
