import { SoundBar } from "..";

const SoundComponent = (data: any) => {

  return (
    <div className='flex flex-col justify-center items-center text-lg'>
      <h3 className='text-center border-b border-black pb-4 mb-4'>{data.data.text}</h3>
      <SoundBar src={data.data.sound} />
    </div>
  )
}

export { SoundComponent };