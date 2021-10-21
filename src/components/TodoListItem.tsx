import React from "react";
import classes from "./TodoListItem.module.css";

import Todo from "../models/todo";

const TodoListItem: React.FC<{ item: Todo; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <li
      className={classes.item}
      key={props.item.id}
      onClick={props.onRemoveTodo}
    >
      {props.item.text}
    </li>
  );
};

export default TodoListItem;
