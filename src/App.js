import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reducer";
import TodoForm  from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <Container>
        <h1 className="h1 primary "><u> Task App </u> </h1>
        <h2 className="h4 text-center text-white">Never miss a task again</h2>
        <Todos className="mb-15 scrollable"/>
        <TodoForm />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
