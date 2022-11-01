import React from 'react';
import { Button, Card } from '@blueprintjs/core';

function Item({item, toggleComplete, deleteItem }) {
  return (
    <Card>
        <p>{item.text}</p>
        <p><small>Assigned to: {item.assignee}</small></p>
        <p><small>Difficulty: {item.difficulty}</small></p>
        <Button onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
        <Button onClick={() => deleteItem(item.id)}>Delete Item</Button>
        <hr />
    </Card>
  )
}

export default Item;