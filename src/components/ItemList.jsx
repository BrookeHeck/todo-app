import { useContext, useState, useEffect } from 'react';
import Item from './Item';
import settings from './../context/settings';
import Pagination from './Pagination.jsx'
function ItemList({ list, setList }) {

  const { numberOfItems, showCompleted } = useContext(settings);
  const [currentPage, setCurrentPage] = useState(1);
  const [ displayedList, setDisplayedList] = useState(list);

  useEffect(() => {
    setDisplayedList(list);
    if(!showCompleted) setDisplayedList(filterByComplete());
  }, [showCompleted, list]);

  function filterByComplete() {
    return list.filter(item => !item.complete)
  }

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
    const start = currentPage * numberOfItems - numberOfItems;
    const end = (start + numberOfItems) < displayedList.length ? start + numberOfItems : displayedList.length;
    return displayedList.slice(start, end);
  }

  return (
    <div className='list'>
      {getPageList().map(item => (
          <Item item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} key={item.id} />
      ))}
      <Pagination setCurrentPage={setCurrentPage} listLength={list.length} />
    </div>
  )
}

export default ItemList;