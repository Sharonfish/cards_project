import React from 'react'
import { FaUserAlt } from "react-icons/fa"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { AiTwotoneCalendar } from "react-icons/ai"

const Card = (props) => {

  const {title, author, date, background_image, description} = props;

  return (
    <div className="rounded shadow-lg flex flex-col w-[22rem] h-[28rem] hover:scale-[1.05] duration-300">
      <div className='w-full h-[13rem]'>
        <img className="h-full w-full object-cover rounded-t" src={background_image}/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className='flex justify-between mb-3'>
          <div className='flex justify-start w-[50%] items-center gap-2'>
            <FaUserAlt color='darkblue'></FaUserAlt>
            <p>{author}</p>
          </div>
          <div className='flex justify-start w-[50%] items-center gap-2'>
            <AiTwotoneCalendar color='darkblue' size={20}></AiTwotoneCalendar>
            <p className='whitespace-nowrap'>{date}</p>
          </div>
        </div>
        <p className="text-gray-500 text-base mb-3">{description}</p>
        <div className='flex items-center hover:text-cyan-500 duration-300'>
          <p className='mr-1.5'>Read More</p>
          <HiOutlineArrowNarrowRight size={20}></HiOutlineArrowNarrowRight>
        </div>
      </div>
    </div>
  )
}

export default Card