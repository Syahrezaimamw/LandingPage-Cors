import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
const Navbar = () => {
    const [openListMenu, setListMenu] = useState(false)
    const daftarListMenu = [
        {
            Title: 'Home',
            path: ""
        },
        {
            Title: 'Package',
            path: ""
        },
        {
            Title: 'Superiority',
            path: ""
        },
        {
            Title: 'History',
            path: ""
        },
        {
            Title: 'Comment',
            path: ""
        },
      

    ]
    return (
        <nav className="fixed top-0 z-20 w-full bg-white border-gray-200 shadow-md">
            <div className='flex items-center justify-center w-full px-3 py-3 font-semibold text-white bg-df'>
                <p className='text-sm font-medium text-center md:text-md'>

                    Lorem ipsum dolor sit amet consectetur <a className='underline'> Dapatkan Segera</a>                 </p>
                    <FaAngleRight className='font-thin  mt-[3px]'/>
            </div>
            <div className="flex flex-wrap items-center justify-between px-4 py-4 mx-auto bg-white max-w-screen-2xl">
                <a href="#" className="flex items-center space-x-3= rtl:space-x-reverse">
                    {/* <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="h-8"
                        alt="Flowbite Logo"
                    /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                        Projext
                    </span>
                </a>
                <button
                    onClick={() => openListMenu ? setListMenu(false) : setListMenu(true)}
                    type="button"
                    className="inline-flex items-center justify-center w-10 h-10 p-2 text-xl text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "

                >
                    <FaBars/>
                </button>
                <div className='flex items-center w-full gap-9 md:w-auto'>

                    <div className={`${openListMenu ? 'block' : 'hidden'} md:block w-full `} id="navbar-dropdown">
                        <ul className="flex flex-col w-full mt-4 font-medium bg-white rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
                            {daftarListMenu.map((e, i) => (
                                <li key={i} className='w-full mt-2 rounded-md hover:bg-df md:bg-white hover:text-white group bg-neutral-100 md:mt-0'>
                                    <a
                                        href="#"
                                        className="block px-3 py-2 text-black rounded hover:text-df md:hover:bg-white md:bg-transparent md:group-hover:text-gray-900 group-hover:text-white md:p-0 "
                                        aria-current="page"
                                    >
                                        {e.Title}
                                    </a>
                                </li>
                            ))}
                            <div className='flex flex-col w-full gap-2 mt-9 md:hidden'>

                                <button className='bg-white border-2 border-df px-4 py-[5px] text-df rounded-md font-semibold'>
                                    Login
                                </button>
                                <button className='bg-df border-2 border-df px-4 py-[5px] text-white rounded-md font-semibold'>
                                    Register
                                </button>
                            </div>
                        </ul>
                    </div>
                    <div className='hidden gap-2 md:flex md:items-center'>
                        <button className='bg-white border-2 border-df px-4 py-[5px] text-df rounded-md font-semibold'>
                            Login
                        </button>
                        <button className='bg-df border-2 border-df px-4 py-[5px] text-white rounded-md font-semibold'>
                            Register
                        </button>

                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
