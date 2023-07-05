import { MenuButtons } from "..";
import { navButtons } from "../../../core/content/content";
import { useContentState } from "../../../state/content.state";
import { AnimatePresence, motion } from "framer-motion";


const Menu = () => {
  const [contentIndex, setContentIndex, isMenu, openMenu] = useContentState((store: any) => ([
    store.contentIndex,
    store.setContentIndex,
    store.isMenu,
    store.openMenu
  ]));

  return (
    <>
    <div className='absolute top-10 right-8 z-50 bg-orange rounded-full p-2 group hover:scale-105 transition duration-300 border-2 border-white'
      onClick={() => {
        openMenu((value: boolean) => !value);
        contentIndex !== 0 && setContentIndex(0);
      }
    }  
    >
      <img className='h-12 w-12 hover:scale-105' src='assets/images/icons/lupa.webp' alt='lupa' />
    </div>
    {
      isMenu &&
      <AnimatePresence>
        <motion.div className='flex items-center absolute top-0 left-0 w-full h-full max-md:flex max-md:justify-center max-md:items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className='absolute top-0 left-0 w-full h-full bg-black/50' 
            onClick={(e) => {
                e.preventDefault();
                openMenu(false);
              }
            }
          ></div>
          <motion.div className='absolute overflow-y-auto bg-orange bottom-10 right-10 h-3/4 w-3/4 lg:w-1/2 rounded-xl grid grid-cols-3'
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {
              navButtons.map((btn: any) => 
                <MenuButtons key={btn.title} src={btn.imageSrc} title={btn.title} id={btn.id} />
              )
            }
            <div className='col-start-2 w-full h-full flex items-center justify-center'
              onClick={() => {
                !!isMenu && openMenu(false);
                setContentIndex(13)
              }
            }>
             <button className='text-sm w-max mt-4 border border-black rounded-full px-4 py-2'>Ustvarjalci vsebine</button> 
            </div> 
          </motion.div>
        </motion.div>
      </AnimatePresence>
    }
    </>
  )
}

export { Menu };