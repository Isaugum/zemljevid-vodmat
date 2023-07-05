import './scss/index.css'
import { ContentWindow, Menu } from "./components";
import map from '/assets/images/zemljevid.webp';
import React from 'react';


function App() {

  return (
    <>
    <div className='h-screen w-screen overflow-auto'>
        <img src={map} className='max-md:h-screen z-0 max-w-none' />
        <Menu />
        <ContentWindow />
    </div>
    </>
  )
}

export default React.memo(App);
