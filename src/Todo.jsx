import React from "react";

const Todo = ({ Todo, deleteTodo, completeTask }) => {
  const cssClass =
    Todo.status === true ? "alert alert-success" : "alert alert-secondary";
  return (
    <div
      className={cssClass}
      role="alert"
      onDoubleClick={() => completeTask(Todo)}
    >
      {Todo.item}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => deleteTodo(Todo)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Todo;
