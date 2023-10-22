import useGlobalContext from '@/hooks/useGlobalContext';
import Link from 'next/link';
import React from 'react';

const sections = [
    {
        title: 'Locations',
        to: '/locations'
    },
    {
        title: 'Services',
        to: '#services'
    },
    {
        title: 'About',
        to: '#about'
    },
    {
        title: 'Contact',
        to: '#contact'
    },
    {
        title: 'Terms & Conditions',
        to: '#terms-condition'
    },
    {
        title: 'Privacy Policy',
        to: '#privacy-policy'
    }
]

const Footer = () => {
    const { links } = useGlobalContext()
    const socialIcons = [
        {
            name: 'WhatsApp',
            icon: (
                <img className='w-10 h-10' src={require('@/assets/images/whatsapp.png').default.src} />
            ),
            link: `https://wa.me/${links.whatsapp}`,
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
                <img className='w-10 h-10' src="/instagram.png" />
            ),
            link: `${links.instagram}`,
        },

    ];
    return (
        <div className='w-full py-10 px-10 bg-black'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-0 justify-center items-start container mx-auto'>
                <div className='flex flex-col justify-between gap-5'>
                    <img className='w-40' src={require('@/assets/images/logo.png').default.src} />
                    <div>
                        <p className='text-gray-300 font-thin text-base'>{links.address}
                        </p>
                    </div>
                    <div>
                        {/* <p className='text-gray-300 font-thin text-base'> {links.mail}
                            <br />
                            {links.phone}
                        </p> */}
                    </div>
                </div>
                <div className='flex flex-col justify-between items-start lg:items-center gap-2'>

                    <div className='flex flex-col justify-between gap-2'>
                        <h1 className='text-2xl font-roboto text-white '>LUXURY CONCIERGE</h1>
                        {
                            sections.map((singleSection, indx) => {
                                return <Link className='text-base font-thin text-gray-300' href={singleSection.to} key={`footersection${indx}`}>{singleSection.title}</Link>
                            })
                        }
                    </div>
                </div>
                <div className='flex flex-col justify-start lg:justify-end items-center lg:items-end gap-2'>
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