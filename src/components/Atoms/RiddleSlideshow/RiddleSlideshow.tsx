import { useState } from "react";
import { PaginationButtons, RiddleComponent } from "..";

const RiddleSlideshow = (data: any) => {
  const [page, setPage] = useState(0);
  console.log(data);
  console.log(data.data[page]);

  return (
    <div className='flex flex-col justify-evenly items-center w-full'>
      <RiddleComponent data={data.data[page]} />
      <PaginationButtons page={page} setPage={setPage} total={data.data.length}/>
    </div>
  )
}

export { RiddleSlideshow };