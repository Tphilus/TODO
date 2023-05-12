import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { isEditable } from "@testing-library/user-event/dist/utils";
import EditTodoForm from "./EditTodoForm";
// import { v4 as uuidv4 } from 'uuid';
// uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
    console.log(todo);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Philus Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditable ? (
            <EditTodoForm />
        ) : (
            <Todo
          key={index}
          task={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          isEditable={isEditable}
        />
        )
      ))}
    </div>
  );
};

export default TodoWrapper;
