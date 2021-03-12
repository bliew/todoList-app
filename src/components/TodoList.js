import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todoList-container">
      <ul className="todoList-items">
        {todos.map((todo) => (
          <TodoListItem
            id={todo.id}
            todo={todo}
            todos={todos}
            text={todo.text}
            setTodos={setTodos}
          /> //for each todo, we showcase the item and pass the text
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
