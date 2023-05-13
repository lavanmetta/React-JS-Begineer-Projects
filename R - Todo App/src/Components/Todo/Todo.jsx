import React, { useState, useEffect } from "react";
import "./Todo.css";
import TodoItem from "../TodoItem/TodoItem";

export const MyContext = React.createContext();

function Todo() {

  const [todoList, setTodoList] = useState(() => {
    const storedTodoList = localStorage.getItem("todoList");
    return storedTodoList ? JSON.parse(storedTodoList) : [];
  });

  const [todo, setTodo] = useState("");
  const [info, setInfo] = useState("")
 

  const addTodoHandler = () => {
    if (todo === "") {
      setInfo('please type something...')
    } 
    else {
      
      setTodoList(prevState => [...prevState, {todo: todo, isChecked: false}]);
      setInfo('')
     
      
    }
    
  
    
  };
 

  const onDeleteHandler = (deletedTodo) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((t) => t !== deletedTodo)
    );
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    
  }, [todoList]);


  const checkHandler = (index) => {
    setTodoList((prevTodoList) => {
      const updatedTodoList = [...prevTodoList];
      updatedTodoList[index] = {
        ...updatedTodoList[index],
        isChecked: !updatedTodoList[index].isChecked
      };
      return updatedTodoList;
    });
  }

  return (
    <MyContext.Provider value={{ todoList, onDeleteHandler, checkHandler }}>
      <div className="todo-container">
        <div className="todo-header">
          <h1>Todo App</h1>
        </div>
        <div className="todo-box">
          <div className="input-container">
            <input
              type="text"
              placeholder="Add your new todo"
              onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={addTodoHandler}>Add Todo</button>
          </div>
          <p className="info">{info}</p>
          <div className="list-container">
            <div className="list-head">
              <h4>Your todo's list :</h4>
              <hr />
            </div>
            <TodoItem />
          </div>
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default Todo;
