'use client'
import Navbar from '@/components/Navbar/Navbar'
import Services from '@/components/Services/Services'
import About from '@/components/about/About'
import Image from 'next/image'
import { useState } from 'react'


export default function Home() {
  const [isHover, setIsHover] = useState(false)
  return (
    <main className="flex min-h-screen flex-col items-start justify-between  cursor-default ">
      {/* Navbar */}

      <header onMouseLeave={() => {
        setIsHover(false)
      }} onMouseOver={() => {
        setIsHover(true)
      }} className='px-10 bg-no-repeat min-h-screen min-w-full py-5 bg-cover flex justify-center items-center ' style={{
        backgroundImage: !isHover ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${require('@/assets/images/yacht.jpeg').default.src
          })` : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${require('@/assets/images/yacht.jpeg').default.src
          })`,
      }}>
        <div className='text-7xl gap-5 flex flex-col   font-italian text-center ' >
          <h1 style={{ color: 'rgb(242, 245, 220)' }}>
            YOUR ONE STOP
          </h1>
          <h1 style={{ color: 'rgb(193, 182, 134)' }}>
            LUXURY CONCIERGE
          </h1>
        </div>
      </header>
      <Services />
      <About />

     
    </main>
  )
}
