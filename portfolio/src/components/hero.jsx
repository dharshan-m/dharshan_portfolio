import React from 'react'
import Image from '../assets/Imagem.png'

export default function hero() {
  return (
    <div className='flex flex-row justify-between pl-15 pr-15 pt-15 pb-25 bg-[#F5FCFF]'>
        <div className='flex flex-col gap-5 pt-30'>
          <div>
            <p className='font-semibold'>Hey, I am Dharshan</p>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-5'>
              <h1 className='text-6xl font-bold'>I create</h1>
              <h1 className='text-[#5E3BEE] text-6xl font-bold'>dynamic apps </h1>
            </div>
            <h1 className='text-6xl font-bold'>and streamline UI.</h1>
          </div>
          <div>
            <p className='text-md w-[400px]'>I build dynamic applications, optimize performance, and enhance user experience with clean, efficient code.</p>
          </div>
          <div className='pt-7'>
            <button className='bg-[#5E3BEE] text-xl text-white rounded p-2 '>Get In Touch</button>
          </div>
        </div>
        <div>
          <img className='w-[700px]' src={Image} alt='Image'/>
        </div>
    </div>
  )
}
