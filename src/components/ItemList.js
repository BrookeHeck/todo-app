import React from 'react';
import Item from './Item';

function ItemList({list, toggleComplete}) {
  return (
    <>
      {list.map(item => (
      <div key={item.id}>
        <Item item={item} toggleComplete={toggleComplete} />
      </div>
    ))}
    </>
  )
}

export default ItemList;