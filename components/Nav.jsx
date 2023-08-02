"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NB from "@/assets/NB.png";
import { useState } from 'react';
import {FiMenu} from 'react-icons/fi'
import {RiCloseLine} from 'react-icons/ri'
import { usePathname } from 'next/navigation'; 




const Nav = () => {
   
    const currentRoute = usePathname();

    
    const [nav, setnav] = useState(false);
    
  return (
    <div className={`relative py-4  border-b p-4 border-black text-md ${currentRoute === "/" && `hidden`}`}>
        <div className='flex flex-col items-center sm:flex-row  justify-between sm:mx-7'>
        <div className='w-[200px]'>
          <Link href='/'>
          <Image src={NB} width='100%' alt='logo'/>
          </Link>
        
        </div>
        <div className='hidden lg:flex gap-5 items-center'>
        <div className={`hover:border-b p-4 border-black ease-in-out duration-300 cursor-pointer ${currentRoute === "/gallery" && `border-b`}`}>
            <div className=''><Link href="/gallery">Gallery</Link></div>
        </div>
        <div className={`hover:border-b p-4 border-black ease-in-out duration-300 cursor-pointer ${currentRoute === "/training" && `border-b`}`}>
            <div><Link href="/training">Training</Link></div>
           
        </div>
        <div className={`hover:border-b p-4 border-black ease-in-out duration-300 cursor-pointer ${currentRoute === "/location" && `border-b`}`}>
        
            <div><Link href="/location">Location</Link></div>
           
        </div>
        <div className={`hover:border-b p-4 border-black ease-in-out duration-300 cursor-pointer ${currentRoute === "/about" && `border-b`}`}>
            <div><Link href="/about">Our Services</Link></div>
           
        </div>
        </div>

         {/* menu icons */}
        <div onClick={() => setnav((prev) => setnav(!prev))} className='py-6 flex items-center lg:hidden cursor-pointer z-20'>
        {nav ?<RiCloseLine  size={30}/>: <FiMenu  size={25}/> 
        }
        </div>

        
       
        {/* mobile nav */}
        <div className={nav ? 'absolute left-0 top-[185px] sm:top-[111px] w-full text-center bg-white ease-in-out duration-500 z-30 lg:hidden' : 'absolute left-[-100%] top-[185px] sm:top-[111px] w-full text-center bg-white ease-in-out z-30 duration-500 lg:hidden '}>
        <div className='flex flex-col items-center text-md'>
        <div className={`py-2.5 hover:bg-[#75857E] w-full duration-300 ${currentRoute === "/gallery" && `bg-[#75857E]`}`}>
            <div ><Link href="/gallery">Gallery</Link></div>
        </div>
        <div className={`py-2.5 hover:bg-[#75857E] w-full duration-300 ${currentRoute === "/training" && `bg-[#75857E]`}`}>
            <div ><Link href="/training">Training</Link></div>
           
        </div>
        <div className={`py-2.5 hover:bg-[#75857E] w-full duration-300 ${currentRoute === "/location" && `bg-[#75857E]`}`}>
            <div><Link href="/location">Location</Link></div>
           
        </div>
        <div className={`py-2.5 hover:bg-[#75857E] w-full duration-300 ${currentRoute === "/about" && `bg-[#75857E]`}`}>
            <div><Link href="/about">Our Services</Link></div>
           
        </div>
        </div>
        </div >


        </div>
        
    </div>
  )
}

export default Nav