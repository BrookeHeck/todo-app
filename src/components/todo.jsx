import React, { useEffect, useState } from 'react';
import Header from './Header';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import settings from '../context/settings';
import Nav from './Nav';

import './../styles/todo.css';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  const [showCompleted, setShowCompleted] = useState(true);
  const [numberOfItems, setNumberOfItems] = useState(3);

  useEffect(() => {
    getLocalStorageSetting();

    getIncompleteCount();
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  function getIncompleteCount() {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
  }

  function getLocalStorageSetting() {
    try {
      const settings = JSON.parse(localStorage.getItem('settings'));
      setNumberOfItems(settings.numberOfItems);
      setShowCompleted(settings.showCompleted);
    } catch(e) {
      console.log('nothing in storage');
    }
  }

  return (
    <settings.Provider value={
      {
        ...{
          showCompleted: showCompleted,
          setShowCompleted: setShowCompleted,
          numberOfItems: numberOfItems,
          setNumberOfItems: setNumberOfItems,
        }
      }
    }>
      <Nav />
      <Header incomplete={incomplete} />
      <div className='listBody'>
        <ItemForm list={list} setList={setList} />
        <ItemList list={list} setList={setList} />
      </div>

    </settings.Provider>
  );
};

export default ToDo;