import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const navbar = [
    {
        name: "Home",
        to: "/#top"
    }, {
        name: "Services",
        to: "/#services"
    },
    {
        name: "About",
        to: "/about-us#top"
    },
    {
        name: "Contact",
        to: "/#contact"
    }
]



const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const cardRef = useRef(null);
    return (
        <div className=' flex fixed top-0 flex-row justify-between w-full  z-50 bg-black px-10 py-4 items-center'>
            {/* Logo */}
            <Link href="/">
                <img src={require('@/assets/images/logo.png').default.src} className='w-40' />
            </Link>
            {/* Navbar  */}
            <div className='hidden lg:space-y-0 p-5 lg:p-0 items-center z-50 lg:relative  flex-col lg:flex lg:flex-row lg:space-x-5 '>
                {
                    navbar.map((singeleNav, indx) => {
                        return <Link key={`navlinks${indx}`} className='text-white font-roboto text-[18px] ' href={singeleNav.to}>{singeleNav.name}</Link>
                    })
                }

            </div>
            {isNavOpen && <div ref={cardRef} className='absolute bg-black py-10   top-0 left-0  w-1/2 h-screen justify-start space-y-5  p-5  items-center z-50  flex flex-col lg:hidden  '>
                {
                    navbar.map((singeleNav, indx) => {
                        return <Link key={`navlinks${indx}`} onClick={() => { setIsNavOpen(false) }} className='text-white font-roboto text-[18px] ' href={singeleNav.to}>{singeleNav.name}</Link>
                    })
                }
                <div className='lg:hidden  absolute top-0 right-0 text-white p-5 ' onClick={() => { setIsNavOpen((prev) => (!prev)) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </div>
            </div>}
            <div className='lg:hidden text-white' onClick={() => { setIsNavOpen((prev) => (!prev)) }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </div>
        </div>
    );
};

export default Navbar;