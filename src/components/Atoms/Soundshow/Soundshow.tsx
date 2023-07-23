import { useState } from "react";
import { PaginationButtons, SoundBar } from "..";

const Soundshow = (data: any) => {
  const [page, setPage] = useState(0);

  return (
    <div className='flex flex-col justify-center items-center w-full text-lg'>
      <div className='text-center border-b border-black pb-4 mb-4'>{data.data[page].text}</div>
      {
        !!data.data[page].image &&
        <img className='max-w-[250px] md:max-w-[400px] py-2' src={data.data[page].image} alt={data.data[page].title} />
      }
      <SoundBar src={data.data[page].sound} />
      <PaginationButtons page={page} setPage={setPage} total={data.data.length}/>
    </div>
  )
}

export { Soundshow };