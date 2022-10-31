import React from 'react';
import Item from './Item';

function ItemList({list, setList}) {
  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

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