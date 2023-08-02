import React from 'react'
import Formation from '@/components/Formation'
import PageWrapper from '@/components/PageWrapper'
const page = () => {
  return (
    <PageWrapper>
    <div className='w-full '>
      <div className='border-b border-black w-full flex justify-center'>
      <Formation/>
      </div>
      <div className='flex flex-col justify-center text-center items-center pt-8 mb-24'>
            <h2 className='font-second text-4xl font-semibold'>FOR BOOKINGS PLEASE CONTACT</h2>
            <p className='text-2xl pt-8'><strong>Phone:</strong>&nbsp;0557244772</p>
        </div>
    
    </div>
    </PageWrapper>
  )
}

export default page