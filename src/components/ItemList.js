import React from 'react';
import Item from './Item';

function ItemList({list, toggleComplete, deleteItem}) {
  return (
    <>
      {list.map(item => (
      <div key={item.id}>
        <Item item={item} toggleComplete={toggleComplete} deleteItem={deleteItem}/>
      </div>
    ))}
    </>
  )
}

export default ItemList;