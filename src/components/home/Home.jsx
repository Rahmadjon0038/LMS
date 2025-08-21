import React, { useEffect, useState } from 'react'
import './style.css'
import Hero from './hero/Hero'
import About from './about/About'
import Courses from './courses/Courses'
import { BiSolidArrowToTop } from "react-icons/bi";
function Home() {

  const [scrolSize, setScrolSize] = useState();
  window.addEventListener('scroll', () => {
    console.log('Vertikal scroll:', window.scrollY);
    setScrolSize(window.scrollY)
  });

  const scrolTopFunction = () => {
    window.scrollTo(0, 0)
  }


  return (
    <div className='h-screen bgimg '>
      <Hero />
      <About />
      <Courses />
      {
        scrolSize > 400 ?
          <button onClick={scrolTopFunction} className={`p-2 text-white bg-pink-500 fixed bottom-10 right-10 transition-all cursor-pointer active:scale-90`}><BiSolidArrowToTop className='text-2xl' /></button>
          : ''
      }

    </div >
  )
}

export default Home