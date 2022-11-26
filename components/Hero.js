import Image from 'next/image'
import React from 'react';
import hero from '../public/assets/heromain.jpg';
import DealsContainer from './DealsContainer';
import one from '../public/assets/products/one.jpg';
import two from '../public/assets/products/two.jpg';
import three from '../public/assets/products/three.jpg';
import four from '../public/assets/products/four.jpg';
import five from '../public/assets/products/five.jpg';
import six from '../public/assets/products/six.jpg';
import seven from '../public/assets/products/seven.jpg';
import eight from '../public/assets/products/eight.jpg';
import nine from '../public/assets/products/nine.jpg';
import ten from '../public/assets/products/ten.jpg';
import eleven from '../public/assets/products/eleven.jpg';
import SharingContainer from './SharingContainer';
import sone from '../public/assets/sharings/one.jpg';
import stwo from '../public/assets/sharings/two.jpg';
import sthree from '../public/assets/sharings/three.jpg';

const Hero = () => {

    const deals = [
        {
            title:'Top departments',
            images:[five,six,seven],
            deals:['toys','shoes','electronics']
        },
        {
            title:'Score huge savings',
            images:[one,two,three,four],
            deals:['Up to 30% off on Accesories','Up to 50% off on Kitchen','Up to 10% off on Clothing','Up to 90% off on Tvs']
        },

        {
            title:"Cant't-miss deals",
            images:[eight,nine,ten,eleven],
            deals:['Up to 30% off on home','Up to 55% on bicycles','Up to 10% off on Tyres']
        }
    ]

    const sharings = [
        {
            title:'Built for Better',
            image:sone,
            description:'Built for Better producsts with environmental certifications',
            btn:'Learn more'
        },
        {
            title:'Together Somos Mas',
            image:stwo,
            description:'Celebrating Hispanic Culture & Comunidad',
            btn:'Learn more'
        }
        ,
        {
            title:'Black & Unlimited',
            image:sthree,
            description:'For who you are & who you want to be, we are here.',
            btn:'Explore more'
        }
    ]

  return (
    <div className='xl:w-[55%] py-6 px-5 mx-auto w-full  bg-white'>
        <div className='flex flex-col gap-5'>
            {/* Hero Image */}
            <div className='w-full relative'>
                <Image className='rounded-[0.5rem] h-[310px] md:h-[450px]' src={hero} alt='heroImage' />
                <div className='absolute top-3 left-3 w-[34%] flex flex-col gap-3 text-[#0071dc]'>
                    <h1 className=' font-semibold text-[1.2rem] md:text-[2.5rem]' >Get your essentials easily!</h1>
                    <h4 className='text-[0.9rem] md:text-1'>Save time with online pickup or delivery right to your door</h4>
                    <div className='my-5'>
                    <button className='text-black bg-white font-semibold p-1 border-black border rounded-full text-[0.9rem] px-5' >Shop now</button>
                    </div>
                </div>
            </div>
            {/* Deals */}
            <div className='flex flex-col md:flex-row items-center space-y-5 justify-center gap-3'>
            {deals.map((item,i)=>(
                <DealsContainer 
                    key={i}
                    title={item.title}
                    images={item.images}
                    deals={item.deals}
                />
            ))}
            </div>
            {/* Sharings */}
            <div className='text-black p-2 flex flex-col gap-5'>
                <h1 className='text-[1.6rem] font-semibold'>Sharing our values</h1>
                <div className='flex flex-col md:flex-row gap-4'>
                    {sharings.map((item,i)=>(
                        <SharingContainer 
                            key={i}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            btn={item.btn}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero