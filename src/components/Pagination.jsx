import { useContext } from 'react';
import settings from './../context/settings';

function Pagination({ setCurrentPage, listLength }) {
  const { numberOfItems } = useContext(settings);

  function handlePageClick(e) {
    console.log(e.target.innerHTML);
    setCurrentPage(parseInt(e.target.innerHTML));
  }

  function getPageNumbers() {
    const numArr = [];
    for (let i = 1; i <= Math.ceil(listLength / numberOfItems); i++) {
      numArr.push(i);
    }
    return numArr;
  }

  return (
    <div>
      {
        getPageNumbers().map(num => {
          return <div key={num} onClick={handlePageClick}>{num}</div>
        })
      }
    </div>
  )
}

export default Pagination;