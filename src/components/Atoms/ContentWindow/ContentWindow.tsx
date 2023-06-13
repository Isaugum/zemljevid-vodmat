
import { AnimatePresence, motion } from 'framer-motion';
import { contentContent } from '../../../core/content/content';
import React, { useMemo } from 'react';
import { ImageComponent, SlideshowComponent, SoundComponent, SoundSlideshow, TextComponent } from '..';
interface ContentProps {
  contentID: number;
}

const ContentWindow = React.memo(({ contentID }: ContentProps ) => {
  const contentData = contentContent[contentID -1];

  const componentToRender = useMemo(() => {
    switch(contentData.type) {
      case 'text':
        return <TextComponent data={contentData} />
      case 'sound':
        return <SoundComponent data={contentData} />
      case 'image':
        return <ImageComponent data={contentData}/>
      case 'multi-image':
        return <SlideshowComponent  data={contentData}/>
      case 'multi-sound': 
        return <SoundSlideshow data={contentData}/>
      default:
        break;
    }
  }, [contentData]);

  return (
    <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}

        className='absolute top-0 left-0 h-screen w-screen flex flex-col items-center justify-center'
      >
      <div className='relative overflow-y-auto flex flex-col justify-start items-center rounded-3xl top-10 w-5/6 h-3/5 bg-orange/80 z-30 py-6 lg:py-10 px-6 overflow-hidden'>
        {
          componentToRender
        }
      </div>
      </motion.div>
    </AnimatePresence>
    </>
  )
});

export { ContentWindow };