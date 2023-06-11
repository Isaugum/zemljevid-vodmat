import { useState } from 'react';
import './style/menu.css';
import { navButtons } from '../../../core/content/content';
import { AnimatePresence, motion } from 'framer-motion';

interface MenuProps {
  setContentID: (id: number) => void;
  contentState: boolean;
  openContent: (value: boolean) => void;
}

const Menu = ({ setContentID, contentState, openContent }: MenuProps) => {
  const [isMainMenu, setIsMainMenu] = useState(false);

  const handleMenu = () => {
    if(contentState) {
      openContent(false);
    }
    setIsMainMenu((value: boolean) => !value);
  }

  const handleMenuButtonClick = (id: any) => {
    setIsMainMenu(false);
    setContentID(id);
    openContent(true);
  }

  return (
    <>
      <button className='menu-button' onClick={() => handleMenu()}><img src='../../../public/assets/images/icons/lupa.png' alt='x' /></button>

      {isMainMenu &&
        <AnimatePresence>
          <motion.div className='dropdown-bg' onClick={() => setIsMainMenu(false)}/>
          <motion.div
            initial={{ opacity: 0, right: -20 }}
            animate={{ opacity: 1, right: 20 }}
            transition={{ duration: 0.3 }}

            className='dropdown'
          >
                <div className='btn-container'>
                  {
                    navButtons.map((btn: any) => <button key= {btn.title} className='nav-btn' 
                    onClick={() => handleMenuButtonClick(btn.id)}>
                      <img className='btn-image' src={btn.imageSrc} alt={btn.title}/>
                    </button>)
                  }
                </div>
          </motion.div>
        </AnimatePresence>            
      }
      </>
  )
}

export { Menu };