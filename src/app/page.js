'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Services from '@/components/Services/Services'
import About from '@/components/about/About'
import Image from 'next/image'
import Link from 'next/link'
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
      }} className='px-10 bg-no-repeat min-h-screen min-w-full py-5 bg-cover flex flex-col justify-center items-center ' style={{
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
        <div className='my-10'>
          <Link className='px-5  block text-4xl font-italian py-1 rounded-full bg-gray-300 hover:bg-gray-200 text-black' href="#services">Services</Link>
        </div>
      </header>
      <Services />
      <About />
      <Contact />
      <Footer />



    </main>
  )
}
