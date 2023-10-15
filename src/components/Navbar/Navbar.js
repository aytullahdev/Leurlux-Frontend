import Link from 'next/link';
import React from 'react';

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
        to: "/#about"
    },
    {
        name: "Contact",
        to: "/#contact"
    }
]


const Navbar = () => {
    return (
        <div className=' flex fixed top-0 flex-row justify-between w-full  z-50 bg-black px-10 py-5 items-center'>
            {/* Logo */}
            <Link href="/">
                <img src={require('@/assets/images/logo.png').default.src} className='w-40' />
            </Link>
            {/* Navbar  */}
            <div className='hidden lg:flex flex-row space-x-5 '>
                {
                    navbar.map((singeleNav, indx) => {
                        return <Link key={`navlinks${indx}`} className='text-white font-roboto text-[18px] ' href={singeleNav.to}>{singeleNav.name}</Link>
                    })
                }
            </div>
        </div>
    );
};

export default Navbar;