import React from 'react'
import { FaStar } from 'react-icons/fa';
import { FaCheck, FaMinus } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import TextTitle from './utils/TextTitle';

// Import Swiper styles
const Testimoni = () => {
    return (
        <div>
            <div className='w-full px-4 mt-20'>
                <TextTitle warna='dark'>Dipercaya 3+ juta pelanggan di seluruh dunia</TextTitle>
            </div>
            <div>
                <div className='max-w-6xl px-4 mx-auto text-gray-900 ' id='article'>


                    <div className='flex flex-wrap justify-between gap-4 mt-16'>
                        <Swiper

                            spaceBetween={17}
                            slidesPerView={1}
                            onSlideChange={() => { }}
                            onSwiper={(swiper) => { }}
                            className='w-full '
                            breakpoints={{
                                // Untuk layar yang lebih kecil, misalnya di bawah 640px, `slidesPerView` akan menjadi 1
                                640: {
                                    slidesPerView: 1,
                                },
                                // Untuk layar menengah, misalnya di bawah 768px, `slidesPerView` bisa menjadi 2
                                768: {
                                    slidesPerView: 2,
                                },
                                // Untuk layar yang lebih besar, misalnya di bawah 1024px, `slidesPerView` bisa menjadi 3
                                1024: {
                                    slidesPerView: 3,
                                },
                                // Dan untuk layar di atas 1024px, `slidesPerView` akan menjadi 4
                            }}
                        >
                            {[1, 2, 3].map((e, i) => (
                                <SwiperSlide key={i} className='mx-auto'>

                                    <div key={i} className="overflow-hidden text-gray-900 shadow-sm border-[0.9px] border-light/30 my-3 w-full lg:w-[355px]  rounded-2xl">
                                        <div className='flex items-center px-6 py-5 bg-df/30'>
                                            <div className='flex items-center'>
                                                <div className='size-[60px] rounded-full bg-gray-200 '></div>
                                                <div className='font-semibold ms-4'>

                                                    <h1 className='text-lg font-semibold'>Handers</h1>
                                                    <p className='text-sm font-normal'>Founders HMS</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-8 px-7">
                                            <div className="mb-2 text-xl font-bold"></div>
                                            <p className="flex items-center gap-2 text-xl ">
                                                <FaStar className='text-df' />
                                                <FaStar className='text-df' />
                                                <FaStar className='text-df' />
                                                <FaStar className='text-df' />
                                                <FaStar className='text-df' />
                                            </p>
                                            <p className='mt-5 text-sm leading-6'>Lorem ipsum dolor sit amet conse ctetur adipis icing elit. Labor um rerum numquam nipossimus? Quis enim aliquam eum ?
                                            </p>
                                            <p className='mt-10 text-sm font-semibold text-tx'>Baca Cerita Selengkapnya</p>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))


                            }
                        </Swiper>


                    </div>
                    <div className='flex justify-center w-full mt-9'>

                    <button className='px-8 py-2 border-2 rounded-lg border-df text-df'>Lihat testimoni pelanggan</button>
                    </div>


                </div>
            </div>
        </div >
    )
}

export default Testimoni
