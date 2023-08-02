"use client"

import {motion,AnimatePresence} from 'framer-motion'
const Maps_location = () => {
  return (
    <div
    
    className="overflow-hidden relative max-w-[600px] sm:border-l border-black w-full h-[400px] sm:h-[840px] px-4">
    <motion.iframe
    initial = {{opacity : 0,scale: 0.3}}
    animate = {{opacity : 1,scale: 1}}
    exist = {{opacity : 0,x:15}}
    transition = {{duration:0.5,delay : 0.25}}


      className='rounded-lg'
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d289.9077628685096!2d6.5602337742149635!3d36.99646688792869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1fb38409375f7%3A0xe47ad9ce662d6a4c!2sInstitut%20De%20Beaut%C3%A9%20Narymen!5e0!3m2!1sen!2sdz!4v1690731075565!5m2!1sen!2sdz"
     width='100%'
      height='100%'
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Map"
    ></motion.iframe>
    </div>
  )
}

export default Maps_location