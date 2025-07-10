import React from 'react'

export default function hero() {
  return (
    <>
    <div className='hero w-[1400px] h-[500px] pl-30 mt-5 ml-17 rounded-xl z-1'>
        <div className='text-white pt-7'>
            <h1 className='text-9xl font-bold mb-10'>Hi, I'm Dharshan<span className="inline-block animate-wave">👋</span></h1>
            <h3 className='text-6xl font-light mb-2'>I build modern websites, web</h3>
            <h3 className='text-6xl font-light mb-20'>apps & mobile apps.</h3>
            <button className='outline-solid rounded-xl text-2xl pt-2 pb-2 pr-6 pl-5 cursor-poniter'>View my work</button>
        </div>
    </div>
    <div className='box1 w-[0px] h-[0px] absolute ml-[100px] mt-[-400px] border-solid'></div>
    <div className='box2 w-[0px] h-[0px] absolute ml-[1200px] mt-[-200px] border-solid'></div>
    </>
  )
}
