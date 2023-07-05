import { useState } from "react";
import { PaginationButtons, SoundBar } from "..";

const Slideshow = (data: any) => {
  const [page, setPage] = useState(0);

  return (
    <div className='flex flex-col justify-evenly items-center w-full text-lg'>
      {data.data[page].image && <img className='mb-4 max-w-[250px] md:max-w-[400px]' src={data.data[page].image} alt={data.data[page].text} />}
      <PaginationButtons page={page} setPage={setPage} total={data.data.length}/>
      <div className='text-center pt-4 mt-2 border-t border-black'>{data.data[page].text}</div>
    </div>
  )
}

export { Slideshow };