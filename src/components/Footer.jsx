import React from 'react'
import { ReactComponent as Heart } from "../assets/images/Heart.svg";

const Footer = () => {
    const date = new Date();
  return (
    <div className="md:py-12 py-8 flex justify-center border-t border-[#676C7A80]/50">
 <div className="flex mx-auto px-6 lg:px-16 item justify-between items-center w-screen max-w-[100rem]">
<p className='text-white flex items-center md:text-base text-sm'><span className='md:text-lg text-base mr-2'>&copy;</span> Semira Yesufu  {date.getFullYear()}</p>
<p className='text-white flex items-center mr-4 md:text-base text-sm'>Made with <span className='ml-2'><Heart/></span></p>
 </div>
    </div>
  )
}

export default Footer