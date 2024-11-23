import React from 'react'
import TextTitle from './utils/TextTitle'
import { FaCheck } from 'react-icons/fa'

const MegaMenu = () => {
    return (
        <div className='px-4 my-28'>
            <TextTitle warna='dark'>Untuk Segala Kebutuhan Website</TextTitle>
            <div className='flex justify-center w-full mt-5'>

            <p className='text-center w-[60%] text-tx'>
                Awali sukses online Anda bersama Hostinger. Mulai dari buat website pertama, daftar domain, buat alamat email profesional, bangun bisnis online, sampai migrasi website lama Anda.
            </p>
            </div>
            <div className='mx-auto mt-24 max-w-screen-2xl '>
                {
                    [1,2,3,4].map((e, i) => (
                        <div className='relative flex flex-col justify-center w-full border-l-2 border-tx md:border-0 ps-6 md:ps-0 md:flex-row' key={i}>

                                <div className='flex md:hidden size-[28px] bg-df rounded-full absolute -left-4 -top-2 text-white justify-center items-center text-sm'>
                                    <FaCheck/>
                                </div>
                            <div className='w-full md:w-[50%] md:border-r-2 pb-4 md:pb-10 relative border-gray-700 md:pe-10 flex items-center justify-center'>
                                <div className='w-full md:h-[330px] h-[240px] rounded-lg bg-df'></div>
                                <div className='hidden md:flex size-[28px] bg-df rounded-full absolute -right-4 -top-2 text-white justify-center items-center text-sm'>
                                    <FaCheck/>
                                </div>
                            </div>
                            <div className='w-full md:w-[50%] md:ps-10 py-5'>
                                <h1 className='text-3xl font-semibold md:text-4xl'>Project
                                    <span className='text-df'> Cors Saya </span>
                                </h1>
                                <p className='mt-4 '>

                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus, commodi quaerat excepturi rerum facilis illum suscipit quod, eligendi accusamus vero, earum possimus quos repellat repellendus magnam nobis. Amet,  saya Kenapa eos!
                               
                                </p>
                                <p className='mt-4 text-gray-600'>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis blanditiis voluptatum voluptatibus voluptates nesciunt nihil nobis voluptatem facilis excepturi nulla molestiae, itaque architecto eveniet repellendus. Excepturi at quae eos.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod assumenda amet natus animi fugiat quas sit labore minima quibusdam necessitatibus voluptatib
                                </p>
                            </div>
                        </div>
                    ))
                }



            </div>
        </div>
    )
}

export default MegaMenu
