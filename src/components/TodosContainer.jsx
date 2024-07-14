import PlaceholderTodo from "./PlaceholderTodo";
import Todo from "./Todo";
import "../styles/todos.css";

const TodosContainer = ({ tasks }) => {
  return (
    <div className="todos">
      <Todo id={1} task={"Todo 1"} />
      <Todo id={2} task={"Todo 2"} />
      <Todo id={3} task={"Todo 1"} />
    </div>
  );
};

export default TodosContainer;
