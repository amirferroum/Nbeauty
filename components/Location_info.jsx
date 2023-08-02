'use client'

import React from 'react'
import Link from 'next/link'
import {AiOutlineFacebook,AiOutlineInstagram} from 'react-icons/ai'
import {motion,AnimatePresence} from 'framer-motion'
import PageWrapper from './PageWrapper'



const Location_info = () => {
  return (
    
    <div className='flex flex-col w-full items-center  text-center border-b border-black sm:border-none'>
    <PageWrapper>
        <motion.h1
         initial = {{opacity : 0,x:'100%'}}
       animate = {{opacity : 1,x: 1}}
       exist = {{opacity : 0,x:15}}
       transition = {{duration:0.5,delay : 0.25}}
         className='t text-2xl py-8 font-bold'>
        Institut De Beauté Narymen
        </motion.h1>
        <motion.div
         initial = {{opacity : 0,x:'-100%'}}
       animate = {{opacity : 1,x: 1}}
       exist = {{opacity : 0,x:15}}
       transition = {{duration:0.5,delay : 0.25}}
        >
        <h2
         className='text-lg font-semibold'>PROTHESISTE ONGULAIRE ET PROTHESISTE CILIA </h2>
        <h2
         className='text-lg font-semibold'>ESTHETICIENNE,COIFFEUSE</h2>
        
        </motion.div>
        
        <motion.div
         initial = {{opacity : 0,scale: 0.3}}
         animate = {{opacity : 1,scale: 1}}
         exist = {{opacity : 0,x:15}}
         transition = {{duration:0.5,delay : 0.25}}
        className='py-8 flex flex-col gap-8 items-center text-[#75857E]'>
          <p>Address :</p>
          <p className='text-black font-semibold'>Cité Bouhafer Mohamed ,tahar gzayr, Collo
                      </p>
          <p>Opened : 9 am</p>
          <p >closed : 7 pm</p>
          <h1 className='text-xl text-black font-semibold'>
            Call us Any Time
          </h1>
          <p>Number :</p>
          <p className='text-xl text-black font-semibold'>0557244772</p>
          <p>Or :</p>
          <div className='flex gap-8 pt-8'>
          <Link href='https://www.facebook.com/ferr.narimen/?locale=en_GB' ><AiOutlineFacebook  size={45}/></Link>
          <Link href='https://www.instagram.com/nary151/' ><AiOutlineInstagram  size={45}/></Link>

          </div>
        </motion.div>
        </PageWrapper>
        </div>
       
  )
}

export default Location_info