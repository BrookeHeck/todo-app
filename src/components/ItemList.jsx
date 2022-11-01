import { useContext, useState, useEffect } from 'react';
import Item from './Item';
import { SettingsContext } from './../context/settings';
import Pagination from './Pagination.jsx'
import sort from './../lib/sorting';

function ItemList({ list, setList }) {

  const context = useContext(SettingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [ displayedList, setDisplayedList] = useState(list);

  useEffect(() => {
    setDisplayedList(list);
    if(!context.showCompleted) setDisplayedList(sort.filterByComplete(list));
  }, [context.showCompleted, list]);

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

  function getPageList() {
    const start = currentPage * context.numberOfItems - context.numberOfItems;
    const end = (start + context.numberOfItems) < displayedList.length ? start + context.numberOfItems : displayedList.length;
    return displayedList.slice(start, end);
  }

  return (
    <div className='list'>
      {getPageList().map(item => (
          <Item item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} key={item.id} />
      ))}
      <Pagination setCurrentPage={setCurrentPage} listLength={displayedList.length} />
    </div>
  )
}

export default ItemList;