import Image from 'next/image'
import React from 'react';
import logo from '../public/assets/logo.svg';
import {FaTable} from 'react-icons/fa';
import {FiMenu} from 'react-icons/fi';
import {TbPaperBag} from 'react-icons/tb';
import {CiSearch} from 'react-icons/ci';
import {AiOutlineHeart,AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='p-6 bg-[#0071dc] text-white'>
        {/* main navbar */}
        <div className='flex items-center gap-5'>
            <FiMenu className='cursor-pointer md:hidden inline-block text-[1.6rem]' />
            <Image src={logo} className='cursor-pointer' alt='Walmart' />
            <div className='hidden cursor-pointer md:flex font-semibold gap-3 items-center'>
                <FaTable className='font-[1rem]' />
                <p> Departments </p>
            </div>
            <div className='hidden cursor-pointer md:flex font-semibold gap-3 items-center'>
                <TbPaperBag className='' />
                <p> Departments </p>
            </div>
            <div className='relative cursor-pointer p-2 bg-white flex-1 rounded-[1.1rem]'>
                <input 
                    className='text-black focus:outline-none w-full bg-white' 
                    placeholder='Search everything at Walmart'
                    type='text' />
                <CiSearch className='right-1 top-1 absolute text-black font-bold p-1 rounded-full bg-yellow-400 text-[1.9rem]' />
            </div>
            <div className='hidden cursor-pointer md:flex font-semibold gap-3 items-center'>
                <AiOutlineHeart className='' />
                <p> My Items </p>
            </div>

            <div className='hidden cursor-pointer md:flex font-semibold gap-3 items-center'>
                <AiOutlineUser className='' />
                <p> Account </p>
            </div>
            <div className='flex cursor-pointer items-center'>
                <AiOutlineShoppingCart className='text-[1.8rem]' />
            </div>
        </div>


    </div>
  )
}

export default Navbar