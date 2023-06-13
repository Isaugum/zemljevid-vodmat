import React from "react";
import { useState } from "react";


interface ImageComponentProps {
  data: any;
}

const ImageComponent = React.memo(({ data }: ImageComponentProps) => {
  const [zoom, setZoom] = useState(false);

  return (
    <>
      <h1 className='text-xl text-center font-bold'>{data.title}</h1>
      <p>Klikni na sliko, da jo {!zoom ? 'povečaš' : 'pomanjšaš'}</p>
      {
        data.title !== 'Abeceda' ?
        <img className='h-full p-6' src={data.content.image} />
        :
        <div className='overflow-auto h-full w-full py-4 px-2'>
          <img className={zoom ? 'h-[500px] max-w-none' : 'h-full'} src={data.content.image} onClick={() => setZoom((value: boolean) => !value)}/>
        </div>
      }
    </>
  )
});

export { ImageComponent };