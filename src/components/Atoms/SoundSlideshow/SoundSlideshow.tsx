import { useState } from "react";
import { PaginationButtons, SoundBar } from "..";
import React from "react";

interface SoundSlideshowProps {
  data: any;
}

const SoundSlideshow = React.memo(({ data }: SoundSlideshowProps) => {
  const [ page, setPage ] = useState(0);

  return (
    <>
      <h1 className='text-xl text-center font-bold'>{data.title} - {page + 1}</h1>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <SoundBar src={data.content.sound[page]} />
        <PaginationButtons pagesTotal={data.content.sound.length} currentPage={page} setCurrentPage={setPage} />
      </div>
    </>
  )
});

export { SoundSlideshow };