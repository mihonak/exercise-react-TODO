import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">Done</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo} className="list-row">
              <span>{todo}</span>
              <button onClick={() => onClickBack(index)}>Move to TODO</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
