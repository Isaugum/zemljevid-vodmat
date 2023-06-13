import React, { useCallback, useState } from 'react';
import { navButtons } from '../../../core/content/content';
import { AnimatePresence, motion } from 'framer-motion';
import LazyLoad from 'react-lazy-load';

interface MenuProps {
  setContentID: (id: number) => void;
  contentState: boolean;
  openContent: (value: boolean) => void;
}

const Menu = React.memo(({ setContentID, contentState, openContent }: MenuProps) => {
  const [isMainMenu, setIsMainMenu] = useState(false);

  const handleMenu = () => {
    if(contentState) {
      openContent(false);
    }
    setIsMainMenu((value: boolean) => !value);
  }

  const closeWindows = () => {
    if(isMainMenu) {
      setIsMainMenu(false);
    }
    if(contentState) {
      openContent(false);
    }
  }

  const handleMenuButtonClick = (id: any) => {
    setIsMainMenu(false);
    setContentID(id);
    openContent(true);
  }

  const buttonsRender = useCallback(() => {
    return navButtons.map((btn: any, index: number) => 
      <LazyLoad key={`${btn.title}_${index}`}>
        <button className='h-full w-full flex justify-center items-center' 
          onClick={() => handleMenuButtonClick(btn.id)}>
          <img className='h-6/12 w-6/12 md:h-4/12 md:w-4/12 lg:w-2/12 lg:h-2/12' src={btn.imageSrc} alt={btn.title}/>  
        </button>
      </LazyLoad>)
  }, []);

  return (
    <>
      <button className='absolute right-4 top-6 h-20 w-20 bg-orange rounded-3xl p-2 z-30' onClick={() => handleMenu()}><img src='/assets/images/icons/lupa.webp' alt='x' /></button>
      {isMainMenu || contentState &&
        <AnimatePresence>
          <motion.div key='hazy_background' className='absolute top-0 left-0 h-screen w-screen z-20 bg-black/50' onClick={() => closeWindows()}/>
        </AnimatePresence>            
      }
      {isMainMenu &&
        <AnimatePresence>
          <motion.div key='hazy_background' className='absolute top-0 left-0 h-screen w-screen z-20 bg-black/50' onClick={() => setIsMainMenu(false)}/>
          <motion.div
            key='menu_container'
            initial={{ opacity: 0, right: -20 }}
            animate={{ opacity: 1, right: 20 }}
            transition={{ duration: 0.3 }}

            className='overflow-auto absolute top-32 rounded-3xl right-10 w-3/4 h-3/4 md:h-3/5 bg-orange/80 grid grid-cols-3 items-center z-30 py-6'
          >
            {
              buttonsRender()
            }
          </motion.div>
        </AnimatePresence>            
      }
      </>
  )
});

export { Menu };