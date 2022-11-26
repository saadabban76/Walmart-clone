import Image from 'next/image'
import React from 'react'

const DealsContainer = ({title, images}) => {
  return (
    <div className='md:w-auto w-full flex-col rounded-[0.5rem] border px-7 border-gray-300 shadow-lg gap-2 p-5 bg-white text-black'>
        <h1 className='font-semibold text-[1.4rem]'>{title}</h1>
        <div className='grid grid-cols-2'>
            {images.map((img,i)=>(
                <div key={i} className='flex flex-col'>                    
                    <Image key={i} src={img} className='h-[128px] w-[128px]' alt='products' />
                    <p className='text-[0.8rem] text-center' key={i}>Up to 30% off</p>
                </div>

            ))}
        </div>
    </div>
  )
}

export default DealsContainer