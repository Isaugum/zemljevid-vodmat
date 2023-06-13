import React from "react";

interface ImageComponentProps {
  data: any;
}

const ImageComponent = React.memo(({ data }: ImageComponentProps) => {

  return (
    <>
      <h1 className='text-xl text-center font-bold'>{data.title}</h1>
      {
        data.subtype === 'text' &&
        <p className='py-10 text-sm text-center flex flex-col justify-center items-center'>{data.content.text}</p> 
      }
      <img className='h-full p-6' src={data.content.image} />
    </>
  )
});

export { ImageComponent };