"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import NB from "@/assets/NB.png";
import {motion,AnimatePresence} from 'framer-motion'
const Main = () => {
  return (
    
    <div className="h-screen flex flex-col justify-center items-center font-primary">
      <motion.h1 
      initial = {{opacity : 0}}
      animate = {{opacity : 1}}
      exist = {{opacity : 0}}
      transition = {{duration :0.5,delay : 0.5 }}
      className="text-md sm:text-xl">Welcome To</motion.h1>
      <motion.div 
      initial = {{opacity : 0,y:'-50%',scale: 0.5}}
      animate = {{opacity : 1,y:0,scale: 1}}
      exist = {{opacity : 0,y:'-50%'}}
      transition = {{delay : 0.35,duration:0.3}}
      className="py-6">
        <Link href='/'>
        <Image src={NB} width={500} alt="logo"/>
        </Link>
        
      </motion.div>
      <motion.div
      initial = {{opacity : 0,y:'150%'}}
      animate = {{opacity : 1,y:0}}
      exist = {{opacity : 0,y:'150%'}}
      transition = {{delay : 0.5 , duration:0.35}}
      className="w-full flex flex-col justify-center items-center m-5 gap-5 lg:flex-row">
        <div className="w-full text-center text-lg cursor-pointer border border-black p-2 hover:bg-black hover:text-white duration-500">
          <Link href="/gallery"> Gallery</Link>
        </div>
        <div className="w-full text-center text-lg cursor-pointer  border border-black p-2 hover:bg-black hover:text-white duration-500">
          <Link href="/training"> Training</Link>
        </div>
        <div className="w-full text-center text-lg cursor-pointer  border border-black p-2 hover:bg-black hover:text-white duration-500">
          <Link href="/location"> Location</Link>
        </div>
        <div className="w-full text-center text-lg cursor-pointer  border border-black p-2 hover:bg-black hover:text-white duration-500">
          <Link href="/about">Our Services</Link>
        </div>
        
       
      </motion.div>
    </div>
   
  );
};

export default Main;
