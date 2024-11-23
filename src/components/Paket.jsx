import React from 'react'
import { FaCheck, FaMinus } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import TextTitle from './utils/TextTitle';
const Paket = () => {
    const dataPaket = [
        {
            terlaris: false,
            title: "Singel",
            deskripsi: 'Menjadikan Yang Terbaik',
            harga: 300000,
            jangkaWaktu: 2,
            keterangan: [
                {
                    status: true,
                    isi: '100 website',
                },
                {
                    status: true,
                    isi: 'Manage WordPress Hosting',
                },
                {
                    status: true,
                    isi: '100 GB SSD storage',
                },
                {
                    status: true,
                    isi: 'Gratis migrasi website otomatis',
                },
                {
                    status: false,
                    isi: 'Gratis CDN',
                },
                {
                    status: false,
                    isi: 'Alamat IP Dedicated',
                },
            ]

        },
        {
            terlaris: true,
            title: "Singel",
            deskripsi: 'Menjadikan Yang Terbaik semakin',
            harga: 150000,
            jangkaWaktu: 3,
            keterangan: [
                {
                    status: true,
                    isi: '100 website',
                },
                {
                    status: true,
                    isi: 'Manage WordPress Hosting',
                },
                {
                    status: true,
                    isi: '100 GB SSD storage',
                },
                {
                    status: true,
                    isi: 'Gratis CDN',
                },
                {
                    status: true,
                    isi: 'Alamat IP Dedicated',
                },
                {
                    status: true,
                    isi: 'Gratis migrasi website otomatis',
                },
            ]

        },
        {
            terlaris: false,
            title: "Singel",
            deskripsi: 'Menjadikan Yang Terbaik',
            harga: 300000,
            jangkaWaktu: 2,
            keterangan: [
                {
                    status: true,
                    isi: '100 website',
                },
                {
                    status: true,
                    isi: 'Manage WordPress Hosting',
                },
                {
                    status: true,
                    isi: '100 GB SSD storage',
                },
                {
                    status: true,
                    isi: 'Gratis migrasi website otomatis',
                },
                {
                    status: false,
                    isi: 'Gratis CDN',
                },
                {
                    status: false,
                    isi: 'Alamat IP Dedicated',
                },
            ]

        },
        {
            terlaris: false,
            title: "Singel",
            deskripsi: 'Menjadikan Yang Terbaik',
            harga: 300000,
            jangkaWaktu: 2,
            keterangan: [
                {
                    status: true,
                    isi: '100 website',
                },
                {
                    status: true,
                    isi: 'Manage WordPress Hosting',
                },
                {
                    status: true,
                    isi: '100 GB SSD storage',
                },
                {
                    status: true,
                    isi: 'Gratis migrasi website otomatis',
                },
                {
                    status: false,
                    isi: 'Gratis CDN',
                },
                {
                    status: false,
                    isi: 'Alamat IP Dedicated',
                },
            ]

        },
        {
            terlaris: false,
            title: "Singel",
            deskripsi: 'Menjadikan Yang Terbaik',
            harga: 300000,
            jangkaWaktu: 2,
            keterangan: [
                {
                    status: true,
                    isi: '100 website',
                },
                {
                    status: true,
                    isi: 'Manage WordPress Hosting',
                },
                {
                    status: true,
                    isi: '100 GB SSD storage',
                },
                {
                    status: true,
                    isi: 'Gratis migrasi website otomatis',
                },
                {
                    status: false,
                    isi: 'Gratis CDN',
                },
                {
                    status: false,
                    isi: 'Alamat IP Dedicated',
                },
            ]

        },
    ]
    return (
        <div className='mt-10 lg:mt-40'>
            <div className='w-full px-4'>
                <TextTitle warna='dark'>Pilih Paket Web Hosting untuk Website Anda</TextTitle>
                <p className='mt-3 text-center'>Pilih paket web hosting lebih yakin dengan jaminan 30 hari uang kembali, bebas risiko.</p>
            </div>


            <div className='max-w-full mx-4 md:max-w-[679px] lg:max-w-[730px]   xl:max-w-[1170px]  2xl:max-w-[1370px] md:mx-auto flex flex-wrap items-end gap-5 mt-10'>
                <Swiper

                    spaceBetween={17}
                    slidesPerView={1}
                    onSlideChange={() => {}}
                    onSwiper={(swiper) => {}}
                    className=''
                    breakpoints={{
                        // Untuk layar yang lebih kecil, misalnya di bawah 640px, `slidesPerView` akan menjadi 1
                        640: {
                            slidesPerView: 1,
                        },
                        // Untuk layar menengah, misalnya di bawah 768px, `slidesPerView` bisa menjadi 2
                        730: {
                            slidesPerView: 2,
                        },
                        // Untuk layar yang lebih besar, misalnya di bawah 1024px, `slidesPerView` bisa menjadi 3
                        1067: {
                            slidesPerView: 3,
                        },
                        1324: {
                            slidesPerView: 4,
                        },
                        // Dan untuk layar di atas 1024px, `slidesPerView` akan menjadi 4
                    }}
                >
                    {
                        dataPaket.map((e, i) => (
                            <SwiperSlide key={i} className='mx-auto '>

                                <div className={`${e.terlaris ? ' border-df/70 ' : " border-neutral-300 mt-[51px] "} bg-white me-20 rounded-2xl border-[2px] mt-2  w-full md:w-[330px]`}>

                                    {e.terlaris ? (<div className='w-full py-2 text-xl text-center text-white bg-df/80 rounded-t-xl '>Produk Terlaris</div>) : ""}
                                    <div className='px-6 py-8 text-gray-900 '>

                                        <h1 className='text-2xl font-semibold text-[#1b4367]'>{e.title}</h1>
                                        <p className='mt-1'>{e.deskripsi}</p>

                                        <div className='mt-12'>
                                            <div className='flex items-center gap-3 font-semibold'>

                                                <p className='font-normal text-gray-600 line-through'>Rp 19.000</p>
                                                <div className='rounded-full px-4 py-1 bg-[#2367a6]/40 text-[#0D3B66] font-semibold'>Diskon 77%</div>
                                            </div>
                                            <div className='pb-8 mt-4 border-b-2 '>
                                                <p className='text-[#10283f]'>
                                                    Rp
                                                    <span className='text-[45px] font-bold'>{e.harga.toLocaleString()}</span>
                                                    /bln
                                                </p>

                                                <p className='flex items-center mt-3 text-xl font-semibold text-df'>+{e.jangkaWaktu} bulan gratis</p>
                                                <button className={`${e.terlaris ? 'bg-df text-white border-df' : " border-df text-df"} border-2 w-full py-2 font-semibold  rounded-lg mt-6`}>Pilih Paket</button>
                                                <p className='mt-3 text-sm text-gray-600'>Rp{'400.000'}/bln saat diperpanjang</p>
                                            </div>
                                            <ul className='mt-8 space-y-3'>

                                                {
                                                    e.keterangan.map((item, index) => (
                                                        <li key={index} className='flex items-center'>
                                                            <p className='text-sm me-2 '>

                                                                {
                                                                    item.status ? <FaCheck className='text-green-600' /> : <FaMinus className='text-gray-600' />
                                                                }
                                                            </p>
                                                            {item.isi}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <h1 className='font-semibold text-center text-md mt-14 text-df'>Kententuan Pembayaran</h1>
        </div>
    )
}

export default Paket
