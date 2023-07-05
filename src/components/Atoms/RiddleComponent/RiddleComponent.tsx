import { SoundBar } from "..";
import { useContentState } from "../../../state/content.state";

const RiddleComponent = (data: any) => {
  const [showAnswer, setShowAnswer] = useContentState((store: any) => ([
    store.showAnswer,
    store.setShowAnswer
  ]));

  return (
    <div className='flex flex-col justify-center items-center text-lg'>
      <div className='border-b border-black pb-4 mb-4'>{data.data.text}</div>
        {data.data.answerText &&
          <button 
            className='border border-black my-4 px-4 py-2 rounded-full'
            onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? 'Skrij odgovor' : 'Prikaži odgovor'}
          </button>
        }
        {
          showAnswer &&
          <div className='flex flex-col justify-center items-center'>
            {data.data.answer && <img className='w-1/2' src={data.data.answer} alt={data.data.answerText} />}
            <h3>{data.data.answerText}</h3>
          </div>
        }
      {data.data.sound && <SoundBar src={data.data.sound} />}
    </div>
  )
}

export { RiddleComponent };