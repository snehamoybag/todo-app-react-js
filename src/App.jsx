import Logo from "./components/Logo";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main>
        <TodoForm />
      </main>
    </>
  );
}

export default App;
