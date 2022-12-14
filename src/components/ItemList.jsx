import { useContext, useState, useEffect } from 'react';
import Item from './Item';
import { SettingsContext } from './../context/settings';
import { LoginContext } from '../context/auth';
import Pagination from './Pagination.jsx'
import sortAndFilter from './../lib/sorting';
import { getTasks, deleteTask, updateTask } from '../lib/server-requests';

function ItemList({ list, setList }) {

  const context = useContext(SettingsContext);
  const loginContext = useContext(LoginContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [ displayedList, setDisplayedList] = useState(list);

  useEffect(() => {
    const getTasksOnRender = async () => {
      const dbList = await getTasks(loginContext.user.id, loginContext.token);
      setList(dbList);
    }
    getTasksOnRender();
  }, []);

  useEffect(() => {
    const filteredList = sortAndFilter(list, context.showCompleted, context.sortBy);    
    setDisplayedList(filteredList);

  }, [context.showCompleted, list, context.sortBy]);

  function deleteItem(id) {
    deleteTask(loginContext.token, id);
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
        updateTask(loginContext.token, item);
      }
      return item;
    });
    setList(items);
  }

  function getPageList() {
    const start = currentPage * context.numberOfItems - context.numberOfItems;
    const end = (start + context.numberOfItems) < displayedList.length ? start + context.numberOfItems : displayedList.length;
    return displayedList.slice(start, end);
  }

  return (
    <div className='list' data-testid='item-list'>
      {getPageList().map(item => (
          <Item item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} key={item.id} />
      ))}
      <Pagination setCurrentPage={setCurrentPage} listLength={displayedList.length} />
    </div>
  )
}

export default ItemList;