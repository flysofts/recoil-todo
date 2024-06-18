import React, { useState } from "react";

function Todolist() {
  const [todo, setTodo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {
        currentTarget: {value},
    } = event;
    setToDoError("");
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    if(todo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={todo} type="text" placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError :null}
      </form>
    </div>
  );
}

export default Todolist;
