import Link from 'next/link';
import React from 'react';
const sections = [
    {
        title: 'Locations',
        to: '/loactions'
    },
    {
        title: 'Services',
        to: '#services'
    },
    {
        title: 'About',
        to: '/about'
    },
    {
        title: 'Contact',
        to: '#contact'
    },
    {
        title: 'Terms & Conditions',
        to: '/terms-condition'
    },
    {
        title: 'Privacy Policy',
        to: '/privacy-policy'
    }
]
const socialIcons = [
    {
        name: 'WhatsApp',
        icon: (
            <img className='w-10 h-10' src={require('@/assets/images/whatsapp.png').default.src} />
        ),
        link: 'https://wa.me/yourphonenumber',
    },
    {
        name: 'TikTok',
        icon: (
            <img className='w-10 h-10' src={require('@/assets/images/tiktok.png').default.src} />
        ),
        link: 'https://www.tiktok.com/@MrMrsfixness',
    },
    {
        name: 'Instagram',
        icon: (
            <img className='w-10 h-10' src={require('@/assets/images/instagram.png').default.src} />
        ),
        link: 'https://www.instagram.com/@MrMrsfixness',
    },
    {
        name: 'Twitter',
        icon: (
            <img className='w-10 h-10' src={require('@/assets/images/twitter.png').default.src} />
        ),
        link: 'https://twitter.com/yourusername',
    },
];
const Footer = () => {
    return (
        <div className='w-full py-10 px-10 bg-black'>
            <div className='grid grid-cols-3 justify-center items-start container mx-auto'>
                <div className='flex flex-col justify-between gap-5'>
                    <img className='w-40' src={require('@/assets/images/logo.png').default.src} />
                    <div>
                        <p className='text-gray-300 font-thin text-base'>Rua Eng. Lucio de Azevedo, no 21-A 2700-347<br />
                            Amadora, Portugal
                        </p>
                    </div>
                    <div>
                        <p className='text-gray-300 font-thin text-base'>info@leurlux.com
                            <br />
                            +34 123 456 789
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-between gap-2'>
                    <h1 className='text-2xl font-roboto text-white '>LUXURY CONCIERGE</h1>
                    {
                        sections.map((singleSection, indx) => {
                            return <Link className='text-base font-thin text-gray-300' href={singleSection.to} key={`footersection${indx}`}>{singleSection.title}</Link>
                        })
                    }
                </div>
                <div className='flex flex-col justify-start gap-5'>
                    <h1 className='text-2xl font-roboto text-white '>FOLLOW US</h1>
                    <div className='flex flex-row gap-2'>
                        {
                            socialIcons.map((singleSocial, indx) => {
                                return <Link className='cursor-pointer' target='_blank' href={singleSocial.link} key={`footersection${indx}`}>{singleSocial.icon}</Link>
                            })
                        }
                    </div>

                </div>

            </div>
        </div >
    );
};

export default Footer;