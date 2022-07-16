import React from "react";
import TodoItem from "./TodoItem";

const todos = [
  {
    name: "Reminders",
    count: 4,
  },
  {
    name: "Shopping",
    count: 24,
  },
  {
    name: "Personal",
    count: 34,
  },
  {
    name: "Work",
    count: 3,
  },
];

const TodoList = () => {
  return (
    <>
      <h2 className="text-xs p-2 font-bold text-gray-500">My Lists</h2>
      <ul>
        {todos.map(({ name, count }) => (
          <TodoItem name={name} count={count} />
        ))}
      </ul>
    </>
  );
};

export default TodoList;
