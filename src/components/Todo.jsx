import "../styles/todo.css";
import "../styles/sr-only.css";

// drag and drop handlers (IIFE)
const handleDragAndDrop = (() => {
  const draggingClassName = "todo--dragging";

  const start = (event) => {
    const draggingEl = event.target;
    draggingEl.classList.add(draggingClassName);
  };

  const end = (event) => {
    const draggedEl = event.target;
    draggedEl.classList.remove(draggingClassName);
  };

  const over = (event) => {
    event.preventDefault();
    const dragOverEl = event.target;
    const draggingEl = document.querySelector(`.${draggingClassName}`);
    const parentEl = dragOverEl.parentNode;

    if (dragOverEl === draggingEl || !draggingEl.hasAttribute("draggable")) {
      return; // do nothing
    }

    const dragOverNextEl = dragOverEl.nextElementSibling;

    // dragging from downwards to upwards
    if (dragOverNextEl === draggingEl) {
      parentEl.insertBefore(draggingEl, dragOverEl);
    }
    // dragging from upwards to downwards
    else {
      parentEl.insertBefore(draggingEl, dragOverNextEl);
    }
  };

  return {
    start,
    end,
    over,
  };
})();

// The component
const Todo = ({ id, task, handleTodoChecked }) => {
  return (
    <div
      className="todo"
      id={`todo-${id}`}
      draggable
      onDragStart={handleDragAndDrop.start}
      onDragEnd={handleDragAndDrop.end}
      onDragOver={handleDragAndDrop.over}
    >
      <p>
        <label className="todo__checkbox" htmlFor={id} title="mark as complete">
          <span className="sr-only">mark as complete</span>
          <input
            className="todo__checkbox-input"
            type="checkbox"
            id={id}
            name={id}
            onChange={handleTodoChecked}
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
