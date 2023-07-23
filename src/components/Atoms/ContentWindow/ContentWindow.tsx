import { AnimatePresence, motion } from "framer-motion";
import { useContentState } from "../../../state/content.state";
import { contentContent } from "../../../core/content/content";
import { ImageComponent, RiddleComponent, RiddleSlideshow, Slideshow, SoundComponent, Soundshow } from "..";

const ContentWindow = () => {
  const [contentIndex, setContentIndex] = useContentState((store: any) => ([
    store.contentIndex,
    store.setContentIndex
  ]));

  const contentData = contentIndex !== 0 ? contentContent[contentIndex - 1] : false;

  const processEntry = (data: any) => {
    switch(data.type) {
      case 'image':
        return <ImageComponent key={data.title} data={data} />
      case 'riddle':
        return <RiddleComponent key={data.title} data={data} />
      case 'sound':
        return <SoundComponent key={data.title} data={data} />
      default:
        break;
    }
  }

  return (
    <>
    {
      contentIndex !== 0 &&
      <AnimatePresence>
        <motion.div className='flex items-center absolute top-0 left-0 w-full h-full max-md:flex max-md:justify-center max-md:items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='absolute top-0 left-0 w-full h-full bg-black/50' 
            onClick={(e) => {
                e.preventDefault();
                setContentIndex(0);
              }
            }
          ></div>
        {
          contentData &&
            <motion.div className='relative overflow-y-auto p-12 text-3xl max-md:top-20 md:left-20 w-5/6 md:w-3/5 h-3/4 bg-black/50 z-50 bg-orange rounded-xl flex flex-col justify-content items-center'
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}>
              <div className='w-full flex justify-between items-start mb-10'>
              <h1>{contentData?.title}</h1>
                <button className='' onClick={() => setContentIndex(0)}>X</button>    
              </div>
                {
                  Array.isArray(contentData.content) &&
                    contentData.content.length > 1 ?
                      <>
                        {
                          contentData.content[0].type === 'sound' &&
                          <Soundshow key={contentData.title} data={contentData.content} />
                        }
                        {
                          contentData.content[0].type === 'text-image' || contentData.content[0].type === 'image' ?
                          <Slideshow key={contentData.title} data={contentData.content} /> : null
                        }
                        {
                          contentData.content[0].type === 'riddle' ?
                          <RiddleSlideshow key={contentData.title} data={contentData.content} /> : null
                        }
                      </>
                    :
                    contentData.content.map((data: any) => {
                      return processEntry(data);
                    })  
                }
            </motion.div>
          }
        </motion.div>
      </AnimatePresence>
    }
    </>

  )
}

export { ContentWindow };