import './style/content-window.css';
import { AnimatePresence, motion } from 'framer-motion';
import { contentContent } from '../../../core/content/content';
import { PaginationButtons, SlideshowComponent, SoundComponent } from '..';
import { useState } from 'react';
import LazyLoad from 'react-lazy-load';

interface ContentProps {
  contentID: number;
  closeContent: (value: boolean) => void;
}

const ContentWindow = ({ contentID, closeContent }: ContentProps ) => {
  const contentData = contentContent[contentID -1];
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ textShown, setTextShown ] = useState(false);

  console.log(!Array.isArray(contentData.content.image));


  return (
    <AnimatePresence>
    <motion.div className='dropdown-bg' onClick={() => closeContent(false)}/>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}

      className='content-container'
    >
          <div className='content-window'>
            {
              !contentData.content.answer && !(contentData.title === 'Razgledi') &&
              <h1 style={{ marginBottom: '2rem'}}>{contentData.title}</h1>
            }
            {
              contentData.content.text && !Array.isArray(contentData.content.text) &&
              <p className='text-component'>{contentData.content.text}</p>
            }
            {
              contentData.content.sound && (
              !Array.isArray(contentData.content.sound) ?
              <SoundComponent src={contentData.content.sound} />
              :
              <div className='multi-sound-container'>
                {
                  contentData.title === 'Razgledi' &&
                  <h1>Razgled {currentPage}</h1>
                }
                <div className='sound-page'>
                  <SoundComponent src={contentData.content.sound[currentPage - 1]} />
                  <PaginationButtons pagesTotal={contentData.content.sound?.length as number} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
              </div>)
            }
            {
              contentData.content.image && (
              !Array.isArray(contentData.content.image) ?
              <LazyLoad>
                <img src={contentData.content.image} alt={contentData.title} style={{ maxHeight: '17rem', maxWidth: '17rem'}} />
              </LazyLoad>
              
              :
              contentData.content.text &&
              <SlideshowComponent
                imageArray={contentData.content.image}
                textArray={contentData.content.text}
                textShown={textShown}
                currentPage={currentPage}
                setTextShown={setTextShown}
                setCurrentPage={setCurrentPage}
              />
              )
            }
          </div>
    </motion.div>
  </AnimatePresence>      
  )
}

export { ContentWindow };