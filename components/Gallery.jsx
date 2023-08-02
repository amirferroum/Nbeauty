"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import n from "@/assets/nail1.jpg"
import n1 from "@/assets/nail2.jpg"
import n2 from "@/assets/nail3.jpg"
import n3 from "@/assets/nail4.jpg"
import n4 from "@/assets/nail5.jpg"
import n5 from "@/assets/nail6.jpg"
import e from "@/assets/e.jpg"
import e1 from "@/assets/e1.jpg"
import h from "@/assets/h.jpg"
import h1 from "@/assets/h1.jpg"
import h2 from "@/assets/h2.jpg"
import h3 from "@/assets/h3.jpg"
import {motion,AnimatePresence} from 'framer-motion'

const Gallery = () => {
const img = [n,n1,n2,n3,n4,n5];
const hair = [h,h1,h2,h3];
const eye = [e,e1];
const [nail, setnail] = useState(0);




  return (
    <div className='p-4 flex flex-col justify-center items-center'>
        <motion.div
        initial = {{opacity : 0,scale: 0.3}}
        animate = {{opacity : 1,scale: 1}}
        exist = {{opacity : 0,x:15}}
        transition = {{duration:0.5,delay : 0.25}}
        >
        <h1 className='pt-16 pb-16 font-second text-5xl font-semibold'>Gallery</h1>
        <ul className='flex justify-center gap-6 text-lg font-semibold'>
            <li onClick={()=> setnail(0)} className={`hover:border-b-2 border-black  cursor-pointer ${nail === 0 && `border-b-2`}`}>Nail</li>
            <li onClick={()=> setnail(1)} className={`hover:border-b-2 border-black  cursor-pointer ${nail === 1 && `border-b-2`}`}>Hair</li>
            <li onClick={()=> setnail(2)} className={`hover:border-b-2 border-black  cursor-pointer ${nail === 2 && `border-b-2`}`}>Eyes</li>
        </ul>
        </motion.div>
        

        <div  className='py-12 max-w-[400px] sm:max-w-[600px]  grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-[1000px]'>
            {/* gallery images */}

            {nail===0 && img.map(
                (image,index)=>{

                    return (<motion.div
                        initial = {{opacity : 0,x:15}}
                        animate = {{opacity : 1,x:0}}
                        exist = {{opacity : 0,x:15}}
                        transition = {{delay : 0.25 * index}}
                    
                    ><Image src={image} className='w-full h-full hover:scale-110 duration-300 rounded-lg'/></motion.div>)
                }
            )}
            {nail===1 && hair.map(
                (image,index)=>{

                    return (<motion.div
                        initial = {{opacity : 0,x:15}}
                        animate = {{opacity : 1,x:0}}
                        exist = {{opacity : 0,x:15}}
                        transition = {{delay : 0.25 * index}}
                    
                    ><Image src={image} className='w-full h-full hover:scale-110 duration-300 rounded-lg'/></motion.div>)
                }
            )
            }

{nail===2 && eye.map(
                (image,index)=>{

                    return (<motion.div
                        initial = {{opacity : 0,x:15}}
                        animate = {{opacity : 1,x:0}}
                        exist = {{opacity : 0,x:15}}
                        transition = {{delay : 0.25 * index}}
                    
                    ><Image src={image} className='w-full h-full hover:scale-110 duration-300 rounded-lg'/></motion.div>)
                }
            )
            }
    
        </div>
    </div>
  )
}

export default Gallery