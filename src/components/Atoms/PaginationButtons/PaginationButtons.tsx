
interface PaginationButtonsProps {
  page: number;
  setPage: (value: number) => void;
  total: number;
}

const PaginationButtons = ({ page, setPage, total }: PaginationButtonsProps) => {

  const updatePage = (value: number) => {
    if(page + value < 0) {
      setPage(total - 1);
      return;
    }

    if(page + value > total - 1) {
      setPage(0);
      return;
    }

    setPage(page + value);
  }

  return (
    <div className='flex justify-between items-center my-6'>
      <button className='h-10 w-16 border border-black rounded-lg mr-10' onClick={() => updatePage(-1)}>{'<'}</button>
      <button className='h-10 w-16 border border-black rounded-lg' onClick={() => updatePage(+1)}>{'>'}</button>
    </div>
  )
}

export { PaginationButtons };