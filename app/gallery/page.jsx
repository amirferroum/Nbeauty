import React from 'react'
import Nail_training from '@/components/Nail_training'
import Gallery from '@/components/Gallery'
import PageWrapper from '@/components/PageWrapper'
const page = () => {
  return (
    <div>
<PageWrapper>

<Nail_training/>
        <Gallery/>
        
        <div className='flex flex-col justify-center text-center items-center pt-8 mb-24'>
            <h2 className='font-second text-4xl font-semibold'>FOR BOOKINGS PLEASE CONTACT</h2>
            <p className='text-2xl py-4'><strong>Phone:</strong>&nbsp;0557244772</p>
        </div>
</PageWrapper>
    </div>
  )
}

export default page