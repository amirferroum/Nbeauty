"use client"

import { useContext,useState,useEffect, createContext } from "react"

//create context

const CursorContext = createContext();

const CursorProvider = ({children}) => {
  return (
    <CursorContext value={'this is cursor context'}>
        
{children}
    </CursorContext>
  )
}

export default CursorProvider