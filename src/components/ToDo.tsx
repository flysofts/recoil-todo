import React from "react";
import { IToDo } from "../atoms";

function Todo({ text }: IToDo) {
  return (
    <div>
      <li>
        <span>{text}</span>
        <button>Doing</button>
        <button>To Do</button>
        <button>Done</button>
      </li>
    </div>
  );
}

export default Todo;
