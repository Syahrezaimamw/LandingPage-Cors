import React from 'react'
import { FaCheck,FaRegGrimace } from 'react-icons/fa'
import at1 from '../images/at1.png'
import at2 from '../images/at2.png'
import at3 from '../images/at3.png'
import at4 from '../images/at4.png'
const Main1 = () => {
    return (
        <div className='mt-[145px] lg:mt-[119px] mb-20' id='home'>

            <div className='max-w-screen-2xl  lg:mx-auto text-gray-900 min-h-[580px] flex justify-between flex-col lg:flex-row px-4 '>
                <div className='w-full lg:w-[45%] flex flex-col items-center lg:items-start justify-center '>
                    <h1 className='text-2xl font-bold text-center md:text-3xl lg:text-4xl text-tx lg:text-start'>

                    Hosting dengan Fitur Buat Website Terlengkap Terpercaya </h1>
                        <p className='mt-4 text-lg font-semibold text-center md:text-xl text-tx md:text-start'>Diskon Hosting + Website Builder 77%</p>
                        <ul className='my-6 space-y-2 text-center text-tx'>
                            <li className='flex items-center gap-2'> <FaCheck className='text-sm text-green-700'/> Amankan file website dengan backup.</li>
                            <li className='flex items-center gap-2'> <FaCheck className='text-sm text-green-700'/> Enkripsi trafik website.</li>
                            <li className='flex items-center gap-2'> <FaCheck className='text-sm text-green-700'/> Aman dari serangan DDoS dengan.</li>
                        </ul>
                    <p className='mt-1 text-sm text-center w-[80%] lg:w-[90%] text-gray-500 lg:text-base lg:text-start '>Jelajahi Kebebasan Berkendara! Pinjam kendaraan pilihan Anda dengan mudah dan cepat—mulai perjalanan impian Anda hari ini.</p>
                    <div className='flex flex-col items-center justify-start w-full gap-2 mt-4 lg:gap-3 lg:items-end lg:flex-row '>

                        <button className='px-16 py-3 font-semibold text-white border-2 rounded-lg md:py-4 lg:px-9 border-df bg-df'>
                            Dapatkan Promo
                        </button>
                        <button className=' px-16 lg:px-4  py-3 md:py-4  text-white font-semibold border-2 rounded-lg border-[#84bae0] bg-[#84bae0] '>
                            Dapatkan Promo
                        </button>
                    </div>
                    <p className='mt-5 text-sm text-start'>Jaminan 30 hari uang kembali</p>
                </div>
                <div className=' w-full md:w-[50%]'>
                    {/* <img src={rental} alt="" /> */}
                </div>

            </div>
            <div className='w-full px-4 mt-1 md:mt-7'>
                <div className='flex items-center justify-center w-full gap-3'>
                    <FaRegGrimace className='text-2xl'/>

                <h1 className='text-sm text-center md:text-xl text-tx'> Direkomendasikan Oleh <span className='font-semibold'>Letris.co.io</span></h1>
                </div>
                <div className='flex justify-center max-w-screen-xl gap-3 mx-auto mt-16 md:justify-between'>
                    {[1,2,3,4].map((e,i)=>(
                        <div key={i} className='w-[20%] md:w-[250px] border-2 flex items-center justify-center border-df h-[50px] rounded-lg'>Rekomendasi</div>
                    ))}
                {/* <img src={at1} alt="" className='w-[300px]' />
                <img src={at2} alt="" />
                <img src={at3} alt="" />
                <img src={at4} alt="" /> */}
                </div>
            </div>
            
        </div>
    )
    
}

export default Main1
