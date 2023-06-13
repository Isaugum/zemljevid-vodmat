import { useState } from 'react';
import './scss/index.css'
import { ContentWindow, Menu } from "./components";
import map from '/assets/images/zemljevid.webp';
import React from 'react';
// import { AnimatePresence, motion } from 'framer-motion'


function App() {
  // const [init, setInit] = useState(false);
  const [ contentWindow, setContentWindow ] = useState(false);
  const [ contentID, setContentID ] = useState(0);

  return (
    <>
    <div className='h-screen w-screen overflow-x-auto'>
        <img src={map} className='h-screen z-0 max-w-none' />
        <Menu setContentID={setContentID} contentState={contentWindow} openContent={setContentWindow}/>
        {
          contentWindow &&
          <ContentWindow contentID={contentID}/>
        }
    </div>
    </>
  )
}

export default React.memo(App);
