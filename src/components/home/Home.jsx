'use client'
import React, { useEffect, useState } from 'react'
import './style.css'
import Hero from './hero/Hero'
import About from './about/About'
import Courses from './courses/Courses'
import { BiSolidArrowToTop } from "react-icons/bi";
import Teams from './teams/Teams'
import Contact from './contact/Contact'
import Footer from '../Footer/Footer'
import FloatingButtons from './LeftBtns'
import { useGetHomedata } from '@/hooks/home'
import Loader from '../Loader/Loader'

function Home() {
  const { data, isLoading, error } = useGetHomedata(); // home api 
  const [scrollSize, setScrollSize] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollSize(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollTopFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  if(isLoading) return <Loader/>

  return (
    <div className='h-screen bgimg'>
      <Hero />
      <About />
      <Courses />
      <Teams />
      <Contact />
      <Footer />
      <FloatingButtons />
      {scrollSize > 400 && (
        <button
          onClick={scrollTopFunction}
          className="p-2 text-white bg-pink-500 fixed bottom-10 right-10 transition-all cursor-pointer active:scale-90"
        >
          <BiSolidArrowToTop className='text-2xl' />
        </button>
      )}

    </div>
  )
}

export default Home
