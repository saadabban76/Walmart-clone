import Image from 'next/image'
import React from 'react'

const SharingContainer = ({title, image, description, btn}) => {
  return (
    <div className='bg-white shadow-sm shadow-gray-600 rounded-[0.8rem] text-black flex flex-col'>
        <Image className='w-full h-[50%]' src={image} alt='image' />
        <div className='flex flex-col space-y-3 p-4'>
            <h3 className='font-semibold text-[1.2rem]'>{title}</h3>
            <p>{description}</p>
            <div>
               <button className='p-2 px-4 border border-black rounded-full font-semibold text-[0.8rem]'>{btn}</button>
            </div>
        </div>
    </div>
  )
}

export default SharingContainer