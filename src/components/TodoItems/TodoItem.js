import React from "react";
import "./TodoItems.css";

const TodoItem = (props) => {
  const { items } = props;
  const allItems = items.map((item) => {
    return (
      <div key={item.id}>
        <span>{item.name}</span>
        <span>{item.age}</span>
        <span>&times;</span>
      </div>
    );
  });
  return (
<div>
        <div>
            <span>Name</span>
            <span>Age</span>
            <span>Action</span>
        </div>
        <div>
            {allItems}
        </div>
</div>
  )
};

export default TodoItem;
