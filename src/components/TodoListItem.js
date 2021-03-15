import React from "react";

const TodoListItem = ({ id, text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id)); //el is the element which we would like to delete- will return new array with components that pass argument
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item, // keep all other items
            completed: !item.completed, //change the completed value of the item which you clicked
          };
        }
        console.log(item);
        return item;
      })
    );
  };

  return (
    <div className="todolistitem-container">
      <button onClick={completeHandler} className="check-btn">
        <i className="material-icons">check_box_outline_blank</i>
      </button>
      <div className={`item-text ${todo.completed ? "completed" : ""}`}>
        {text}
      </div>
      <button onClick={deleteHandler} className="delete-btn">
        <i className="material-icons">delete</i>
      </button>
    </div>
  );
};

export default TodoListItem;
