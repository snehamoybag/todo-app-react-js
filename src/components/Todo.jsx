import "../styles/todo.css";
import "../styles/sr-only.css";
import { useRef } from "react";

const Todo = ({ todoData, handleTodoComplete }) => {
  const { task, id } = todoData;
  const checkBoxId = `todo-check-${id}`;

  return (
    <div className="todo" id={id}>
      <p>
        <label className="todo__checkbox" htmlFor={id} title="mark as complete">
          <span className="sr-only">mark as complete</span>
          <input
            className="todo__checkbox-input"
            type="checkbox"
            id={checkBoxId}
            name={checkBoxId}
            onChange={() => handleTodoComplete(id)}
          />
        </label>
      </p>
      <p>
        <span className="sr-only">Task:</span> {task}
      </p>
    </div>
  );
};

export default Todo;
