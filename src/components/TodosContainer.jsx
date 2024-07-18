import PlaceholderTodo from "./PlaceholderTodo";
import Todo from "./Todo";
import "../styles/todos.css";

const TodosContainer = ({ todos = [], handleTodoComplete }) => {
  const todoEls = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todoData={todo}
        handleTodoComplete={handleTodoComplete}
      />
    );
  });

  return (
    <div className="todos">
      {todos.length < 1 ? <PlaceholderTodo /> : todoEls}
    </div>
  );
};

export default TodosContainer;
