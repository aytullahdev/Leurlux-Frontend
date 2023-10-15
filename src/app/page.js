'use client'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Services from '@/components/Services/Services'
import About from '@/components/about/About'
import Button from '@/components/resueable/Button'
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
      }} className='px-5 lg:px-10 bg-no-repeat lg:min-h-screen min-w-full py-5 bg-cover flex flex-col justify-start lg:justify-center items-center ' style={{
        backgroundImage: !isHover ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url(${require('@/assets/images/yacht.jpeg').default.src
          })` : `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)),url(${require('@/assets/images/yacht.jpeg').default.src
          })`,
        backgroundSize: 'cover'
      }}>
        <div className='text-3xl lg:text-8xl gap-5 flex flex-col   font-italian text-center ' >
          <h1 style={{ color: 'rgb(242, 245, 220)' }}>
            YOUR ONE STOP
          </h1>
          <h1 style={{ color: 'rgb(193, 182, 134)' }}>
            LUXURY CONCIERGE
          </h1>

        </div>
        <div className='my-10'>
          <Button to={"#services"} text='Services' />
        </div>
      </header>
      <Services />
      <About />
      <Contact />
      <Footer />



    </main>
  )
}
