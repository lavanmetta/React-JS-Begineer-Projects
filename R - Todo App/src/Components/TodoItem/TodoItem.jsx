import React, { useContext,  } from "react";
import "./TodoItem.css";
import { MyContext } from "../Todo/Todo";

function TodoItem({isTodoAdded}) {
  const { todoList, onDeleteHandler, checkHandler } = useContext(MyContext);
  




  return (
    <>
      {todoList.map((each, index) => (
        <div className={`lists  ${each.isChecked ? 'dis' : '' }`} key={index}>
          <div className="i">
            <input
              className="check"
              type="checkbox"
              onChange={() => checkHandler(index)}
              checked={each.isChecked}
            />
            <label className={each.isChecked ? 'lt' : '' }>{each.todo}</label>
          </div>
          <button onClick={() => onDeleteHandler(each)} className="del">
          <i class="ri-delete-bin-6-line"></i>
          </button>
        </div>
      ))}
    </>
  );
}

export default TodoItem;
