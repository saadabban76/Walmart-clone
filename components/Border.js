import Image from 'next/image'
import React from 'react'
import border from '../public/assets/border.svg';

const Border = () => {
  return (
    <div className='md:block hidden relative my-5 w-full -2'>
        <Image 
            src={border} 
            className='w-full'
            alt='border' />
        <div className='flex gap-5 absolute md:text-1 text-[0.8rem] top-2 left-[20%]'>
            <p className='text-white font-bold text-1'>Members get free shipping with no order minimum! Terms apply</p>
            <p className='text-gray-100 font-semibold cursor-pointer hover:text-white underline'>Join Walmart +</p>
        </div>
    </div>
  )
}

export default Border