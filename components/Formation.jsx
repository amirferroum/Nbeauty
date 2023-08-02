"use client"
import React from "react";
import { AiOutlineCheckCircle,AiOutlineCheck} from "react-icons/ai";
import {motion,AnimatePresence} from 'framer-motion'
const Formation = () => {
  const li = ["The structure of the natural nail",
  "Hygiene Standards",
  "Full client consultation",
  "Product knowledge",
  
  "Tools of the trade",
  "Tips & Tricks",
  
  "Filling Techniques",
  "Nail Preparation",
  "Manicure & Pedicure",
  "Massage Techniques",
  "Gel Manicure & Gel Pedicure",
  "Removal of Gel Polish & Enhancements",
  "Nail Art",
  "Home Care/Aftercare advice",
];
  return ( 
    <div className="p-8 max-w-[700px]   lg:border-x">
      <motion.div 
       initial = {{opacity : 0,x:'100%'}}
       animate = {{opacity : 1,x: 1}}
       exist = {{opacity : 0,x:15}}
       transition = {{duration:0.5,delay : 0.25}}
      className="flex flex-col w-full text-center text-3xl gap-3 font-second font-semibold py-16 sm:flex-row justify-center">
        <h1>ONE-TO-ONE TRAINING  </h1>
        <h1>at-Workshop</h1>
      </motion.div>
      <motion.h2 
        initial = {{opacity : 0,x:'-50%'}}
        animate = {{opacity : 1,x: 1}}
        exist = {{opacity : 0,x:15}}
        transition = {{duration:0.5,delay : 0.35}}
        className="text-center font-second font-semibold text-xl">
          NAIL TECHNICIAN TOTAL PRO 
        </motion.h2>
      <motion.div
      initial = {{opacity : 0,scale: 0.3}}
      animate = {{opacity : 1,scale: 1}}
      exist = {{opacity : 0,x:15}}
      transition = {{duration:0.5,delay : 0.45}}
      >
        
        
        <h3 className="py-8 font-semibold">YOU WILL LEARN</h3>
        <p>
          This is a comprehensive course designed to give you everything you
          need to become a successful freelance nail tecnician. The course
          includes a certificate of achievement, training manual, theory,
          practical work, and live demonstrations by Roxanne Campbell.
        </p>
        <p className="pt-12">
          No experience or previous nail qualifications are required.
         
        </p>
        <ul className="grid grid-cols-1 grid-rows-14 sm:grid-cols-2 sm:grid-rows-7 py-4 gap-2 pt-16 boredr-t">
          
          {li.map((li)=>{
            return ( <div className="flex gap-4">
             
              <AiOutlineCheck className=" text-green-600"/>

              <li> {li}</li>
            
              
            </div> )
          } )}
        </ul>
          <div className="flex justify-between py-10 border-y border-black">
            <h1 className="f font-second font-bold text-lg">DURATION</h1>

            <p>3 days of an intensive course (10:00 am – 6:00pm)</p>
          </div>
          <div className="flex justify-between pt-6">
            <h1 className="f font-second font-bold text-lg">FEE</h1>

            <p className="fo font-primary font-bold">15000 DZD</p>
          </div>

      </motion.div>
    </div>
  );
};

export default Formation;
