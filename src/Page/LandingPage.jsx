import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Paket from '../components/Paket'
import Contact from '../components/Contact'
import Main1 from '../components/Main1'
import Testimoni from '../components/Testimoni'
import Content1 from '../components/Content/Content1'
import Content2 from '../components/Content/Content2'
import MegaMenu from '../components/MegaMenu'
import ButtonTemp from '../components/utils/ButtonTemp'

const LandingPage = () => {

  //? Logic mengatur visible button contact Us
  
  const [isVisible, setIsVisible] = useState(true);
  const footerRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
          setIsVisible(false); 
        } else {
          setIsVisible(true); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); 
  }, []);
  return (
    <div>
      
      <Navbar />
      <Main1 />
      <Paket />
      <Content1 />
      <MegaMenu />
      <Content2 />
      <Testimoni />
      <div className='flex mt-[100px] flex-col items-center justify-center w-full gap-5 px-4 text-center text-white py-14 bg-df'>
        <h1 className='text-2xl font-bold lg:text-3xl'>Hemat hingga 77% + dapat gratis domain</h1>
        <p className='text-base'>Ada jaminan 30 uang kembali. Coba sekarang!
        </p>
        <ButtonTemp>Daftar Sekarang</ButtonTemp>
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
      {isVisible && (
        <Contact />

      )}

    </div>
  )
}

export default LandingPage
