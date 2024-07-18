import "../styles/todo-form.css";
import "../styles/sr-only.css";
import { useState } from "react";

const TodoForm = ({ handleFormSubmit }) => {
  const [taskInputValue, setTaskInputValue] = useState("");

  const handleTaskInputChange = (event) => {
    setTaskInputValue(event.target.value);
  };

  return (
    <form
      className="todo-form"
      action="/"
      method="POST"
      id="todo-form"
      onSubmit={(event) => {
        handleFormSubmit(event, taskInputValue);
        setTaskInputValue(""); // clear input field
      }}
    >
      <p className="todo-form__field-wrapper">
        <label htmlFor="todo-task">
          <span className="sr-only">Task:</span>
          <input
            className="todo-form__input"
            type="text"
            id="todo-task"
            name="todo-task"
            placeholder="Do some grocery shopping..."
            maxLength={90}
            required
            value={taskInputValue}
            onChange={handleTaskInputChange}
          />
        </label>
      </p>

      <button className="todo-form__btn-submit" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
