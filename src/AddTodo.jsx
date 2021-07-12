import React, { useState } from "react";

const AddTodo = ({ AddTodoItem }) => {
  const [todo, setTodo] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    AddTodoItem({
      id: Math.random() * 5000,
      item: todo,
      status: false,
    });
    setTodo("");
  };
  return (
    <form className="shadow p-5">
      <div className="form-group">
        <label>Enter Todo Item</label>
        <input
          className="form-control"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </div>
      <button onClick={HandleSubmit} className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
