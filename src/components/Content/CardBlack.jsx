import { Button } from '@material-tailwind/react';
import React from 'react'
import { FaCheck, FaRegBookmark, FaRegBuilding, FaRegClone } from 'react-icons/fa';
import ButtonTemp from '../utils/ButtonTemp';
import bg from './bgPak.png'
const CardBlack = ({ status }) => {
    const dataCard = [
        {
            title: `Data center lokal
di seluruh dunia`,
            ic: <FaRegBookmark />,
            description: 'Untuk kecepatan maksimal, website Anda akan otomatis terhubung ke data center terdekat di jaringan global kami tanpa tambahan biaya.'
        },
        {
            title: `Tetap ngebut
saat website ramai`,
            ic: <FaRegBuilding />,
            description: 'Waktu loading website tetap ngebut meski traffic kunjungan sedang tinggi.'
        },
        {
            title: `Online setiap saat
24/7`,
            ic: <FaRegClone />,
            description: 'Website selalu online dengan jaminan uptime 99,9%.'
        },
    ]
    return (
        <div className='w-full px-4 py-24 mt-20 bg-[#294d7c]'>
            <h1 className='text-3xl font-bold text-center text-white lg:text-4xl'>Cepat. Andal. Efisien.</h1>
            <p className='mt-4 text-center text-white '>Hadirkan performa website dan pengalaman terbaik bagi pengunjung dengan web hosting paling andal.</p>
            <div className='max-w-screen-xl mx-auto mt-8 '>
                <div className='flex flex-wrap justify-center w-full gap-5 mt-20 lg:justify-between '>
                    {
                        dataCard.map((e, i) => (
                            <div key={i} className='w-[90%] lg:w-[30%] xl:w-[350px]  p-7 pb-14 text-white flex flex-col items-start justify-start rounded-xl bg-[#648fcb]/30'>
                                <div className='flex items-center self-start justify-center px-3 py-3 rounded-lg bg-df'>
                                    {e.ic}

                                </div>
                                <p className='mt-4 text-lg font-semibold w-[70%]'>
                                    {e.title}
                                </p>
                                <p className='mt-5 leading-6'>
                                    {e.description}

                                </p>
                            </div>
                        ))
                    }

                </div>
                <div className='mt-20'>
                    {status === 1 ?
                        <div className='flex justify-center w-full'>
                            <ButtonTemp>
                                Pilih Paket
                            </ButtonTemp>
                        </div> :
                        <div className='flex flex-col-reverse justify-between w-full mt-32 md:flex-row'>
                            <div className='w-full lg:w-[50%] '>
                                <img src={bg} alt="" className='w-full' />

                            </div>
                            <div className='w-full lg:w-[40%] text-white flex p-6 md:p-0 flex-col justify-center items-start '>
                                <h1 className='text-3xl font-semibold md:text-4xl'>
                                    Perlindungan penuh, keamanan terjamin
                                </h1>
                                <ul className='my-8 space-y-5 mb-11'>
                                    <li className='flex items-center gap-2'> <FaCheck className='text-sm text-green-500' /> Amankan file website dengan backup otomatis dan 2FA.</li>
                                    <li className='flex items-center gap-2'> <FaCheck className='text-sm text-green-500' /> Enkripsi trafik website dengan SSL unlimited.</li>
                                    <li className='flex items-center gap-2'> <FaCheck className='text-sm text-green-500' /> Aman dari serangan DDoS dengan nameserver Cloudflare.</li>
                                </ul>
                                {/* <button className='px-12 py-3 font-semibold text-white rounded-md bg-btn'>coba Sekarang</button> */}
                                <ButtonTemp>
                                    Coba Sekarang
                                </ButtonTemp>

                            </div>

                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default CardBlack
