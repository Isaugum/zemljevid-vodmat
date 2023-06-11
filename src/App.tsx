import { useState } from 'react';
import './scss/index.css'
import { BackgroundMap, ContentWindow, Menu } from "./components"
// import { AnimatePresence, motion } from 'framer-motion'


function App() {
  // const [init, setInit] = useState(false);
  const [ contentWindow, setContentWindow ] = useState(false);
  const [ contentID, setContentID ] = useState(0);

  return (
    <>
    <div className='container'>
        {/* <AnimatePresence>
          <motion.div
            className='title-bg'

            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 4, duration: 2 }}
          >

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
              >
                <h1>HELLO VODMAT</h1>
              </motion.div>

          </motion.div> 
        </AnimatePresence>    */}
      <div style={{ overflow: 'hidden' }}>
        <Menu setContentID={setContentID} contentState={contentWindow} openContent={setContentWindow}/>
        {
          contentWindow &&
          <ContentWindow contentID={contentID} closeContent={setContentWindow}/>
        }
        
      </div>
      <BackgroundMap />
    </div>
    </>
  )
}

export default App
