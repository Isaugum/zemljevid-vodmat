import { useState } from 'react';
import { PaginationButtons } from '../PaginationButtons/PaginationButtons'
import React from 'react';


interface SlideshowProps {
  data: any;
}

const SlideshowComponent = React.memo(({ data }: SlideshowProps) => {
  const [ page, setPage ] = useState(0);
  const [ showText, setShowText ] = useState(false);

  return (
    <>
      <h1 className='text-xl text-center font-bold'>{data.title} - {page + 1}</h1>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        {
          data.subtype === 'text' ?
          !showText ?
          <img key={`${page}_${data.content.image[page]}`} className='h-52' src={data.content.image[page]} />
          :
          <p key={`${page}_${data.content.text[page]}`} className='h-52 text-sm text-center flex flex-col justify-center items-center'>{data.content.text[page]}</p> 
          :
          <img key={`${page}_${data.content.image[page]}`} className='h-52' src={data.content.image[page]} />
        }
        
        <PaginationButtons pagesTotal={data.content.image.length} currentPage={page} setCurrentPage={setPage} textSwitch={data.subtype === 'text'} onTextSwitch={setShowText} />
      </div>
    </>
  )
});

export { SlideshowComponent };