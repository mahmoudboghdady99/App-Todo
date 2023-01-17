import React from "react";
import "./TodoItems.css";

const TodoItem = (props) => {
  const { items , deleteItems} = props;
  let  length = items.length;
  const allItems = length ? items.map((item) => {
    return (
      <div key={item.id}>
        <span>{item.name}</span>
        <span>{item.age}</span>
        <span onClick={() => deleteItems(item.id)}>&times;</span>
      </div>
    );
  }) : <p>
    there is no items to show
  </p>


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
