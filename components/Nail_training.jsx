"use client"
import React from "react";
import NT from "@/assets/nail.png";
import Image from "next/image";
import Link from "next/link";
import {motion,AnimatePresence} from 'framer-motion'
const Nail_training = () => {
  return (
    <motion.div
    initial = {{opacity : 0,y:100}}
    animate = {{opacity : 1,y:0}}
    exist = {{opacity : 0,x:15}}
    transition = {{duration :0.5,delay : 0.25 }}
    className="flex flex-col border-b border-black lg:flex-row">
   
      <div className="text-center p-8">
        <h1 className="pt-8 pb-16 font-second text-6xl font-semibold">Nail Training</h1>
        <p>
          Narimen provides in-depth one-to-one nail training courses
          for those who want to develop their future and career as a
          nail technician. These courses provide the opportunity to learn
          advanced nail techniques from an esteemed nail expert in the industry.
          
        </p>
        <p className="text-xl font-semibold py-8"><span>Call Us : 0557244772</span> </p>
        <div className="text-lg font-semibold hover:text-[#75857E] duration-300 ">
          
          <Link href='/training'>Check Ours</Link>
          
         
        </div>
      </div>
    </motion.div>
  );
};

export default Nail_training;
