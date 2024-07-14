import "../styles/todo-form.css";
import "../styles/sr-only.css";

const TodoForm = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="todo-form"
      action="/"
      method="POST"
      id="todo-form"
      onSubmit={handleFormSubmit}
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
