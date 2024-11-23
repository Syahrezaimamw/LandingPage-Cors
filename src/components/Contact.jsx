import React from 'react'
// import { FaSecur } from 'react-icons/fa';

const Contact = () => {
  const handleClick = () => {
    const phoneNumber = '62895375874137'; 
    const message = 'Halo, saya tertarik untuk mengetahui lebih lanjut!'; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank'); 
  };
  return (
    <div data-dial-init="" className="fixed z-50 end-4 bottom-4 group">
      <button
      onClick={handleClick}
        type="button"
        className="flex items-center justify-center text-sm font-semibold text-white bg-[#1a568f] hover:bg-blue-950 active:scale-95 rounded-lg px-4 py-2 "
      >
        <h1>Contact Us</h1>
      </button>
    </div>

  )
}

export default Contact
