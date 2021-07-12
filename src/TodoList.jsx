import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const LOCAL_KEY = "MY_APP_TODOS_LIST";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoInit = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (todoInit) setTodos(todoInit);
  }, []);

  const AddTodoItem = (todoitem) => {
    setTodos([...todos, todoitem]);
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  };
  const deleteTodo = (todo) => {
    setTodos(todos.filter((item) => item.id !== todo.id));
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  };
  const completeTask = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, status: true };
        } else {
          return item;
        }
      })
    );
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  };
  return (
    <div className="container">
      <AddTodo AddTodoItem={AddTodoItem} />
      <hr />
      <div>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              Todo={todo}
              deleteTodo={deleteTodo}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
