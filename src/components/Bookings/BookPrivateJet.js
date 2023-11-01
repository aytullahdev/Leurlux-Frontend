'use client'
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker'

const BookPrivateJet = () => {
    const [bookongData, setBookingData] = useState({
        flyfrom: '',
        flyto: '',
        flydate: '',
        fullname: '',
        email: '',
        phone: '',
        otherdetails: '',
        passengers: 1

    })
    const router = useRouter();
    const { flyfrom, flyto, flydate, fullname, email, phone, otherdetails, passengers } = bookongData
    const handleChange = (e) => {
        setBookingData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const [date, setDate] = useState({
        'arrival': new Date(),
        'departure': new Date(),
    })
    const handleSubmit = () => {
        const { arrival, departure } = date
        if (!flyfrom || !flyto || !arrival || !fullname || !email || !phone || !passengers) {
            toast.error("Please fillup all the information!")
            return
        }

        const data = {
            "data": {
                "name": fullname,
                "flyfrom": flyfrom,
                "flyto": flyto,
                "flydate": arrival,
                "passengers": passengers,
                "email": email,
                "phone": phone,
                "passengers": passengers,
                "otherdetails": otherdetails
            }
        }
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/private-aircraft-requests`;
        const token = `${process.env.NEXT_PUBLIC_API_TOKEN}`;
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        axios.post(apiUrl, data, { headers })
            .then((response) => {
                // Handle the response data here
                console.log(response.data)
                if (response.data.data.id) {
                    toast.success("Thank you for booking")

                    setBookingData({
                        flyfrom: '',
                        flyto: '',
                        flydate: '',
                        fullname: '',
                        email: '',
                        phone: '',
                        otherdetails: '',
                        passengers: 0

                    })
                    router.push(`/success`)
                } else {


                    toast.error("Please try again!")
                }
            })
            .catch((error) => {
                // Handle any errors here
                toast.error("Please try again!")
                console.error(error);
            });
        // handle request


    }
    const countryes = ['Europe', ' New Zealand', 'Australia', 'The South Pacific']
    return <div className='bg-white relative w-full h-full' id='bookprivatejet'>
        {/* <video className='w-full h-full   z-40 ' autoPlay loop muted playsInline>
            <source src="https://cdn.globeair.com/website/m/globeair_website_header_2304_1920x1080.mp4" type="video/mp4" />

        </video> */}
        <div className='absolute text-black flex flex-col gap-2 items-center justify-start  bg-white py-10 px-5 rounded'>
            <div>
                <h1 className='text-3xl lg:text-6xl font-italian'>
                    Private Aircraft Charter
                </h1>
                <ul className='flex items-center justify-center flex-row  my-5 py-5 text-base'>
                    {
                        countryes.map((singleCountry) => {
                            return <li key={singleCountry} className=' font-italian text-sm lg:text-xl text-center mx-[2px] lg:mx-2'>{singleCountry} |</li>
                        })
                    }

                </ul>

            </div>
            <div>
                <h1 className='text-xl font-bold'>Booking Form</h1>
            </div>
            <div className='flex flex-col lg:flex-row lg:flex-wrap w-full  gap-2 justify-start items-center bg-white text-black'>
                <div className='flex flex-col gap-2'>
                    <label>From</label>
                    <input onChange={handleChange} type='text' name='flyfrom' className='border w-[300px] px-5 py-2 rounded' value={flyfrom} placeholder='From' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>To</label>
                    <input onChange={handleChange} type='text' name='flyto' className='border w-[300px] px-5 py-2 rounded' value={flyto} placeholder='To' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Persons</label>
                    <input onChange={handleChange} type='number' name='passengers' className='border w-[300px] px-5 py-2 rounded' value={passengers} placeholder='Passengers' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Fly Date</label>
                    {/* <input onChange={handleChange} type='datetime-local' name='flydate' className='bg-white border  w-[300px] px-5 py-2 rounded' value={flydate} placeholder='Fly date' /> */}
                    <DatePicker
                        className='border  w-full p-2 rounded-lg'
                        selected={date.arrival}
                        onChange={(data) => setDate((prev) => ({ ...prev, 'arrival': data }))}
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={30}
                        dateFormat="Pp"
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Name</label>
                    <input onChange={handleChange} type='text' name='fullname' className='border  w-[300px] px-5 py-2 rounded' value={fullname} placeholder='Full Name...' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Email</label>
                    <input onChange={handleChange} type='email' name='email' className='border  w-[300px] px-5 py-2 rounded' value={email} placeholder='Email...' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Phone</label>
                    <input onChange={handleChange} type='text' name='phone' className='border  w-[300px] px-5 py-2 rounded' value={phone} placeholder='Phone...' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Other Details</label>
                    <textarea onChange={handleChange} type='text' name='otherdetails' className='border  w-[300px] px-5 py-2 rounded' value={otherdetails} placeholder='Other Details...' />
                </div>


            </div>
            <div className='flex flex-row  items-center space-x-5 py-5 justify-center'>
                <button onClick={() => handleSubmit()} className='block px-2 lg:px-5 py-2 bg-black text-white rounded-lg'>Request</button>
                <Link href="/#services" className='block px-5 py-2  text-blue-600 underline font-italian  rounded-lg'>service</Link>
            </div>
        </div>


    </div>

}

export default BookPrivateJet