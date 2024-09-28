import React, { useEffect, useRef, useState } from "react";

function Todo() {
  const [todoData, setTodoData] = useState([]);
  const [id, setId] = useState(null); // For tracking selected todo id
  const [toggle, setToggle] = useState(false); // For toggling edit/view mode
  const todoInput = useRef();

  // Fetch the initial todo data
  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoData(data.todos));
  }, []);

  // Handle adding a new todo
  const handleSubmit = () => {
    const newData = {
      completed: false,
      id: todoData.length + 1,
      todo: todoInput.current.value,
    };
    setTodoData([newData, ...todoData]);
  };

  // Handle selecting a todo item for edit
  const handleTodo = (e) => {
    setId(Number(e.target.id)); // Convert to number
    setToggle(true); // Enable edit mode
  };

  // Toggle between edit and view modes
  const handleToggle = () => {
    setToggle(!toggle); // Toggle between true/false
  };

  return (
    <>
      <h1>Todo Application</h1>
      <input type="text" ref={todoInput} />
      <button onClick={handleSubmit}>Add todo</button>
      <button onClick={handleToggle}>{toggle ? "View" : "Edit"}</button>
      <ul>
        {todoData?.map((item) => {
          return item.id === id && toggle ? (
            <input type="text" key={item.id} defaultValue={item.todo} />
          ) : (
            <li onClick={handleTodo} key={item.id} id={item.id}>
              Title: {item.todo}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
