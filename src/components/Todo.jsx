import "../styles/todo.css";
import "../styles/sr-only.css";

const Todo = ({ todoData, handleTodoComplete }) => {
  const { task, id } = todoData;

  return (
    <div className="todo" id={id}>
      <p>
        <label className="todo__checkbox" htmlFor={id} title="mark as complete">
          <span className="sr-only">mark as complete</span>
          <input
            className="todo__checkbox-input"
            type="checkbox"
            id={id}
            name={id}
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
