import React from "react";
import "./TodoItem.css";
function TodoItem() {
  return (
    <div className="lists">
      <div className="i">
        <input className="check" type="checkbox" />
        <label>Learning React Js</label>
      </div>

      <button className="del">X</button>
    </div>
  );
}

export default TodoItem;
