
const ImageComponent = (data: any) => {


  return (
    <div className='flex flex-col items-center justify-center text-lg text-center'>
      <img className='max-w-[250px] md:max-w-[400px]' src={data.data.image} alt={data.data.title} />
      {data.data.text && 
        <div className='py-4 my-8 border-y border-black'>{data.data.text}</div>}
      {
        data.data.link &&
        <a className='uppercase' target="_blank" href={data.data.link}>Več o vrtcu: <span className='text-blue-500'>{data.data.linkText}</span></a>
      }
    </div>
  )
}

export { ImageComponent };