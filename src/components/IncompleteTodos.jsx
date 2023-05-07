import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">TODOs</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <span>{todo}</span>
              <button onClick={() => onClickComplete(index)}>Done</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
