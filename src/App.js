import React from "react";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="container">
      <div className="mt-3">
        <h3 className="text-center text-primary">Todo List</h3>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
