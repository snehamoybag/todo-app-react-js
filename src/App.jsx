import Logo from "./components/Logo";
import TodoForm from "./components/TodoForm";
import TodosContainer from "./components/TodosContainer";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <TodoForm />
        <TodosContainer />
      </main>
    </>
  );
}

export default App;
