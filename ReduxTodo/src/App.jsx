import { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todoKey", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
