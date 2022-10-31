import React, { useEffect, useState } from 'react';
import Header from './Header';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete}/>
      <ItemForm list={list} setList={setList}/>
      <ItemList list={list} toggleComplete={toggleComplete} />

    </>
  );
};

export default ToDo;