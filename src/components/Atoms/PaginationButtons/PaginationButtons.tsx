import React from 'react';

interface PaginationProps {
  pagesTotal: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  textSwitch?: boolean;
  onTextSwitch?: (value: any) => void;
}

const PaginationButtons = React.memo(({ pagesTotal, currentPage, setCurrentPage, onTextSwitch, textSwitch=false }: PaginationProps) => {

  const setPage = (page: number) => {
    if(page === -1) {
      setCurrentPage(pagesTotal - 1);
      return;
    }

    if(page > pagesTotal - 1) {
      setCurrentPage(0);
      return;
    }

    setCurrentPage(page);
  }


  return (
    <div className={`h-20 mt-4 z-50 flex ${onTextSwitch ? 'justify-between w-3/4' : 'justify-center w-full'} items-center`}>
      <button className='py-2 px-4 bg-orange-second rounded-lg mr-2' onClick={() => setPage(currentPage - 1)}>{'<'}
      </button>
      {
        textSwitch && onTextSwitch &&
        <button onClick={() => onTextSwitch((value: boolean) => !value)}>
          <img className='h-16 w-16' src='/assets/images/icons/knjiga.webp' alt='knjiga' />
        </button>
      }
      <button className='py-2 px-4 bg-orange-second rounded-lg ml-2' onClick={() => setPage(currentPage + 1)}>{'>'}
      </button>
    </div>
  )
});

export { PaginationButtons };