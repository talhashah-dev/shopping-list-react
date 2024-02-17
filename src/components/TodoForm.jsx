import React, { useState } from "react";

function TodoFo(props) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a Todo"
        value={input}
        name="text"
        className="todo-input"
      />
      <button className="todo-button">Add Todo</button>
    </form>
  );
}

export default TodoFo;
