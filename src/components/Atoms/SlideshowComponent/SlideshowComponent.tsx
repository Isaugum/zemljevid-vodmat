import { AnimatePresence, motion } from 'framer-motion';
import { PaginationButtons } from '../PaginationButtons/PaginationButtons'
import './style/slideshow.scss';
import LazyLoad from 'react-lazy-load';


interface SlideshowProps {
  imageArray: string[];
  textArray?: string[];
  textShown: boolean;
  currentPage: number;
  setTextShown: (value: boolean) => void;
  setCurrentPage: (value: number) => void;
}

const SlideshowComponent = ({ imageArray, textArray, textShown, currentPage, setTextShown, setCurrentPage }: SlideshowProps) => {

  return (
    <div className='multi-image-container'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}

            className='image-text-container'
          >
          {
            textArray && textShown === true ?
            <p>{textArray[currentPage - 1]}</p>
            :
            <LazyLoad>
             <img key={imageArray[currentPage - 1]} src={imageArray[currentPage - 1]} alt='' style={{ maxHeight: '17rem', maxWidth: '17rem'}} /> 
            </LazyLoad>
          }
          </motion.div>
        </AnimatePresence>
      <PaginationButtons onTextSwitch={textArray && setTextShown} pagesTotal={imageArray.length as number} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export { SlideshowComponent };