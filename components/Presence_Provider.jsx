'use client'

import React from 'react'
import {AnimatePresence} from 'framer-motion'


const Presence_Provider = ({children}) => {
  return (
    <AnimatePresence mode='wait'>{children}</AnimatePresence>
  )
}

export default Presence_Provider