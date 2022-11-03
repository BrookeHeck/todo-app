import React, { useEffect, useState, useContext } from 'react';
import { LoginContext } from '../context/auth';
import Header from './Header';
import ItemForm from './ItemForm';
import ItemList from './ItemList';
import Nav from './Nav';
import SplashPage from './SplashPage';
import { When } from 'react-if';
import './../styles/todo.css';

const ToDo = () => {
  const context = useContext(LoginContext);
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  useEffect(() => {
    getIncompleteCount();
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  function getIncompleteCount() {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
  }

  return (
    <>
      <Nav />
      <When condition={context.loggedIn}>
        <Header incomplete={incomplete} />
        <div className='listBody'>
          <ItemForm list={list} setList={setList} />
          <ItemList list={list} setList={setList} />
        </div>
      </When>

      <When condition={!context.loggedIn}>
        <SplashPage/>
      </When>
    </>
  );
};

export default ToDo;