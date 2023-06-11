import './style/pagination.scss';

interface PaginationProps {
  pagesTotal: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  onTextSwitch?: (value: any) => void;
}

const PaginationButtons = ({ pagesTotal, currentPage, setCurrentPage, onTextSwitch }: PaginationProps) => {

  const setPage = (page: number) => {
    if(page !== 0 && !(page > pagesTotal)) {
      setCurrentPage(page);
    }

    if(page === 0) {
      setCurrentPage(pagesTotal);
    }

    if(page > pagesTotal) {
      setCurrentPage(1);
    }
  }


  return (
    <div className='pagination-container'>
      <button onClick={() => setPage(currentPage - 1)}>{'<'}
      </button>
      {
        onTextSwitch &&
        <button onClick={() => onTextSwitch((value: boolean) => !value)}>
          <img className='book-img' src='/assets/images/icons/knjiga.png' alt='knjiga' />
        </button>
      }
      <button onClick={() => setPage(currentPage + 1)}>{'>'}
      </button>
    </div>
  )
}

export { PaginationButtons };