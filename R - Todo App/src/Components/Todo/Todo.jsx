import React from "react";
import "./Todo.css";
import TodoItem from "../TodoItem/TodoItem";
function Todo() {
  return (
    <div className="todo-container">
      <div className="todo-header">
        <h1>Todo App</h1>
      </div>
      <div className="todo-box">
        <div className="input-container">
          <input  type="text" placeholder="Add your new todo" />
          <button>Add Todo</button>
        </div>
        <div className="list-container">
          <div className="list-head">
            <h4>Your todo's list :</h4>
            <hr />
          </div>
          <TodoItem/>
        </div>
      </div>
    </div>
  );
}

export default Todo;
