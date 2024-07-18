import Logo from "./components/Logo";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";
import "./App.css";
import { useState } from "react";

const createTodoData = (task) => ({
  id: Date.now(),
  task: task,
});

function App() {
  const [todosData, setTodosData] = useState([]);

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
