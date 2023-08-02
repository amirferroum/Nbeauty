"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
const Footer = () => {
    
    const currentRoute = usePathname();
  return (
    
    <div className={`w-full bg-black text-white font-second font-semibold p-4 flex justify-evenly  ${currentRoute === "/" && `hidden`}`}>
        
        <div className={`text-white hover:border-b-2 ${currentRoute === "/gallery" && `border-b-2`}`}>
            <div className=''><Link href="/gallery">Gallery</Link></div>
        </div>
        <div className={`text-white hover:border-b-2 ${currentRoute === "/training" && `border-b-2`}`}>
            <div><Link href="/training">Training</Link></div>
                                                    
        </div>
        <div className={`text-white hover:border-b-2 ${currentRoute === "/location" && `border-b-2`}`}>
        
            <div><Link href="/location">Location</Link></div>
           
        </div>
        <div className={`text-white hover:border-b-2 ${currentRoute === "/about" && `border-b-2`}`}>
            <div><Link href="/about">Our Services</Link></div>
           
        </div>
        
    </div>
  )
}

export default Footer