import React from 'react';

function Item({item, toggleComplete, deleteItem }) {
  return (
    <>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
        <div onClick={() => deleteItem(item.id)}>Delete Item</div>
        <hr />
    </>
  )
}

export default Item;