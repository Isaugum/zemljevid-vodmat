import React from "react";

interface TextComponentProps {
  data: any;
}

const TextComponent = React.memo(({ data }: TextComponentProps) => {

  return (
    <>
      <h1 className='text-xl text-center font-bold'>{data.title}</h1>
      <p className={`h-full text-sm text-center flex flex-col justify-center items-center`}>{data.content.text}</p> 
    </>
  )
});

export { TextComponent };