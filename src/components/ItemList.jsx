import { useContext, useState } from 'react';
import Item from './Item';
import settings from './../context/settings';
import Pagination from './Pagination.jsx'
function ItemList({ list, setList }) {

  const { numberOfItems } = useContext(settings);
  const [currentPage, setCurrentPage] = useState(1);


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
    const end = (start + numberOfItems) < list.length ? start + numberOfItems : list.length;
    console.log(start + numberOfItems);
    console.log(list.length);
    console.log(start, end);
    return list.slice(start, end);
  }

  return (
    <div className='list'>
      {getPageList().map(item => (
        <div key={item.id}>
          <Item item={item} toggleComplete={toggleComplete} deleteItem={deleteItem} />
        </div>
      ))}
      <Pagination setCurrentPage={setCurrentPage} listLength={list.length} />
    </div>
  )
}

export default ItemList;