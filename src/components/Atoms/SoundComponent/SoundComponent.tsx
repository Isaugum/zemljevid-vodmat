import { useState } from 'react';
import { SoundBar } from '..';
import React from 'react';

interface SoundComponentProps {
  data: any;
}

const SoundComponent = React.memo(({ data }: SoundComponentProps) => {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <>
      <h1 className='text-xl text-center font-bold'>{data.title}</h1>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        {
          data.subtype === 'text' || data.subtype === 'riddle' &&
          <div className='h-full text-center items-center justify-center flex flex-col'>
            <p className='text-sm'>{data.content.text}</p>
            {
              data.subtype === 'riddle' &&
              <div onClick={() => setShowAnswer((value: boolean) => !value)}>
                <button className='h-16 w-16 mt-6 mb-4'>
                  {
                    !showAnswer ?
                    <img className='h-full w-full' src='/assets/images/icons/vprasaj.webp' alt='vprasaj' />
                    :
                    <img className='h-full w-full' src={data.content.answer} alt='vprasaj' />
                  }
                </button>
                <p>{!showAnswer ? 'Prikaži odgovor' : 'Skrij odgovor'}</p>
              </div>

            }
          </div>
        }
        <SoundBar src={data.content.sound} />
      </div>
    </>
  )
});

export { SoundComponent };