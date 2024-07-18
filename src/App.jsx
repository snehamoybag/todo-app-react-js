import Logo from "./components/Logo";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";
import "./App.css";
import todos from "./scripts/todos";
import { useEffect, useState } from "react";

const createTodoData = (task) => ({
  id: Date.now(),
  task: task,
});

function App() {
  const [todosData, setTodosData] = useState(todos.getData() || []);

  // sync data with localStorage
  useEffect(() => {
    todos.setData(todosData);
  }, [todosData]);

  const handleTodoFormSubmit = (event, taskInputValue) => {
    event.preventDefault();

    const newTodoData = createTodoData(taskInputValue);
    setTodosData((prevTodosData) => [newTodoData, ...prevTodosData]);
  };

  const handleTodoComplete = (deleteTodoId) => {
    setTodosData((preTodosData) =>
      preTodosData.filter((todoData) => todoData.id !== deleteTodoId),
    );
  };

  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <TodoForm handleFormSubmit={handleTodoFormSubmit} />
        <TodosContainer
          todos={todosData}
          handleTodoComplete={handleTodoComplete}
        />
      </main>
    </>
  );
}

export default App;
