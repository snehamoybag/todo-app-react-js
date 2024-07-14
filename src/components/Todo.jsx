import "../styles/todo.css";
import "../styles/sr-only.css";

const Todo = ({ id, task, handleChecked }) => {
  return (
    <div className="todo">
      <p>
        <label className="todo__checkbox" htmlFor={id} title="mark as complete">
          <span className="sr-only">mark as complete</span>
          <input
            className="todo__checkbox-input"
            type="checkbox"
            id={id}
            name={id}
            onChange={handleChecked}
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
