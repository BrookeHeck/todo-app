import React, { useEffect, useState } from 'react';
import Header from './Header';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import settings from './../context/settings';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const [showCompleted, setShowComplete] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(10);

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <settings.Provider value={
      {
        ...{
          showCompleted: showCompleted,
          setShowComplete: setShowComplete,
          numberOfItems: numberOfItems,
          setNumberOfItems: setNumberOfItems,
        }
      }
    }>

      <Header incomplete={incomplete} />
      <ItemForm list={list} setList={setList} />
      <ItemList list={list} setList={setList} />

    </settings.Provider>
  );
};

export default ToDo;