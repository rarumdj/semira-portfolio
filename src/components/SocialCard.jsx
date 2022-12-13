import React from 'react'

const SocialCard = ({title, social}) => {
  return (
    <div className="border group cursor-pointer border-[#676C7A80]/50 rounded-xl w-full bg-gradient-to-r from-[#212224] backdrop-blur-md p-6 ">
    <h4 className="text-white md:text-[23px] text-base font-medium mb-4">{social}</h4>
    <p className="text-[#C4C4C4] md:text-[18px] text-sm group-hover:underline transition-all ease-in-out duration-100 font-light">{title}</p>
  </div>
  )
}

export default SocialCard