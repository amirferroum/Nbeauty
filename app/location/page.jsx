import React from 'react'
import Nav from '@/components/Nav'

import Location_info from '@/components/Location_info'
import PageWrapper from '@/components/Presence_Provider'
import Maps_location from '@/components/Maps_location'


const Location = () => {
  
  return (
    <PageWrapper>
    <div className='flex flex-col h-full font-primary'>
      
        <div className='flex flex-col sm:flex-row justify-between'>
        <Location_info/>
        <Maps_location/>
        </div>
   
    </div>
    </PageWrapper>
  )
}

export default Location