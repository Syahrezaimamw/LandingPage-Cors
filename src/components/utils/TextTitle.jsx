import React from 'react'

const TextTitle = ({children,warna}) => {
  return (
    <h1 className={`text-center text-xl sm:text-3xl lg:text-4xl font-bold ${warna=='dark'?'text-[#10283f]':'text-white'} `}>{children}</h1>

  )
}

export default TextTitle
