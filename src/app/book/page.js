'use client'
import { GlobalContext } from '@/GlobalContext/GlobalContext';
import BookApartment from '@/components/Bookings/BookApartment';
import BookHotle from '@/components/Bookings/BookHotle';
import BookSuperCar from '@/components/Bookings/BookSuperCar';
import BookTransport from '@/components/Bookings/BookTransport';
import BookVilla from '@/components/Bookings/BookVilla';
import BookYacht from '@/components/Bookings/BookYacht';

import { data } from 'autoprefixer';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';

const bookings = {
    'privatejet': {
        'from': {
            type: 'text',
            value: '',
            title: 'From',
        },
        'to': {
            type: 'text',
            value: '',
            title: 'To',
        },
        'departure': {
            type: 'date',
            value: '',
            title: 'Departure'
        },
        'people': {
            type: "option",
            value: {
                'adult': {
                    type: 'number',
                    value: 0,
                    title: 'adult'
                },
                'children': {
                    type: 'number',
                    value: 0,
                    title: 'children',

                }
            }
        }

    },
    'supercar': {
        'carname': {
            type: 'text',
            value: '',
            title: "Car Name"
        },
        'email': {
            type: 'email',
            value: '',
            title: 'Email',
        },
        'from': {
            type: 'text',
            value: '',
            title: 'From',
        },
        'days': {
            type: 'number',
            value: ''
        }
    }
}
const GetInputField = ({ fieldObject }) => {
    return <div className='flex justify-center items-center flex-row gap-4 text-black'>
        {/* <label>
            {fieldObject?.title}
        </label> */}
        <input className='border px-2 py-2 rounded outline-none' value={fieldObject.value} type={fieldObject?.type} placeholder={fieldObject?.title} />
    </div>
}
const GetOptionField = ({ fieldObject }) => {
    return <>{
        Object.keys(fieldObject).map((field, indx) => {
            return <GetInputField key={`optionfield${indx}`} fieldObject={fieldObject[field]} />

        })

    }</>
}
const GetBookingForm = ({ formObject }) => {


    return <div className='flex flex-row gap-4 '>
        {
            Object.keys(formObject).map((field, indx) => {
                if (formObject[field].type === 'option') {
                    return <GetOptionField key={`optionfield${indx}`} fieldObject={formObject[field].value} />
                }
                return <GetInputField key={`optionfield${indx}`} fieldObject={formObject[field]} />
            })
        }

    </div>

}
const BookPrivateJet = () => {

    const countryes = ['Europe', ' New Zealand', 'Australia', 'The South Pacific']
    return <div className='relative w-full h-full' id='bookprivatejet'>
        <video className='w-full h-full   z-40 ' autoPlay loop muted playsInline>
            <source src="https://cdn.globeair.com/website/m/globeair_website_header_2304_1920x1080.mp4" type="video/mp4" />

        </video>
        <div className='absolute inset-0 flex flex-col gap-10 items-center justify-start backdrop-blur-sm bg-white/60 py-10 px-5 rounded'>
            <div>
                <h1 className='text-6xl font-italian'>
                    Private Aircraft Charter
                </h1>
                <ul className='flex items-center justify-center flex-row  my-5 py-5 text-base'>
                    {
                        countryes.map((singleCountry) => {
                            return <li key={singleCountry} className=' font-italian text-xl text-center mx-2'>{singleCountry} |</li>
                        })
                    }

                </ul>

            </div>
            <div className='flex  flex-col gap-5 justify-center items-center'>
                <GetBookingForm formObject={bookings.privatejet} />
                <button className='px-5 py-2 bg-black text-white rounded-lg'>BOOK</button>

            </div>
        </div>


    </div>

}






const BookService = ({ category }) => {

    if (category === 'privatejet') {
        return <BookPrivateJet />
    }
    if (category === 'supercar') {
        return <BookSuperCar />
    }
    if (category === 'yacht') {
        return <BookYacht />
    }
    if (category === 'villa') {
        return <BookVilla />
    }
    if (category === 'apartment') {
        return <BookApartment />
    }
    if (category === 'hotel') {
        return <BookHotle />
    }
    if (category === 'transport') {
        return <BookTransport />
    }


    return <>
        <div className='justify-center items-center flex flex-row h-full w-full py-20'>
            <Link href={'/#services'} className=' text-xl text-black font-italian hover:text-blue-500 underline'>Select a service</Link>
        </div>
    </>

}
const page = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get('category')

    return (
        <>
            {
                category &&
                <BookService category={category} />

            }
        </>
    );
};

export default page;